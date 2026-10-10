'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { ProductCard } from '@/components/products/ProductCard';
import { Store, Sparkles, ArrowRight, Tag } from 'lucide-react';

export default function CategoryBrowsePage() {
  const params = useParams();
  const { categories, products } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'nighties' | 'hijabs'>('all');

  const slug = params?.slug as string;
  const category = categories.find((c) => c.slug === slug) || categories[0];

  const isFeminineza = 
    category.id === 'cat-2' || 
    category.id === 'cat-3' || 
    category.slug === 'premium-hijabs-accessories' || 
    category.slug === 'modest-dubai-apparel' ||
    category.name.toLowerCase().includes('feminineza');

  // Retrieve products: If Feminineza, include all products from seller-2 (both Hijabs & Nighties!)
  const allCategoryProducts = products.filter((p) => {
    if (isFeminineza) {
      return p.seller_id === 'seller-2' || p.category_id === 'cat-2' || p.category_id === 'cat-3';
    }
    return p.category_id === category.id || p.category_name?.toLowerCase() === category.name.toLowerCase();
  });

  // Filter for subcategories
  const filteredProducts = allCategoryProducts.filter((p) => {
    if (!isFeminineza || selectedFilter === 'all') return true;
    if (selectedFilter === 'nighties') {
      return p.category_id === 'cat-3' || p.title.toLowerCase().includes('nighties') || p.title.toLowerCase().includes('nightdress');
    }
    if (selectedFilter === 'hijabs') {
      return p.category_id === 'cat-2' || p.title.toLowerCase().includes('hijab');
    }
    return true;
  });

  const nightiesCount = allCategoryProducts.filter(
    (p) => p.category_id === 'cat-3' || p.title.toLowerCase().includes('nighties') || p.title.toLowerCase().includes('nightdress')
  ).length;

  const hijabsCount = allCategoryProducts.filter(
    (p) => p.category_id === 'cat-2' || p.title.toLowerCase().includes('hijab')
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Category Header Banner with Studio Poster Display */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-fuchsia-50/80 via-white to-pink-50/60 p-6 sm:p-10 border border-fuchsia-100 shadow-xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Flyer Images (Shows both if Feminineza Store) */}
        <div className="flex items-center gap-3 shrink-0">
          {category.image_url && (
            <div className="relative w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-fuchsia-200/70 shadow-md flex items-center justify-center p-2 group hover:scale-102 transition-transform">
              <Image
                src={category.image_url}
                alt={category.name}
                fill
                className="object-contain p-1 drop-shadow-sm"
              />
            </div>
          )}

          {isFeminineza && (
            <div className="relative w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-fuchsia-200/70 shadow-md hidden sm:flex items-center justify-center p-2 group hover:scale-102 transition-transform">
              <Image
                src="/images/qatar/dubai_nighties_flyer.jpg"
                alt="Feminineza Dubai Nighties 4 for QAR 100"
                fill
                className="object-contain p-1 drop-shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Text Header */}
        <div className="relative z-10 space-y-4 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-100 to-pink-100 text-[#3D1466] border border-fuchsia-200 font-extrabold text-xs uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E60067]" />
            <span>{isFeminineza ? 'Feminineza Store Official Collection' : 'Verified Artisan Category'}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            {category.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {category.description}
          </p>

          {isFeminineza && (
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="/sellers/seller-2"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3D1466] hover:bg-[#541988] text-white text-xs font-bold transition-all shadow-sm"
              >
                <Store className="w-4 h-4 text-pink-300" />
                <span>Visit Feminineza Storefront</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs font-bold text-[#E60067] bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-200">
                Special Offer: Dubai Nighties 4 PC for QAR 100!
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Subcategory Filter Pills for Feminineza */}
      {isFeminineza && (
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#3D1466] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Feminineza Items ({allCategoryProducts.length})
          </button>

          <button
            onClick={() => setSelectedFilter('nighties')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFilter === 'nighties'
                ? 'bg-[#E60067] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Dubai Nighties Collection ({nightiesCount})</span>
          </button>

          <button
            onClick={() => setSelectedFilter('hijabs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'hijabs'
                ? 'bg-[#3D1466] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Premium Hijabs ({hijabsCount})
          </button>
        </div>
      )}

      {/* Category Products */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>{filteredProducts.length} Artisan Items in {category.name}</span>
          <Link href="/products" className="text-[#E60067] hover:underline">
            View All Categories &rarr;
          </Link>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-800 text-base">No items currently available in this filter</h3>
            <p className="text-xs text-slate-500">Check back soon for new artisan uploads!</p>
          </div>
        )}
      </div>

    </div>
  );
}
