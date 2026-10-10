'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context/app-context';
import { ProductCard } from '@/components/products/ProductCard';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Saved Wishlist</h1>
        <p className="text-xs text-slate-500">Your favorite artisan creations saved for later.</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <ProductCard key={item.product_id} product={item.product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-slate-900 text-xl">Your Wishlist is Empty</h3>
          <p className="text-xs text-slate-500">Click the heart icon on any artisan creation to save it here.</p>
          <Link
            href="/products"
            className="inline-block px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-md"
          >
            Explore Catalog
          </Link>
        </div>
      )}

    </div>
  );
}
