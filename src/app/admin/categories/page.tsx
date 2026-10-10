'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/lib/context/app-context';
import { Plus, Layers } from 'lucide-react';

export default function AdminCategoriesPage() {
  const { categories, showToast } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Category Hierarchy Manager</h1>
          <p className="text-xs text-slate-500 mt-1">Manage platform product classification.</p>
        </div>

        <button
          onClick={() => showToast('New Category Modal initialized', 'info')}
          className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm p-5 space-y-3">
            <div className="relative h-32 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image src={cat.image_url || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'} alt="" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{cat.name}</h3>
            <p className="text-xs text-slate-500 line-clamp-2">{cat.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
