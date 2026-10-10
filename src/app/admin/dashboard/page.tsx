'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { 
  ShieldCheck, 
  Users, 
  Store, 
  Package, 
  DollarSign, 
  CheckCircle2, 
  XCircle, 
  BarChart3, 
  ArrowRight,
  Layers
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { sellers, products, orders, approveSeller, rejectSeller } = useApp();

  const pendingSellers = sellers.filter((s) => s.status === 'pending');
  const approvedSellers = sellers.filter((s) => s.status === 'approved');
  const totalRevenue = orders.reduce((sum, o) => sum + o.total_amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Admin Control Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-rose-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold border border-emerald-600/40">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>PLATFORM GOVERNANCE CONTROL CENTER</span>
          </div>
          <h1 className="text-2xl font-black">SiSpace Qatar Marketplace Oversight</h1>
          <p className="text-xs text-slate-300">Monitor vendor compliance, approve shop applications, and audit platform activity.</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <Link href="/admin/sellers" className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm">
            Seller Queue ({pendingSellers.length})
          </Link>
          <Link href="/admin/products" className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700">
            Products Control
          </Link>
          <Link href="/admin/categories" className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700">
            Categories
          </Link>
          <Link href="/admin/reports" className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700">
            Reports
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Platform Volume</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{formatCurrency(totalRevenue)}</div>
          <div className="text-[11px] text-emerald-600 font-semibold">Across all vendor sales</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Approved Vendors</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Store className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{approvedSellers.length}</div>
          <div className="text-[11px] text-amber-600 font-semibold">{pendingSellers.length} Applications Pending</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Platform Products</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{products.length}</div>
          <div className="text-[11px] text-slate-400">Listed across categories</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span>Total Orders</span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{orders.length}</div>
          <div className="text-[11px] text-rose-600 font-semibold">100% Fulfillment Rate</div>
        </div>

      </div>

      {/* Main Admin Section: Pending Seller Approvals Queue */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base">Pending Seller Approvals ({pendingSellers.length})</h3>
            <p className="text-xs text-slate-400">Verify artisan applications before enabling marketplace listings.</p>
          </div>
          <Link href="/admin/sellers" className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1">
            <span>View Full Queue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {pendingSellers.length > 0 ? (
          <div className="space-y-4">
            {pendingSellers.map((seller) => (
              <div key={seller.id} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span>{seller.store_name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-200 text-amber-900 font-bold uppercase">Pending</span>
                  </div>
                  <div className="text-slate-600">{seller.store_description || 'Small-batch wheel-thrown pottery for modern home sanctuaries.'}</div>
                  <div className="text-slate-400 text-[11px]">Location: {seller.business_address || 'Lagos, Nigeria'} • Applied: {new Date(seller.created_at).toLocaleDateString()}</div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => approveSeller(seller.id)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Approve Seller
                  </button>
                  <button
                    onClick={() => rejectSeller(seller.id)}
                    className="px-4 py-2 rounded-xl bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 font-bold transition-colors flex items-center gap-1"
                  >
                    <XCircle className="w-3.5 h-3.5" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl">
            No pending seller applications in the review queue. All vendor applications are processed!
          </div>
        )}
      </div>

    </div>
  );
}
