'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/database.types';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { Heart, ShoppingBag, Star, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-fuchsia-200/80 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-fuchsia-50/40 via-white to-purple-50/40 p-2 flex items-center justify-center">
        <Image
          src={product.images[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Soft Image Overlay */}
        <div className="absolute inset-0 bg-purple-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Wishlist Heart Toggle */}
        <button
          suppressHydrationWarning
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full z-10 backdrop-blur-md transition-all duration-200 shadow-xs ${
            inWishlist 
              ? 'bg-[#E60067] text-white shadow-md scale-110' 
              : 'bg-white/90 text-slate-600 hover:bg-white hover:text-[#E60067] hover:scale-110'
          }`}
          title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart className={`w-4 h-4 transition-transform ${inWishlist ? 'fill-white' : ''}`} />
        </button>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3 bg-white">
        <div className="space-y-1.5">
          
          {/* Seller Tag */}
          {product.seller_name && (
            <div className="flex items-center gap-1.5 text-xs text-[#3D1466] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{product.seller_name}</span>
            </div>
          )}

          {/* Product Title */}
          <Link href={`/products/${product.id}`} className="block group-hover:text-[#D81B60] transition-colors">
            <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug">
              {product.title}
            </h3>
          </Link>
        </div>

        <div>
          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-3">
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-extrabold text-slate-800">{product.rating || 5.0}</span>
            <span className="text-slate-400 font-medium">({product.reviews_count || 12})</span>
          </div>

          {/* Price & Add to Cart Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
              <div className="font-black text-[#3D1466] text-base">
                {formatCurrency(product.price)}
              </div>
              {product.compare_at_price && (
                <div className="text-xs text-slate-400 line-through font-medium">
                  {formatCurrency(product.compare_at_price)}
                </div>
              )}
            </div>

            <button
              suppressHydrationWarning
              onClick={() => addToCart(product, 1)}
              className="px-3.5 py-2.5 rounded-xl bg-[#3D1466] hover:bg-[#D81B60] text-white transition-all flex items-center gap-1.5 shadow-xs hover:shadow-md text-xs font-bold shrink-0"
              title="Add to Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
