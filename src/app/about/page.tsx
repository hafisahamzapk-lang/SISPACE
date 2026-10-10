'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Heart, ShieldCheck, Users, Globe, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-rose-600" />
          <span>OUR MISSION & PURPOSE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Empowering Female Entrepreneurs & Preserving Heritage Crafts
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          SiSpace Qatar is built on a single transformative conviction: when you empower a female entrepreneur, you ignite sustainable progress for entire families and global communities.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Direct Economic Support</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            90%+ of every purchase flows straight to the female creator. We eliminate exploitative middlemen to guarantee fair wages.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Artisanal Quality</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every product is hand-crafted with eco-friendly materials, preserving traditional techniques passed down through generations.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Global Marketplace Access</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We provide female business owners with digital storefront tools, inventory management, and worldwide express shipping.
          </p>
        </div>
      </div>

      {/* Join Action CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-10 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Join the SiSpace Qatar Movement?</h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold transition-colors"
          >
            Shop Handcrafted Products
          </Link>
          <Link
            href="/auth/register-seller"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
          >
            Apply as Seller
          </Link>
        </div>
      </div>

    </div>
  );
}
