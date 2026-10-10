'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { SellerCard } from '@/components/sellers/SellerCard';
import { HeroBannerComponent } from '@/components/home/HeroBannerComponent';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  ShoppingBag, 
  ShieldCheck, 
  Globe,
  Search,
  Star,
  CheckCircle2,
  Truck,
  HeartHandshake,
  Send,
  Leaf
} from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const { categories, sellers } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Search submission handler
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/products');
    }
  };

  const activeSellers = sellers.filter(s => s.status === 'approved').slice(0, 3);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setSubscribedEmail('');
      }, 5000);
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20 overflow-hidden bg-[#fdfbf9]">
      
      {/* 1. SISPACE QATAR HERO SECTION WITH BRAND COLOR ACCENTS */}
      <section className="relative overflow-hidden hero-gradient pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-fuchsia-100/70">
        
        {/* Soft Decorative Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Hero Header & Search Bar */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Top Micro Badge with Soft Glow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-fuchsia-200/90 text-[#3D1466] text-[11px] sm:text-xs font-extrabold tracking-widest uppercase shadow-sm hover:shadow-md transition-all">
              <Sparkles className="w-3.5 h-3.5 text-[#E60067] animate-pulse" />
              <span>Supporting Indian & Expat Women Creators in Qatar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            {/* Main Headline with Thin Elegant Sans & Rich Serif Gradient */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl text-slate-800 tracking-tight leading-[1.18] font-light">
                Empowering Indian Female Entrepreneurs in Qatar
              </h1>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-black bg-gradient-to-r from-[#3D1466] via-[#D81B60] to-[#E60067] bg-clip-text text-transparent leading-[1.18]">
                Handcrafted Heritage & Home Business
              </div>
            </div>

            {/* App Platform Description */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                Qatar’s premier digital e-commerce marketplace dedicated to empowering Indian and expat female entrepreneurs. We provide home-based business owners and creative artisans with a platform to showcase their craft, connect directly with customers, and grow nationwide.
              </p>

              {/* Core App Feature Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700 pt-1">
                <span className="px-3.5 py-1.5 rounded-xl bg-fuchsia-50/80 border border-fuchsia-100 text-[#3D1466] flex items-center gap-1.5">
                  🛍️ Digital Storefronts
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-purple-50/80 border border-purple-100 text-[#3D1466] flex items-center gap-1.5">
                  🤝 Direct Creator Revenue
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-pink-50/80 border border-pink-100 text-[#D81B60] flex items-center gap-1.5">
                  🛡️ Verified Women Artisans
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50/80 border border-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  🚚 Nationwide Delivery
                </span>
              </div>
            </div>

            {/* Interactive Search Bar */}
            <form 
              onSubmit={handleSearchSubmit} 
              className="max-w-2xl mx-auto relative flex items-center bg-white p-2 rounded-2xl shadow-xl border border-fuchsia-200/80 hover:border-[#D81B60] transition-all"
            >
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search Qatari abayas, Kundan jewelry, organic oud, linen wraps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2.5 text-sm text-slate-900 focus:outline-none bg-transparent placeholder-slate-400 font-semibold"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-white font-extrabold text-xs sispace-gradient-btn shrink-0 flex items-center gap-1.5 shadow-md"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Popular Search Hashtags */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Popular:</span>
              {[
                { label: 'Abayas', query: 'abaya' },
                { label: 'Kundan Jewelry', query: 'jewelry' },
                { label: 'Organic Skincare', query: 'skincare' },
                { label: 'Linen Wraps', query: 'linen' },
                { label: 'Ceramics', query: 'pottery' }
              ].map((tag) => (
                <button
                  key={tag.label}
                  onClick={() => router.push(`/products?search=${tag.query}`)}
                  className="px-3.5 py-1 rounded-full bg-white hover:bg-fuchsia-50 text-slate-700 hover:text-[#D81B60] font-semibold border border-slate-200 transition-all shadow-2xs hover:shadow-xs"
                >
                  #{tag.label}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-white font-black text-xs uppercase tracking-wider sispace-gradient-btn shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore SiSpace Qatar Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/auth/register-seller"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-[#3D1466] font-bold text-xs uppercase tracking-wider border border-purple-200 shadow-xs flex items-center justify-center gap-2 transition-all hover:shadow-md"
              >
                <Award className="w-4 h-4 text-[#D81B60]" />
                <span>Become a Seller in Qatar</span>
              </Link>
            </div>
          </div>

          {/* SISPACE QATAR RAZOR-SHARP HERO BANNER SHOWCASE */}
          <div className="pt-4">
            <HeroBannerComponent />
          </div>

          {/* Trust Metrics Bar - Fresh Launch Mode */}
          <div className="pt-8 border-t border-fuchsia-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-fuchsia-100">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">50+</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Founding Women Creators in Qatar</div>
            </div>
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-fuchsia-100">
              <div className="text-2xl sm:text-3xl font-black text-[#D81B60]">100%</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Direct Revenue to Artisans</div>
            </div>
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-fuchsia-100">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700">Express</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Doha & Qatar Delivery</div>
            </div>
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-fuchsia-100">
              <div className="text-2xl sm:text-3xl font-black text-[#3D1466]">100%</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Handcrafted & Verified Quality</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. VALUE PROPOSITION PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Sparkles,
              color: 'bg-fuchsia-100 text-[#D81B60]',
              title: '100% Authentic Handcrafts',
              desc: 'Every piece is handmade by verified women artisans with genuine heritage technique.'
            },
            {
              icon: HeartHandshake,
              color: 'bg-purple-100 text-[#3D1466]',
              title: '90%+ Direct Revenue',
              desc: 'Your purchase directly empowers female entrepreneurs & sustains micro-businesses.'
            },
            {
              icon: Leaf,
              color: 'bg-emerald-100 text-emerald-900',
              title: 'Sustainable & Organic',
              desc: 'Organic Arabian botanicals, recycled precious metals, and zero-plastic packaging.'
            },
            {
              icon: Truck,
              color: 'bg-indigo-100 text-indigo-900',
              title: 'Global Tracked Shipping',
              desc: 'Secure international delivery to Qatar, GCC & worldwide with buyer protection.'
            }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col gap-3 group transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CURATED CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black tracking-widest text-[#D81B60] uppercase">Curated Marketplace</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Shop by Sustainable Category
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-extrabold text-[#3D1466] hover:text-[#D81B60] flex items-center gap-1 group uppercase tracking-wider"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-fuchsia-300 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1.5"
            >
              {/* Studio Framed Image Container (Full Image Visible with Studio Shadow) */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#FAF5FF] via-[#FDFBF9] to-[#FFF5F8] p-3 overflow-hidden border-b border-fuchsia-100/70 flex items-center justify-center">
                <Image
                  src={category.image_url || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-1.5 drop-shadow-md group-hover:scale-106 transition-transform duration-500 ease-out"
                />
                
                {/* Top Left Verified Artisan Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#3D1466] border border-fuchsia-200/90 text-[10px] font-black uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D81B60] animate-pulse" />
                  <span>Artisan Verified</span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-3 bg-white">
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-[#3D1466] text-base group-hover:text-[#D81B60] transition-colors leading-snug line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                    {category.description}
                  </p>
                </div>

                {/* Explore Collection Action Button */}
                <div className="pt-2">
                  <div className="w-full py-2.5 rounded-xl bg-fuchsia-50 group-hover:bg-gradient-to-r group-hover:from-[#3D1466] group-hover:to-[#D81B60] text-[#3D1466] group-hover:text-white text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 shadow-xs">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. MEET THE MAKERS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black tracking-widest text-[#D81B60] uppercase">Meet the Artisans</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Female Creators & Studio Founders
            </h2>
          </div>
          <Link
            href="/auth/register-seller"
            className="text-xs font-extrabold text-[#3D1466] hover:text-[#D81B60] flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Apply to Join as a Seller</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeSellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </section>

      {/* 5. GLOBAL IMPACT & ETHICAL MISSION BANNER IN SISPACE PURPLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#290D47] via-[#3D1466] to-[#1E0835] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-purple-900/50">
          
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D81B60]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E60067]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/90 text-pink-300 text-xs font-bold border border-pink-700/50">
                <Globe className="w-3.5 h-3.5 text-pink-400" />
                <span>Ethical E-Commerce Movement</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Every Purchase Directly Sustains Female Creators & Local Families.
              </h2>
              
              <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Traditional retail markups extract up to 80% of value from artisans. At SiSpace Qatar, we provide direct digital storefront access, business tools, and fair-trade revenue models to ensure female craftswomen thrive.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl magenta-gradient-btn text-white font-extrabold text-xs shadow-md uppercase tracking-wider"
                >
                  Read Our Impact Story
                </Link>
                <Link
                  href="/auth/register"
                  className="px-6 py-3.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-white font-bold text-xs border border-purple-700/60 transition-colors uppercase tracking-wider"
                >
                  Join as Customer
                </Link>
              </div>
            </div>

            {/* Impact Highlights Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-purple-950/70 border border-purple-800/60 text-center">
                <div className="text-3xl font-black text-pink-400">100%</div>
                <div className="text-xs font-bold text-purple-200 mt-1">Ethical Sourcing</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/70 border border-purple-800/60 text-center">
                <div className="text-3xl font-black text-amber-300">45+</div>
                <div className="text-xs font-bold text-purple-200 mt-1">Countries Supported</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/70 border border-purple-800/60 text-center">
                <div className="text-3xl font-black text-emerald-400">90%+</div>
                <div className="text-xs font-bold text-purple-200 mt-1">Artisan Revenue</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/70 border border-purple-800/60 text-center">
                <div className="text-3xl font-black text-sky-300">4.9/5</div>
                <div className="text-xs font-bold text-purple-200 mt-1">Customer Reviews</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. VERIFIED CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-black tracking-widest text-[#D81B60] uppercase">Loved by Shoppers</div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Stories & Reviews from SiSpace Qatar Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "The quality of the sunburst hoop earrings exceeded all my expectations. Knowing the exact female artisan behind them makes it so special!",
              author: "Elena Rostova",
              role: "Verified Buyer",
              rating: 5,
              item: "Hand-Hammered Brass Earrings"
            },
            {
              quote: "The organic Arabian whipped body butter smells divine and feels ultra-luxurious. The packaging was completely sustainable and beautiful.",
              author: "Amara Vance",
              role: "Verified Buyer",
              rating: 5,
              item: "Raw Whipped Shea Body Butter"
            },
            {
              quote: "SiSpace Qatar has given our artisanal workshop global visibility. We were able to hire 3 more women in our local village this year!",
              author: "Amina Kendall",
              role: "Artisan Studio Founder",
              rating: 5,
              item: "Amina Artisanal Studio"
            }
          ].map((testimonial, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-slate-900 text-xs">{testimonial.author}</div>
                  <div className="text-[10px] text-slate-400 font-bold">{testimonial.role}</div>
                </div>
                <span className="text-[10px] font-extrabold text-[#D81B60] bg-fuchsia-50 px-2.5 py-1 rounded-full border border-fuchsia-200/60">
                  {testimonial.item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SISPACE QATAR VIP INSIDER CLUB NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#3D1466] via-[#D81B60] to-[#E60067] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
          
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-pink-200" />
              <span>SiSpace Qatar VIP Insider Club</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get 15% Off Your First Handcrafted Order
            </h2>
            <p className="text-purple-100 text-xs sm:text-sm font-medium">
              Subscribe to discover newly onboarded artisans, exclusive limited drops, and impact updates. No spam ever.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {newsletterSubmitted ? (
              <div className="bg-white/95 text-slate-900 px-6 py-4 rounded-2xl flex items-center gap-2.5 font-extrabold text-xs shadow-md">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>You're subscribed! Use code SISPACE15 at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none shadow-sm flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#290D47] hover:bg-[#3D1466] text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-2 shrink-0 uppercase tracking-wider"
                >
                  <span>Join Club</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
