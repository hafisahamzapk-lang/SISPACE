import { NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role = 'customer', phone } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide your full name.' },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const supabaseAdmin = createAdminSupabaseClient();

    // 1. Check if user already exists in profiles
    const { data: existingProfile } = await supabaseAdmin
      .from('profiles')
      .select('id, email, full_name, role')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (existingProfile) {
      return NextResponse.json(
        {
          success: false,
          error: 'An account with this email address already exists. Please sign in.',
        },
        { status: 409 }
      );
    }

    // 2. Create the user in Supabase Auth via Admin API
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: cleanEmail,
      password: password,
      email_confirm: true,
      user_metadata: {
        full_name: cleanName,
        role: role,
        phone: phone || null,
      },
    });

    if (authError) {
      // If user exists in auth but not profile, handle gracefully
      if (authError.message.toLowerCase().includes('already registered')) {
        return NextResponse.json(
          {
            success: false,
            error: 'This email is already registered in Supabase. Please sign in instead.',
          },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { success: false, error: authError.message },
        { status: 400 }
      );
    }

    const userId = authUser.user.id;

    // 3. Insert into public.profiles table
    const newProfile = {
      id: userId,
      email: cleanEmail,
      full_name: cleanName,
      phone: phone || null,
      role: role,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data: insertedProfile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .upsert(newProfile)
      .select()
      .single();

    if (profileError) {
      console.error('Error inserting into profiles table:', profileError);
      // Still return the created profile data so the user can continue
      return NextResponse.json({
        success: true,
        message: 'Customer registered (profile sync pending)',
        profile: newProfile,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Customer account registered successfully in Supabase',
      profile: insertedProfile,
    });
  } catch (err: any) {
    console.error('Registration API Error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
