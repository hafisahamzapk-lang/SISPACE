'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/context/app-context';
import { OrderStatus } from '@/types/database.types';
import { formatCurrency } from '@/lib/utils';
import { Truck, CheckCircle2, Clock, Package } from 'lucide-react';

export default function SellerOrdersPage() {
  const { orders, updateOrderStatus } = useApp();
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | 'all'>('all');

  const filteredOrders = orders.filter((o) => selectedStatus === 'all' || o.status === selectedStatus);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Seller Order Fulfillment</h1>
        <p className="text-xs text-slate-500">Manage customer orders and update dispatch status.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 text-xs font-semibold">
        {['all', 'processing', 'shipped', 'delivered', 'cancelled'].map((st) => (
          <button
            key={st}
            onClick={() => setSelectedStatus(st as any)}
            className={`px-4 py-2 rounded-xl capitalize transition-all ${
              selectedStatus === st ? 'bg-amber-600 text-white font-bold shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 text-sm">Order #{order.id}</span>
                <span className="text-slate-400 ml-2">Customer: {order.customer_name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-slate-900 text-sm">{formatCurrency(order.total_amount)}</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 uppercase">
                  {order.status}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-2 text-xs text-slate-700">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span>{item.quantity}x {item.product_title}</span>
                  <span className="font-bold text-slate-900">{formatCurrency(item.subtotal)}</span>
                </div>
              ))}
            </div>

            {/* Update Status Buttons */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-slate-500">
                Ship to: <span className="font-semibold text-slate-800">{order.shipping_address?.street}, {order.shipping_address?.city}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-600">Update Status:</span>
                <button
                  onClick={() => updateOrderStatus(order.id, 'shipped')}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 font-bold transition-colors flex items-center gap-1"
                >
                  <Truck className="w-3.5 h-3.5 text-blue-600" /> Mark Shipped
                </button>
                <button
                  onClick={() => updateOrderStatus(order.id, 'delivered')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold transition-colors flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Mark Delivered
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
