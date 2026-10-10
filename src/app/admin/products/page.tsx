'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { Trash2, ShieldAlert } from 'lucide-react';

export default function AdminProductsPage() {
  const { products, deleteProduct } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Platform Catalog Governance</h1>
        <p className="text-xs text-slate-500">Moderate product listings across all artisan stores.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Seller</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Stock</th>
                <th className="py-4 px-6 text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 border shrink-0">
                      <Image src={p.images[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'} alt="" fill className="object-cover" />
                    </div>
                    <div className="font-bold text-slate-900">{p.title}</div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-rose-700">{p.seller_name || 'Artisan Store'}</td>
                  <td className="py-4 px-6 font-bold text-slate-900">{formatCurrency(p.price)}</td>
                  <td className="py-4 px-6">{p.stock_quantity} in stock</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 font-bold hover:bg-rose-100 transition-colors flex items-center gap-1 ml-auto"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove Item
                    </button>
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
