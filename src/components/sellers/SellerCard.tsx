'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Seller } from '@/types/database.types';
import { ShieldCheck, MapPin, Star, Store } from 'lucide-react';

interface SellerCardProps {
  seller: Seller;
}

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-fuchsia-300/60 transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1">
      {/* Banner Cover with Gradient Overlay */}
      <div className="relative h-32 w-full bg-slate-100 overflow-hidden">
        <Image
          src={seller.banner_url || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80'}
          alt={seller.store_name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/30 to-transparent" />
        
        {/* Top Verified Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-white/95 backdrop-blur-md text-emerald-800 border border-emerald-200/80 flex items-center gap-1 shadow-sm uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Artisan
          </span>
        </div>
      </div>

      {/* Profile Avatar & Details */}
      <div className="px-6 pt-0 pb-6 relative flex-1 flex flex-col justify-between">
        <div>
          {/* Logo Avatar */}
          <div className="relative -mt-10 mb-3 flex justify-between items-end">
            <div className="relative w-18 h-18 rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-gradient-to-br from-fuchsia-50 to-purple-50 flex items-center justify-center p-1 group-hover:border-fuchsia-200 transition-colors">
              <Image
                src={seller.logo_url || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80'}
                alt={seller.store_name}
                fill
                className="object-contain p-0.5"
              />
            </div>
          </div>

          {/* Store Title */}
          <Link href={`/sellers/${seller.id}`}>
            <h3 className="font-extrabold text-[#3D1466] text-lg group-hover:text-[#D81B60] transition-colors leading-tight">
              {seller.store_name}
            </h3>
          </Link>

          <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed font-normal">
            {seller.store_description || 'Handcrafted sustainable creations made by local women artisans.'}
          </p>
        </div>

        <div>
          {/* Location & Rating */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D81B60]" />
              <span className="truncate max-w-[140px]">{seller.business_address || 'Doha & Global'}</span>
            </div>
            <div className="flex items-center gap-1 font-extrabold text-slate-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{seller.rating || 5.0}</span>
            </div>
          </div>

          {/* CTA Visit Studio Button */}
          <Link
            href={`/sellers/${seller.id}`}
            className="mt-4 w-full py-3 rounded-2xl bg-[#3D1466] hover:bg-[#D81B60] text-white text-xs font-extrabold text-center transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            <Store className="w-3.5 h-3.5" />
            <span>Visit Artisan Studio</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
