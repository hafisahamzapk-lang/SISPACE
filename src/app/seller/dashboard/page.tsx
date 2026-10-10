'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { 
  Store, 
  Plus, 
  Package, 
  ShoppingBag, 
  DollarSign, 
  Star, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight,
  Settings
} from 'lucide-react';

export default function SellerDashboardPage() {
  const { sellerProfile, products, orders } = useApp();

  const sellerProducts = products.filter((p) => p.seller_id === (sellerProfile?.id || 'seller-1'));
  const totalRevenue = orders.reduce((sum, o) => sum + o.total_amount, 0);
  const lowStockProducts = sellerProducts.filter((p) => p.stock_quantity < 10);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900">{sellerProfile?.store_name || 'Amina Artisanal Studio'}</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 uppercase">
              {sellerProfile?.status || 'APPROVED VENDOR'}
            </span>
          </div>
          <p className="text-xs text-slate-500">Manage your product catalog, orders, and sales performance.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/seller/products/new"
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </Link>
          <Link
            href="/seller/settings"
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <Settings className="w-4 h-4" />
            <span>Store Settings</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Total Revenue</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{formatCurrency(totalRevenue)}</div>
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +18.4% this month
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Active Products</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{sellerProducts.length}</div>
          <div className="text-[11px] text-slate-400">Listed in marketplace</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Total Orders</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{orders.length}</div>
          <div className="text-[11px] text-blue-600 font-semibold">2 Pending Dispatch</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Store Rating</span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{sellerProfile?.rating || 4.95}</div>
          <div className="text-[11px] text-slate-400">From 54 Customer Reviews</div>
        </div>

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Orders */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="font-extrabold text-slate-900 text-base">Recent Orders</h3>
            <Link href="/seller/orders" className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1">
              <span>Manage All Orders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-100">
                <tr>
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Total</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50">
                    <td className="py-3 font-bold text-slate-900">#{order.id}</td>
                    <td className="py-3">{order.customer_name}</td>
                    <td className="py-3 text-slate-400">{new Date(order.created_at).toLocaleDateString()}</td>
                    <td className="py-3 font-bold text-slate-900">{formatCurrency(order.total_amount)}</td>
                    <td className="py-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 uppercase">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts & Quick Navigation */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Low Stock Alerts</span>
            </h3>

            {lowStockProducts.length > 0 ? (
              <div className="space-y-3">
                {lowStockProducts.map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-900 truncate max-w-[150px]">{p.title}</span>
                    <span className="font-extrabold text-amber-700">{p.stock_quantity} left</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400">All products have healthy stock levels.</p>
            )}
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-3">
            <h4 className="font-bold text-sm">Artisan Support Hub</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Need assistance with international shipping rules or custom orders? Reach out to your SiSpace Qatar account specialist.
            </p>
            <Link href="/contact" className="inline-block px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors">
              Contact Account Manager
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
