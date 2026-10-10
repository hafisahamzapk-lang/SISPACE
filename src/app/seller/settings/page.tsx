'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/context/app-context';
import { Save, Store, MapPin, FileText } from 'lucide-react';

export default function SellerSettingsPage() {
  const { sellerProfile, updateStoreSettings } = useApp();

  const [storeName, setStoreName] = useState(sellerProfile?.store_name || 'Amina Artisanal Studio');
  const [description, setDescription] = useState(sellerProfile?.store_description || '');
  const [address, setAddress] = useState(sellerProfile?.business_address || 'Nairobi, Kenya');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sellerProfile) {
      updateStoreSettings(sellerProfile.id, {
        store_name: storeName,
        store_description: description,
        business_address: address
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Store Branding & Settings</h1>
        <p className="text-xs text-slate-500">Update your artisan store profile visible to buyers.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Artisan Store Name</label>
            <input
              type="text"
              required
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Workshop Location</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Store Bio & Heritage Story</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Store Settings</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
