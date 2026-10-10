'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { ProductCard } from '@/components/products/ProductCard';
import { ShieldCheck, MapPin, Star, Calendar, Store, MessageCircle } from 'lucide-react';

export default function SellerStorefrontPage() {
  const params = useParams();
  const { sellers, products, showToast } = useApp();

  const sellerId = params?.id as string;
  const seller = sellers.find((s) => s.id === sellerId) || sellers[0];
  const sellerProducts = products.filter((p) => p.seller_id === seller.id);

  return (
    <div className="space-y-10 pb-20">
      
      {/* Banner & Store Header */}
      <div className="relative">
        <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
          <Image
            src={seller.banner_url || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80'}
            alt={seller.store_name}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        </div>

        {/* Store Profile Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20 z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-white shrink-0 -mt-12 md:-mt-16">
                <Image
                  src={seller.logo_url || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80'}
                  alt={seller.store_name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <h1 className="text-2xl font-black text-slate-900">{seller.store_name}</h1>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Artisan Store
                  </span>
                </div>

                <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                  {seller.store_description || 'Dedicated female artisan creating ethical handcrafted goods.'}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 pt-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>{seller.business_address || 'Global Marketplace'}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-slate-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{seller.rating || 5.0} Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Artisan Since 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => showToast(`Message sent to ${seller.store_name}!`, 'success')}
              className="px-6 py-3 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Artisan</span>
            </button>

          </div>
        </div>
      </div>

      {/* Store Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Store className="w-5 h-5 text-rose-600" />
            <span>Store Listings ({sellerProducts.length})</span>
          </h2>
        </div>

        {sellerProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <p className="text-xs text-slate-500">No active products listed in this shop right now.</p>
          </div>
        )}
      </div>

    </div>
  );
}
