import { NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, role = 'customer' } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const supabaseAdmin = createAdminSupabaseClient();

    // 1. Fetch user profile from Supabase profiles table
    const { data: profile, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile from Supabase:', error);
    }

    if (profile) {
      return NextResponse.json({
        success: true,
        source: 'supabase',
        profile: profile,
      });
    }

    // 2. Demo accounts fallback if user is testing with mock accounts
    if (
      cleanEmail.includes('customer@sispaceqatar.com') ||
      cleanEmail.includes('amina@sispaceqatar.com') ||
      cleanEmail.includes('admin@sispaceqatar.com')
    ) {
      return NextResponse.json({
        success: true,
        source: 'demo',
        profile: {
          id: `demo-${role}`,
          email: cleanEmail,
          full_name: role === 'customer' ? 'Elena Rostova' : role === 'seller' ? 'Amina Kendall' : 'Platform Administrator',
          role: role,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      });
    }

    // 3. User not found in Supabase
    return NextResponse.json(
      {
        success: false,
        error: `No ${role} account found for ${cleanEmail}. Please register first!`,
      },
      { status: 404 }
    );
  } catch (err: any) {
    console.error('Login API error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
