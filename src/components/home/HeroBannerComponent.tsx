'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, ShoppingBag, Award, ArrowRight, Search } from 'lucide-react';

export function HeroBannerComponent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/products');
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-200/40 bg-stone-900 text-white min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center">
      
      {/* Background Editorial Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/sispace_hero_luxury.jpg" 
          alt="Female artisans and entrepreneurs in Doha, Qatar" 
          fill
          priority
          className="object-cover object-center scale-100 hover:scale-102 transition-transform duration-1000"
        />
        {/* Soft Luxury Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10 sm:via-black/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
      </div>

      {/* Clean, Simple Overlay Content */}
      <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-14 space-y-6">
        
        {/* Minimal Chic Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-200 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>SiSpace Qatar • Handcrafted Marketplace</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12]">
          Empowering Women <br />
          <span className="font-playfair font-black italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-amber-200 to-rose-300">
            Creators & Artisans
          </span>
        </h1>

        {/* Clean, Single Subtitle */}
        <p className="text-sm sm:text-base text-stone-200 font-normal max-w-lg leading-relaxed">
          Discover unique handcrafted fashion, jewelry, and artisanal creations by talented female entrepreneurs in Qatar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="/products"
            className="px-6 sm:px-8 py-3.5 rounded-2xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 group"
          >
            <ShoppingBag className="w-4 h-4 text-rose-700" />
            <span>Explore Marketplace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/auth/register-seller"
            className="px-6 sm:px-8 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Become a Seller</span>
          </Link>
        </div>

        {/* Compact, Integrated Search */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="relative max-w-md pt-2"
        >
          <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-1.5 shadow-xl border border-white/40">
            <Search className="w-4 h-4 text-stone-400 ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Search abayas, jewelry, crafts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-900 focus:outline-none bg-transparent placeholder-stone-400 font-medium"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-rose-700 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>

      </div>

    </div>
  );
}
