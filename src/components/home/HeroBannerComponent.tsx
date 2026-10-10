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
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-[#D81B60]/20 bg-[#290D47] text-white min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center">
      
      {/* Background Editorial Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/sispace_hero_luxury.jpg" 
          alt="Female artisans and entrepreneurs in Doha, Qatar" 
          fill
          priority
          className="object-cover object-center scale-100 hover:scale-102 transition-transform duration-1000"
        />
        {/* SiSpace Brand Gradient Overlay: Deep Royal Purple to Transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#290D47]/95 via-[#3D1466]/75 to-transparent sm:via-[#3D1466]/60 sm:to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#290D47]/85 via-transparent to-black/20" />
        
        {/* Soft Ambient Brand Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D81B60]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Clean, Simple Overlay Content with SiSpace Logo Theme Palette */}
      <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-14 space-y-6">
        
        {/* Minimal Chic Tag with SiSpace Colors */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D1466]/50 backdrop-blur-md border border-[#E60067]/40 text-xs font-semibold tracking-wider uppercase text-pink-200 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4D6D] animate-pulse" />
          <span>SiSpace Qatar • Handcrafted Marketplace</span>
        </div>

        {/* Headline with SiSpace Logo Gradient */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12]">
          Empowering Women <br />
          <span className="font-playfair font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF7597] via-[#FF4D6D] to-[#E60067]">
            Creators & Artisans
          </span>
        </h1>

        {/* Clean, Single Subtitle */}
        <p className="text-sm sm:text-base text-pink-100/90 font-normal max-w-lg leading-relaxed">
          Discover unique handcrafted fashion, jewelry, and artisanal creations by talented female entrepreneurs in Qatar.
        </p>

        {/* Action Buttons styled in SiSpace Logo Colors */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Primary Button: SiSpace Signature Vibrant Magenta / Fuchsia */}
          <Link
            href="/products"
            className="px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E60067] to-[#D81B60] hover:from-[#ff1a7d] hover:to-[#E60067] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D81B60]/35 flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Explore Marketplace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Secondary Button: SiSpace Deep Purple Glass */}
          <Link
            href="/auth/register-seller"
            className="px-6 sm:px-8 py-3.5 rounded-2xl bg-[#3D1466]/40 hover:bg-[#3D1466]/70 text-white backdrop-blur-md border border-fuchsia-300/40 hover:border-fuchsia-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <Award className="w-4 h-4 text-[#FF7597]" />
            <span>Become a Seller</span>
          </Link>
        </div>

        {/* Compact, Integrated Search with SiSpace Logo Theme Search Button */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="relative max-w-md pt-2"
        >
          <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-1.5 shadow-2xl border border-fuchsia-200/50 focus-within:border-[#D81B60] transition-colors">
            <Search className="w-4 h-4 text-[#3D1466]/50 ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Search abayas, jewelry, crafts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs text-slate-900 focus:outline-none bg-transparent placeholder-slate-400 font-medium"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#3D1466] to-[#D81B60] hover:from-[#541988] hover:to-[#E60067] text-white text-xs font-bold shrink-0 shadow-md shadow-[#3D1466]/25 transition-all cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>

      </div>

    </div>
  );
}
