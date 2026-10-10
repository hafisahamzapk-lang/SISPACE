'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, Clock, Truck, ArrowLeft, Package, MapPin, CreditCard } from 'lucide-react';

export default function OrderDetailsDetailPage() {
  const params = useParams();
  const { orders } = useApp();

  const orderId = params?.id as string;
  const order = orders.find((o) => o.id === orderId) || orders[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      
      <Link href="/customer/orders" className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to My Orders
      </Link>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-8">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900">Order #{order.id}</h1>
            <p className="text-xs text-slate-400">Placed on {new Date(order.created_at).toLocaleString()}</p>
          </div>
          <div className="text-right">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase">
              {order.status}
            </span>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="py-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
            <span className="text-rose-700">Order Placed</span>
            <span className={order.status !== 'pending' ? 'text-rose-700' : 'text-slate-400'}>Processing</span>
            <span className={order.status === 'shipped' || order.status === 'delivered' ? 'text-rose-700' : 'text-slate-400'}>Dispatched</span>
            <span className={order.status === 'delivered' ? 'text-rose-700' : 'text-slate-400'}>Delivered</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-rose-600 to-amber-500 transition-all duration-500 ${
              order.status === 'delivered' ? 'w-full' : order.status === 'shipped' ? 'w-3/4' : 'w-1/2'
            }`} />
          </div>
        </div>

        {/* Items Breakdown */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
            <Package className="w-4 h-4 text-rose-600" /> Items in Order
          </h3>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-xs p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <div className="font-bold text-slate-900">{item.product_title}</div>
                  <div className="text-slate-400">Qty: {item.quantity} • {formatCurrency(item.unit_price)} each</div>
                </div>
                <div className="font-extrabold text-slate-900">{formatCurrency(item.subtotal)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Payment Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 text-xs">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-600" /> Shipping Address</h4>
            <p className="text-slate-600">{order.shipping_address?.fullName}</p>
            <p className="text-slate-600">{order.shipping_address?.street}, {order.shipping_address?.city}, {order.shipping_address?.state} {order.shipping_address?.postalCode}</p>
            <p className="text-slate-600">{order.shipping_address?.phone}</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-amber-600" /> Payment Info</h4>
            <p className="text-slate-600">Method: {order.payment_method}</p>
            <p className="text-slate-600">Status: <span className="font-bold text-emerald-700 capitalize">{order.payment_status}</span></p>
            <p className="text-slate-900 font-extrabold text-sm pt-2">Total Amount: {formatCurrency(order.total_amount)}</p>
          </div>
        </div>

      </div>

    </div>
  );
}
