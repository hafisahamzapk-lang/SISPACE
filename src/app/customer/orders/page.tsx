'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context/app-context';
import { OrderStatus } from '@/types/database.types';
import { formatCurrency } from '@/lib/utils';
import { Package, Clock, Truck, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function CustomerOrdersPage() {
  const { orders } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredOrders = orders.filter((o) => filterStatus === 'all' || o.status === filterStatus);

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'delivered':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Delivered</span>;
      case 'shipped':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1"><Truck className="w-3 h-3 text-blue-600" /> Shipped</span>;
      case 'processing':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1"><Clock className="w-3 h-3 text-amber-600 animate-spin" /> Processing</span>;
      case 'cancelled':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1"><XCircle className="w-3 h-3 text-rose-600" /> Cancelled</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">Pending</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Orders</h1>
        <p className="text-xs text-slate-500">Track and manage your artisan order history.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 text-xs font-semibold">
        {['all', 'processing', 'shipped', 'delivered', 'cancelled'].map((st) => (
          <button
            key={st}
            onClick={() => setFilterStatus(st)}
            className={`px-4 py-2 rounded-xl capitalize transition-all ${
              filterStatus === st ? 'bg-slate-900 text-white font-bold shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Orders List */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3 text-xs">
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-900 text-sm">Order #{order.id}</div>
                  <div className="text-slate-400">Placed on {new Date(order.created_at).toLocaleDateString()}</div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(order.status)}
                  <span className="font-extrabold text-slate-900 text-sm">{formatCurrency(order.total_amount)}</span>
                </div>
              </div>

              {/* Items Preview */}
              <div className="space-y-2 text-xs">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-slate-700">
                    <span className="truncate max-w-md font-medium">{item.quantity}x {item.product_title}</span>
                    <span className="text-slate-400 font-bold">{formatCurrency(item.subtotal)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <Link
                  href={`/customer/orders/${order.id}`}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>View Order & Tracking Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <Package className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">No Orders Found</h3>
          <p className="text-xs text-slate-500">You haven't placed any orders matching this filter yet.</p>
        </div>
      )}

    </div>
  );
}
