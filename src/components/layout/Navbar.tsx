'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Store, 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles,
  LogOut,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const pathname = usePathname();
  const { user, role, cart, wishlist, logout, switchRole } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 glass-nav shadow-xs">
      {/* Top Announcement Banner in SiSpace Qatar Purple to Fuchsia Gradient */}
      <div className="bg-gradient-to-r from-[#3D1466] via-[#D81B60] to-[#E60067] text-white text-xs font-medium py-2 px-4 text-center flex items-center justify-center gap-2 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-pink-200 animate-pulse" />
        <span className="font-semibold tracking-wide">
          SiSpace Qatar — Empowering Indian & Expat Women’s Home Businesses in Qatar
        </span>
        <Link href="/products" className="underline font-bold text-pink-200 hover:text-white transition-colors ml-1 hidden sm:inline-flex items-center gap-1">
          <span>Explore Marketplace</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link 
              href="/" 
              className={`transition-colors relative py-1 hover:text-[#D81B60] ${pathname === '/' ? 'text-[#D81B60] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D81B60] after:rounded-full' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`transition-colors relative py-1 hover:text-[#D81B60] ${pathname.startsWith('/products') ? 'text-[#D81B60] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D81B60] after:rounded-full' : ''}`}
            >
              Shop Catalog
            </Link>
            <Link 
              href="/sellers/seller-1" 
              className={`transition-colors relative py-1 hover:text-[#D81B60] ${pathname.startsWith('/sellers') ? 'text-[#D81B60] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D81B60] after:rounded-full' : ''}`}
            >
              Artisans & Sellers
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors relative py-1 hover:text-[#D81B60] ${pathname === '/about' ? 'text-[#D81B60] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D81B60] after:rounded-full' : ''}`}
            >
              Our Mission
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors relative py-1 hover:text-[#D81B60] ${pathname === '/contact' ? 'text-[#D81B60] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D81B60] after:rounded-full' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* User & Role Actions */}
          <div className="flex items-center gap-3.5">

            {/* Quick Demo Role Switcher Dropdown */}
            <div className="relative">
              <button
                suppressHydrationWarning
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-fuchsia-50 border border-fuchsia-200/80 text-[#3D1466] hover:bg-fuchsia-100/80 transition-all shadow-xs"
                title="Switch demo mode"
              >
                <span className="w-2 h-2 rounded-full bg-[#E60067] animate-ping" />
                <span className="capitalize">Role: {role}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#3D1466]" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 z-50 text-xs text-slate-700 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3.5 py-1 font-extrabold text-slate-400 uppercase tracking-widest text-[9px]">
                    Demo User Mode Switcher
                  </div>
                  <button
                    onClick={() => { switchRole('customer'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 flex items-center gap-2.5 hover:bg-fuchsia-50 ${role === 'customer' ? 'font-bold text-[#D81B60] bg-fuchsia-50/70' : ''}`}
                  >
                    <User className="w-4 h-4 text-slate-500" /> Customer Mode
                  </button>
                  <button
                    onClick={() => { switchRole('seller'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 flex items-center gap-2.5 hover:bg-fuchsia-50 ${role === 'seller' ? 'font-bold text-[#D81B60] bg-fuchsia-50/70' : ''}`}
                  >
                    <Store className="w-4 h-4 text-amber-600" /> Seller Dashboard Mode
                  </button>
                  <button
                    onClick={() => { switchRole('admin'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 flex items-center gap-2.5 hover:bg-fuchsia-50 ${role === 'admin' ? 'font-bold text-[#D81B60] bg-fuchsia-50/70' : ''}`}
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Admin Control Mode
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <Link 
              href="/customer/wishlist" 
              className="p-2.5 rounded-full text-slate-700 hover:text-[#D81B60] hover:bg-fuchsia-50/80 transition-all relative group"
              title="My Wishlist"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#E60067] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart Button */}
            <Link 
              href="/cart" 
              className="p-2.5 rounded-full text-slate-700 hover:text-[#D81B60] hover:bg-fuchsia-50/80 transition-all relative group"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {totalCartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#E60067] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </Link>

            {/* User Account / Navigation Button */}
            {user ? (
              <div className="flex items-center gap-2">
                {role === 'customer' && (
                  <Link
                    href="/customer/orders"
                    className="px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors hidden sm:block"
                  >
                    My Orders
                  </Link>
                )}
                {role === 'seller' && (
                  <Link
                    href="/seller/dashboard"
                    className="px-4 py-2 rounded-full text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm hidden sm:block"
                  >
                    Seller Portal
                  </Link>
                )}
                {role === 'admin' && (
                  <Link
                    href="/admin/dashboard"
                    className="px-4 py-2 rounded-full text-xs font-extrabold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm hidden sm:block"
                  >
                    Admin Control
                  </Link>
                )}
                <button
                  suppressHydrationWarning
                  onClick={logout}
                  className="p-2.5 rounded-full text-slate-400 hover:text-[#D81B60] hover:bg-fuchsia-50 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="px-5 py-2.5 rounded-full text-xs font-extrabold text-white sispace-gradient-btn shadow-md"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 md:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-[#D81B60]"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-[#D81B60]"
          >
            Shop Catalog
          </Link>
          <Link 
            href="/sellers/seller-1" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-[#D81B60]"
          >
            Artisans & Sellers
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-[#D81B60]"
          >
            Our Mission
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-[#D81B60]"
          >
            Contact Support
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link 
              href="/auth/register-seller" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-white sispace-gradient-btn text-xs shadow-xs"
            >
              Become a Seller (Apply Now)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
