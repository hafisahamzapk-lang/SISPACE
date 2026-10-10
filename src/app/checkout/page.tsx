'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { ShippingAddress } from '@/types/database.types';
import { formatCurrency } from '@/lib/utils';
import { ShieldCheck, CreditCard, Truck, CheckCircle2, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, user, placeOrder } = useApp();

  const [address, setAddress] = useState<ShippingAddress>({
    fullName: user?.full_name || 'Elena Rostova',
    street: 'West Bay Street 12',
    city: 'Doha',
    state: 'Ad Dawhah',
    postalCode: '00000',
    country: 'Qatar',
    phone: '+974 4400 1234'
  });

  const [paymentMethod, setPaymentMethod] = useState<'Card' | 'COD' | 'Mobile'>('Card');

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 350 ? 0 : 35;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const createdOrder = placeOrder(address, paymentMethod);
    if (createdOrder) {
      router.push(`/orders/${createdOrder.id}/confirmation`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Checkout</h1>
        <p className="text-xs text-slate-500">Complete your artisan purchase securely.</p>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Shipping & Payment */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Shipping Address */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Truck className="w-5 h-5 text-rose-600" />
              <span>Shipping Address</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={address.fullName}
                  onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-slate-700">Street Address</label>
                <input
                  type="text"
                  required
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">City</label>
                <input
                  type="text"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">State / Region</label>
                <input
                  type="text"
                  required
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Country</label>
                <input
                  type="text"
                  required
                  value={address.country}
                  onChange={(e) => setAddress({ ...address, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Phone Number</label>
                <input
                  type="text"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-rose-600"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-amber-600" />
              <span>Payment Option</span>
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('Card')}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  paymentMethod === 'Card' ? 'border-rose-600 bg-rose-50/50 text-rose-900 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <CreditCard className="w-5 h-5 mx-auto mb-1 text-rose-600" />
                <span className="text-xs">Credit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('COD')}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  paymentMethod === 'COD' ? 'border-rose-600 bg-rose-50/50 text-rose-900 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <Truck className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <span className="text-xs">Cash on Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('Mobile')}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  paymentMethod === 'Mobile' ? 'border-rose-600 bg-rose-50/50 text-rose-900 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <Lock className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                <span className="text-xs">Mobile Wallet</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right: Order Items & Confirm */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6 sticky top-24">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3">
              Order Items ({cart.length})
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.product_id} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 truncate">
                    <span className="font-bold text-slate-900">{item.quantity}x</span>
                    <span className="text-slate-700 truncate">{item.product.title}</span>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">
                    {formatCurrency(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold text-slate-900">{shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-100">
                <span>Total Due</span>
                <span className="text-rose-700">{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-bold text-xs rose-gradient-btn shadow-xl flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm & Place Order ({formatCurrency(grandTotal)})</span>
            </button>
          </div>
        </div>

      </form>

    </div>
  );
}
