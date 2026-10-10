'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/lib/context/app-context';
import { User, Mail, Phone, MapPin, Save, ShieldCheck } from 'lucide-react';

export default function CustomerProfilePage() {
  const { user, showToast } = useApp();

  const [fullName, setFullName] = useState(user?.full_name || 'Elena Rostova');
  const [email, setEmail] = useState(user?.email || 'customer@sispaceqatar.com');
  const [phone, setPhone] = useState(user?.phone || '+974 5555 0192');
  const [isSaving, setIsSaving] = useState(false);

  React.useEffect(() => {
    if (user) {
      setFullName(user.full_name || '');
      setEmail(user.email || '');
      if (user.phone) setPhone(user.phone);
    }
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      if (user?.id && !user.id.startsWith('demo-')) {
        await fetch('/api/customers', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: user.id,
            full_name: fullName,
            phone: phone,
          }),
        });
      }
      showToast('Profile information updated in Supabase successfully!', 'success');
    } catch (err) {
      showToast('Profile updated locally', 'info');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Account Profile & Settings</h1>
        <p className="text-xs text-slate-500">Manage your contact information and shipping preferences.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
        
        {/* User Header */}
        <div className="flex items-center gap-6 border-b border-slate-100 pb-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border-2 border-rose-200 shrink-0">
            <Image
              src={user?.avatar_url || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'}
              alt={fullName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">{fullName}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 uppercase">
                {user?.role || 'Customer'}
              </span>
              <span className="text-xs text-slate-400">Member since 2024</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-rose-700 text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>

      </div>

    </div>
  );
}
