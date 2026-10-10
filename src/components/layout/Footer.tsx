'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles, Shield, Award, Truck } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-[#1E0835] text-purple-200 pt-16 pb-12 border-t border-purple-900/60 mt-auto" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-purple-900/60 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-700/50 text-pink-400 flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">100% Women-Owned</h4>
              <p className="text-xs text-purple-200/80">Direct impact supporting female artisans & home entrepreneurs.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-700/50 text-pink-400 flex items-center justify-center shrink-0 shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Verified Vendors</h4>
              <p className="text-xs text-purple-200/80">Vetted for quality, sustainability, and fair trade practices.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-700/50 text-pink-400 flex items-center justify-center shrink-0 shadow-md">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Global Express Delivery</h4>
              <p className="text-xs text-purple-200/80">Secure door-to-door shipping & real-time tracking.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Logo size="sm" variant="dark" />
            <p className="text-xs text-purple-200/80 leading-relaxed">
              SiSpace Qatar is a premier e-commerce platform dedicated to amplifying female creators, artisans, and entrepreneurs by connecting their unique creations directly with conscious buyers.
            </p>
            <div className="flex items-center gap-2 text-pink-400 text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Empowering Women’s Home Businesses</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-extrabold text-white text-sm mb-4">Shop Categories</h5>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li><Link href="/categories/handcrafted-jewelry" className="hover:text-pink-400 transition-colors">Handcrafted Jewelry</Link></li>
              <li><Link href="/categories/organic-skincare" className="hover:text-pink-400 transition-colors">Organic Skincare</Link></li>
              <li><Link href="/categories/sustainable-fashion" className="hover:text-pink-400 transition-colors">Sustainable Slow Fashion</Link></li>
              <li><Link href="/categories/artisanal-home-decor" className="hover:text-pink-400 transition-colors">Artisanal Home Decor</Link></li>
              <li><Link href="/products" className="hover:text-pink-400 transition-colors">All New Arrivals</Link></li>
            </ul>
          </div>

          {/* Seller & Platform Portal */}
          <div>
            <h5 className="font-extrabold text-white text-sm mb-4">For Sellers & Partners</h5>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li><Link href="/auth/register-seller" className="hover:text-pink-300 font-extrabold text-pink-400 transition-colors">Apply as a Seller &rarr;</Link></li>
              <li><Link href="/seller/dashboard" className="hover:text-pink-400 transition-colors">Seller Dashboard</Link></li>
              <li><Link href="/seller/onboarding" className="hover:text-pink-400 transition-colors">Seller Guidelines & Standards</Link></li>
              <li><Link href="/admin/login" className="hover:text-pink-400 transition-colors">Admin Portal Login</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-white text-sm">Join Our Community</h5>
            <p className="text-xs text-purple-200/80">Subscribe for artisan stories, new shop launches, and exclusive offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2" suppressHydrationWarning>
              <input
                type="email"
                placeholder="Enter your email"
                suppressHydrationWarning
                className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/90 border border-purple-800 text-xs text-white placeholder-purple-300/60 focus:outline-none focus:border-pink-500 font-medium"
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="px-4 py-2.5 rounded-xl magenta-gradient-btn text-white font-extrabold text-xs transition-colors shrink-0 shadow-md"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/60 gap-4">
          <p>&copy; {new Date().getFullYear()} SiSpace Qatar. All rights reserved.</p>
          <div className="flex items-center gap-1 text-purple-200/80">
            <span>Built with passion & empowerment</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
