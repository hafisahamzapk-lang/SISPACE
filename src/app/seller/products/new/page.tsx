'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { Plus, Upload, ArrowLeft } from 'lucide-react';

export default function NewProductPage() {
  const router = useRouter();
  const { categories, addProduct } = useApp();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [comparePrice, setComparePrice] = useState('');
  const [stock, setStock] = useState('15');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || 'cat-1');
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price) return;

    addProduct({
      title,
      description,
      price: Number(price),
      compare_at_price: comparePrice ? Number(comparePrice) : undefined,
      stock_quantity: Number(stock),
      category_id: categoryId,
      images: [imageUrl]
    });

    router.push('/seller/products');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      
      <button
        onClick={() => router.back()}
        className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Inventory
      </button>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
        
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Add New Artisan Creation</h1>
          <p className="text-xs text-slate-500">Publish a new item to your SiSpace Qatar storefront.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Product Title</label>
            <input
              type="text"
              required
              placeholder="e.g., Hand-Hammered Brass Sunburst Earrings"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600 bg-white"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Stock Quantity</label>
              <input
                type="number"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Price (QAR)</label>
              <input
                type="number"
                step="0.01"
                required
                placeholder="175.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Original Price (Optional QAR)</label>
              <input
                type="number"
                step="0.01"
                placeholder="220.00"
                value={comparePrice}
                onChange={(e) => setComparePrice(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Product Image URL (Supabase Storage)</label>
            <div className="flex gap-2">
              <input
                type="url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Product Description & Craft Notes</label>
            <textarea
              rows={4}
              placeholder="Describe materials, sizing, techniques used..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors shadow-md flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Product</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
