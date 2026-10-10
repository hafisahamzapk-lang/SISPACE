'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { ShoppingBag, Trash2, ArrowRight, Minus, Plus, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useApp();

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingEstimate = subtotal > 350 || subtotal === 0 ? 0 : 35;
  const grandTotal = subtotal + shippingEstimate;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Shopping Cart</h1>
          <p className="text-xs text-slate-500 mt-1">Review your artisan items before checkout.</p>
        </div>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs font-semibold text-rose-700 hover:underline flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear Cart
          </button>
        )}
      </div>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Cart Item Rows */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.product_id}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border">
                    <Image
                      src={item.product.images[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                      {item.product.seller_name || 'SiSpace Qatar Artisan'}
                    </span>
                    <Link href={`/products/${item.product.id}`} className="block font-semibold text-slate-900 text-sm hover:text-rose-700 line-clamp-1">
                      {item.product.title}
                    </Link>
                    <div className="text-xs font-bold text-slate-900">
                      {formatCurrency(item.product.price)}
                    </div>
                  </div>
                </div>

                {/* Quantity & Delete Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                    <button
                      onClick={() => updateCartQuantity(item.product_id, -1)}
                      className="p-2 hover:bg-slate-200 text-slate-700 transition-colors rounded-l-xl"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-bold text-xs text-slate-900">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.product_id, 1)}
                      className="p-2 hover:bg-slate-200 text-slate-700 transition-colors rounded-r-xl"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="font-extrabold text-slate-900 text-sm">
                      {formatCurrency(item.product.price * item.quantity)}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product_id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Estimate</span>
                  <span className="font-bold text-slate-900">
                    {shippingEstimate === 0 ? 'FREE' : formatCurrency(shippingEstimate)}
                  </span>
                </div>
                {shippingEstimate > 0 && (
                  <p className="text-[10px] text-emerald-700 bg-emerald-50 p-2 rounded-lg">
                    Add {formatCurrency(350 - subtotal)} more for FREE Express Shipping!
                  </p>
                )}
                <div className="flex justify-between pt-3 border-t border-slate-100 text-base font-black text-slate-900">
                  <span>Grand Total</span>
                  <span className="text-rose-700">{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full py-4 rounded-2xl text-white font-bold text-xs rose-gradient-btn shadow-md flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      ) : (
        <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-slate-900 text-xl">Your Shopping Cart is Empty</h3>
          <p className="text-xs text-slate-500">Discover unique handcrafted creations made by female entrepreneurs.</p>
          <Link
            href="/products"
            className="inline-block px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-md"
          >
            Start Shopping
          </Link>
        </div>
      )}

    </div>
  );
}
