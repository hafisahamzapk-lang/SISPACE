'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { Store, Award, MapPin, FileText, CheckCircle2 } from 'lucide-react';

export default function RegisterSellerPage() {
  const router = useRouter();
  const { registerSeller } = useApp();

  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Handcrafted Jewelry');
  const [payoutBank, setPayoutBank] = useState('Bank Transfer / M-Pesa / Stripe');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName) return;

    registerSeller({
      store_name: storeName,
      store_description: storeDescription,
      business_address: location,
    });

    router.push('/seller/onboarding');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white font-bold text-2xl flex items-center justify-center mx-auto shadow-md">
            <Store className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Apply to Become a SiSpace Qatar Seller</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Join thousands of verified female entrepreneurs selling handcrafted & ethical creations worldwide.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>0% Listing Fee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Weekly Payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Global Visibility</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Artisan Store / Brand Name</label>
            <input
              type="text"
              required
              placeholder="e.g., Amina Artisanal Studio"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Primary Product Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600 bg-white"
            >
              <option value="Handcrafted Jewelry">Handcrafted Jewelry</option>
              <option value="Organic Skincare">Organic Skincare</option>
              <option value="Sustainable Fashion">Sustainable Fashion</option>
              <option value="Artisanal Home Decor">Artisanal Home Decor</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Workshop Location / City, Country</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g., Nairobi, Kenya"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Store Mission & Craft Description</label>
            <textarea
              rows={3}
              placeholder="Describe your artisan process, materials used, and brand story..."
              value={storeDescription}
              onChange={(e) => setStoreDescription(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Preferred Payout Method</label>
            <input
              type="text"
              value={payoutBank}
              onChange={(e) => setPayoutBank(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Submit Seller Application for Review</span>
          </button>
        </form>

      </div>
    </div>
  );
}
