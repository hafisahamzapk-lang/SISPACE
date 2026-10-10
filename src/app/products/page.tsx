'use client';

import React, { useState, useMemo } from 'react';
import { useApp } from '@/lib/context/app-context';
import { ProductCard } from '@/components/products/ProductCard';
import { formatCurrency } from '@/lib/utils';
import { Search, Filter, SlidersHorizontal, RefreshCw, Sparkles } from 'lucide-react';

export default function ProductsCatalogPage() {
  const { products, categories } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'rating'>('newest');

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.seller_name?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || product.category_id === selectedCategory;
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  }, [products, searchQuery, selectedCategory, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setMaxPrice(1000);
    setSortBy('newest');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#fdfbf9]">
      
      {/* Page Header */}
      <div className="space-y-2 border-b border-rose-100 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#8A1538] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Qatar & India Marketplace</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Handcrafted Artisan Creations
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl font-medium">
          Discover luxury bespoke Abayas, Kundan fine jewelry, organic botanical skincare, and sustainable slow fashion crafted by female artisans.
        </p>
      </div>

      {/* Filter & Search Panel */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          
          {/* Search Input */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, artisans, or materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8A1538] focus:ring-1 focus:ring-[#8A1538] font-medium"
            />
          </div>

          {/* Category Dropdown */}
          <div className="sm:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#8A1538] bg-white font-semibold"
            >
              <option value="all">All Categories ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#8A1538] bg-white font-semibold"
            >
              <option value="newest">Sort by: Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Reset Filters */}
          <div className="sm:col-span-1 flex justify-end">
            <button
              onClick={resetFilters}
              className="p-2.5 rounded-xl text-slate-500 hover:text-[#8A1538] hover:bg-rose-50 border border-slate-200 transition-colors"
              title="Reset Filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Price Slider Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#8A1538]" />
            <span className="font-bold">Max Price: {formatCurrency(maxPrice)}</span>
          </div>
          <input
            type="range"
            min="20"
            max="1500"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-48 accent-[#8A1538] cursor-pointer"
          />
        </div>
      </div>

      {/* Catalog Results Summary */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
        <span>Showing {filteredProducts.length} Artisan Products</span>
        {selectedCategory !== 'all' && (
          <span className="text-[#8A1538] bg-rose-50 px-3 py-1 rounded-full border border-rose-200 uppercase tracking-wider text-[10px]">
            Active Filter
          </span>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#8A1538] flex items-center justify-center mx-auto">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg">No Products Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
            Try adjusting your search keywords, price filter, or category selection.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 rounded-xl bg-[#8A1538] text-white text-xs font-bold uppercase tracking-wider hover:bg-rose-900 transition-colors shadow-md"
          >
            Clear All Filters
          </button>
        </div>
      )}

    </div>
  );
}
