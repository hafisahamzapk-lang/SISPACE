'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { Plus, Edit, Trash2, Package, Eye } from 'lucide-react';

export default function SellerProductsPage() {
  const { sellerProfile, products, deleteProduct } = useApp();

  const sellerProducts = products.filter((p) => p.seller_id === (sellerProfile?.id || 'seller-1'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Products Inventory</h1>
          <p className="text-xs text-slate-500 mt-1">Manage your store listings, prices, and stock levels.</p>
        </div>

        <Link
          href="/seller/products/new"
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </Link>
      </div>

      {sellerProducts.length > 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Stock</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {sellerProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="py-4 px-6 flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl bg-slate-100 overflow-hidden border shrink-0">
                        <Image src={p.images[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'} alt="" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm line-clamp-1">{p.title}</div>
                        <div className="text-[11px] text-slate-400">SKU: {p.sku || 'AM-01'}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">{p.category_name || 'Handcrafted'}</td>
                    <td className="py-4 px-6 font-bold text-slate-900">{formatCurrency(p.price)}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        p.stock_quantity < 10 ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {p.stock_quantity} in stock
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <Link
                        href={`/products/${p.id}`}
                        className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 inline-block"
                        title="View Public Listing"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/seller/products/${p.id}/edit`}
                        className="p-2 rounded-lg text-amber-600 hover:bg-amber-50 inline-block"
                        title="Edit Product"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 inline-block"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 space-y-4 max-w-md mx-auto">
          <Package className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-900 text-lg">No Products Listed Yet</h3>
          <p className="text-xs text-slate-500">Start uploading your handcrafted creations to reach global buyers.</p>
          <Link
            href="/seller/products/new"
            className="inline-block px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors shadow-md"
          >
            + Add Your First Product
          </Link>
        </div>
      )}

    </div>
  );
}
