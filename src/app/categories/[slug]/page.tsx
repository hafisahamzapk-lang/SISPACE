'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { ProductCard } from '@/components/products/ProductCard';

export default function CategoryBrowsePage() {
  const params = useParams();
  const { categories, products } = useApp();

  const slug = params?.slug as string;
  const category = categories.find((c) => c.slug === slug) || categories[0];
  const categoryProducts = products.filter((p) => p.category_id === category.id || p.category_name?.toLowerCase() === category.name.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Category Header Banner with Studio Poster Display */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50/60 p-6 sm:p-10 border border-rose-100 shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Flyer Image Poster */}
        {category.image_url && (
          <div className="relative w-full md:w-56 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden bg-white border border-rose-200/70 shadow-md flex items-center justify-center p-2">
            <Image
              src={category.image_url}
              alt={category.name}
              fill
              className="object-contain p-1 drop-shadow-sm"
            />
          </div>
        )}

        {/* Text Header */}
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 font-extrabold text-xs uppercase tracking-wider shadow-2xs">
            <span>Verified Artisan Category</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">{category.name}</h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{category.description}</p>
        </div>
      </div>

      {/* Category Products */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>{categoryProducts.length} Artisan Items in {category.name}</span>
          <Link href="/products" className="text-rose-700 hover:underline">View All Categories &rarr;</Link>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-800 text-base">No items currently available in this category</h3>
            <p className="text-xs text-slate-500">Check back soon for new artisan uploads!</p>
          </div>
        )}
      </div>

    </div>
  );
}
