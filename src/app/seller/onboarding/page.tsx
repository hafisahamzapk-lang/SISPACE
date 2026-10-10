'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context/app-context';
import { Clock, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SellerOnboardingPage() {
  const { sellerProfile } = useApp();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8 animate-spin" />
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 uppercase">
          Application Pending Admin Verification
        </span>

        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Welcome, {sellerProfile?.store_name || 'Artisan Partner'}!
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your seller application has been submitted to the SiSpace Qatar Admin Verification Team. We review all shop applications within 24–48 hours to maintain vendor quality and fair trade standards.
        </p>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3 text-xs text-slate-700">
          <h4 className="font-bold text-slate-900">Application Summary:</h4>
          <div>• <span className="font-semibold">Store Name:</span> {sellerProfile?.store_name}</div>
          <div>• <span className="font-semibold">Location:</span> {sellerProfile?.business_address}</div>
          <div>• <span className="font-semibold">Status:</span> <span className="text-amber-700 font-bold uppercase">{sellerProfile?.status || 'Pending'}</span></div>
        </div>

        <div className="pt-2 flex justify-center gap-4">
          <Link
            href="/seller/dashboard"
            className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
          >
            <span>Preview Seller Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
