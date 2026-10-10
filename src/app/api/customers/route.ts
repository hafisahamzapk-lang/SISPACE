import { NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase/server';

// GET: Read customer records from Supabase profiles table
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role') || 'customer';
    const email = searchParams.get('email');
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    const supabaseAdmin = createAdminSupabaseClient();

    let query = supabaseAdmin
      .from('profiles')
      .select('*', { count: 'exact' });

    if (role && role !== 'all') {
      query = query.eq('role', role);
    }

    if (email) {
      query = query.eq('email', email.trim().toLowerCase());
    }

    const { data: customers, error, count } = await query
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      count: count || customers?.length || 0,
      customers: customers || [],
    });
  } catch (err: any) {
    console.error('Customer fetch API error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST: Direct customer record creation
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, phone } = body;

    if (!email || !name) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const supabaseAdmin = createAdminSupabaseClient();

    // 1. Create auth user
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: cleanEmail,
      password: password || 'DefaultPass123!',
      email_confirm: true,
      user_metadata: { full_name: cleanName, role: 'customer' },
    });

    if (authError) {
      return NextResponse.json(
        { success: false, error: authError.message },
        { status: 400 }
      );
    }

    // 2. Insert profile record
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .upsert({
        id: authUser.user.id,
        email: cleanEmail,
        full_name: cleanName,
        phone: phone || null,
        role: 'customer',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (profileError) {
      return NextResponse.json(
        { success: false, error: profileError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      customer: profile,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH: Update customer profile in Supabase
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, full_name, phone } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    const supabaseAdmin = createAdminSupabaseClient();
    const updates: any = { updated_at: new Date().toISOString() };
    if (full_name !== undefined) updates.full_name = full_name;
    if (phone !== undefined) updates.phone = phone;

    const { data: updated, error } = await supabaseAdmin
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, customer: updated });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

