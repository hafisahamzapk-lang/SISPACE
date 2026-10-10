'use client';

import React from 'react';
import { useApp } from '@/lib/context/app-context';
import { CheckCircle2, XCircle, ShieldCheck, MapPin, Star } from 'lucide-react';

export default function AdminSellersPage() {
  const { sellers, approveSeller, rejectSeller } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Seller Management Queue</h1>
        <p className="text-xs text-slate-500">Review, approve, or suspend vendor storefronts.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-4 px-6">Store / Brand</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {sellers.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900 text-sm">{s.store_name}</div>
                    <div className="text-slate-400 text-[11px] line-clamp-1">{s.store_description || 'Artisan store'}</div>
                  </td>
                  <td className="py-4 px-6">{s.business_address || 'Global'}</td>
                  <td className="py-4 px-6 font-bold text-slate-900">{s.rating || 5.0}★</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      s.status === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                      s.status === 'pending' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    {s.status === 'pending' && (
                      <button
                        onClick={() => approveSeller(s.id)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors"
                      >
                        Approve
                      </button>
                    )}
                    {s.status !== 'rejected' && (
                      <button
                        onClick={() => rejectSeller(s.id)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-rose-700 font-bold hover:bg-rose-50 transition-colors"
                      >
                        {s.status === 'approved' ? 'Suspend' : 'Reject'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
