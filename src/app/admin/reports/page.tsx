'use client';

import React from 'react';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { BarChart3, Download, TrendingUp, DollarSign, Users, Award } from 'lucide-react';

export default function AdminReportsPage() {
  const { orders, sellers, products, showToast } = useApp();

  const totalVolume = orders.reduce((sum, o) => sum + o.total_amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Platform Financial & Social Impact Reports</h1>
          <p className="text-xs text-slate-500 mt-1">Analytics on revenue distribution, artisan payouts, and growth metrics.</p>
        </div>

        <button
          onClick={() => showToast('Financial Report CSV exported successfully!', 'success')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
        >
          <Download className="w-4 h-4" />
          <span>Export Payout CSV</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs text-slate-500">Gross Sales Volume</div>
          <div className="text-3xl font-black text-slate-900">{formatCurrency(totalVolume)}</div>
          <div className="text-[11px] text-emerald-600 font-semibold">+24.5% vs last month</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs text-slate-500">Direct Artisan Payouts (90%)</div>
          <div className="text-3xl font-black text-rose-700">{formatCurrency(totalVolume * 0.9)}</div>
          <div className="text-[11px] text-slate-400">Direct economic impact</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="text-xs text-slate-500">Platform Operating Fee (10%)</div>
          <div className="text-3xl font-black text-amber-600">{formatCurrency(totalVolume * 0.1)}</div>
          <div className="text-[11px] text-slate-400">Reinvested into seller tools</div>
        </div>
      </div>

    </div>
  );
}
