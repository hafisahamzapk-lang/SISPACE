'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, Package, ArrowRight, Download, Truck } from 'lucide-react';

export default function OrderConfirmationPage() {
  const params = useParams();
  const { orders } = useApp();

  const orderId = params?.id as string;
  const order = orders.find((o) => o.id === orderId) || orders[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      {/* Success Card Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 shadow-xl space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Order Successfully Placed
        </span>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Thank You For Your Artisan Purchase!
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          We have notified the female creator studio. You will receive real-time email updates as your item is crafted and dispatched.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <div className="text-xs font-semibold bg-slate-100 px-4 py-2 rounded-xl text-slate-800">
            Order Reference: <span className="font-bold text-rose-700">#{order.id}</span>
          </div>
          <div className="text-xs font-semibold bg-slate-100 px-4 py-2 rounded-xl text-slate-800">
            Estimated Delivery: <span className="font-bold text-slate-900">3–5 Business Days</span>
          </div>
        </div>
      </div>

      {/* Order Details & Summary Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3 flex items-center gap-2">
          <Package className="w-5 h-5 text-rose-600" />
          <span>Purchased Items</span>
        </h3>

        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-xs py-2 border-b border-slate-50 last:border-0">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900 text-sm">{item.product_title}</div>
                <div className="text-slate-500">Sold by {item.seller_name || 'Artisan Workshop'} • Qty: {item.quantity}</div>
              </div>
              <div className="font-extrabold text-slate-900 text-sm">
                {formatCurrency(item.subtotal)}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500">
            Shipping to: <span className="font-bold text-slate-800">{order.shipping_address?.fullName}, {order.shipping_address?.city}</span>
          </div>
          <div className="font-extrabold text-lg text-rose-700">
            Total Paid: {formatCurrency(order.total_amount)}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/customer/orders"
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-rose-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
        >
          <Truck className="w-4 h-4" />
          <span>Track Order Status</span>
        </Link>
        <Link
          href="/products"
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-2"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
