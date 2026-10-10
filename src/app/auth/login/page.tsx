'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { UserRole } from '@/types/database.types';
import { LogIn, Mail, Lock, User, Store, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('customer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, selectedRole);

    if (selectedRole === 'seller') {
      router.push('/seller/dashboard');
    } else if (selectedRole === 'admin') {
      router.push('/admin/dashboard');
    } else {
      router.push('/customer/orders');
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
        
        {/* Brand */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-700 to-amber-600 text-white font-bold text-2xl flex items-center justify-center mx-auto shadow-md">
            S
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Sign In to SiSpace Qatar</h1>
          <p className="text-xs text-slate-500">Access your artisan orders, vendor dashboard, or platform administration.</p>
        </div>

        {/* Role Toggle Selector */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setSelectedRole('customer'); setEmail('customer@sispaceqatar.com'); }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              selectedRole === 'customer' ? 'bg-white text-rose-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" /> Buyer
          </button>
          <button
            type="button"
            onClick={() => { setSelectedRole('seller'); setEmail('amina@sispaceqatar.com'); }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              selectedRole === 'seller' ? 'bg-white text-amber-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Store className="w-3.5 h-3.5" /> Seller
          </button>
          <button
            type="button"
            onClick={() => { setSelectedRole('admin'); setEmail('admin@sispaceqatar.com'); }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              selectedRole === 'admin' ? 'bg-white text-emerald-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="customer@sispaceqatar.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Password</label>
              <Link href="/auth/forgot-password" className="text-[11px] font-semibold text-rose-700 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password || '••••••••'}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl text-white font-bold text-xs rose-gradient-btn shadow-md flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In ({selectedRole.toUpperCase()})</span>
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>Don't have an account yet? </span>
          <Link href="/auth/register" className="font-bold text-rose-700 hover:underline">
            Register as Customer
          </Link>
          <span className="mx-1.5">or</span>
          <Link href="/auth/register-seller" className="font-bold text-amber-700 hover:underline">
            Become a Seller
          </Link>
        </div>

      </div>
    </div>
  );
}
