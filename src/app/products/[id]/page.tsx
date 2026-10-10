'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useApp } from '@/lib/context/app-context';
import { formatCurrency } from '@/lib/utils';
import { 
  ShoppingBag, 
  Heart, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Share2, 
  Check, 
  Minus, 
  Plus
} from 'lucide-react';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { products, sellers, reviews, addToCart, toggleWishlist, isInWishlist, showToast } = useApp();

  const productId = params?.id as string;
  const product = products.find((p) => p.id === productId) || products[0];
  const seller = sellers.find((s) => s.id === product.seller_id) || sellers[0];
  const productReviews = reviews.filter((r) => r.product_id === product.id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'shipping' | 'reviews'>('description');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);

  const inWishlist = isInWishlist(product.id);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/checkout');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) return;
    showToast('Thank you! Your review has been published.', 'success');
    setReviewText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <nav className="text-xs font-semibold text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-[#8A1538]">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#8A1538]">Products</Link>
        <span>/</span>
        <span className="text-slate-900 truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
            <Image
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-[#8A1538] scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Meta & Purchase Box */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Seller Tag */}
          <div className="flex items-center justify-between">
            <Link 
              href={`/sellers/${seller.id}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#8A1538] text-xs font-bold hover:bg-rose-100 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#8A1538]" />
              <span>{seller.store_name}</span>
            </Link>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                showToast('Product link copied to clipboard!', 'info');
              }}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              title="Share Product"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {product.title}
          </h1>

          {/* Rating & Stock */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{product.rating || 5.0}</span>
              <span className="text-slate-400 font-normal">({productReviews.length || 18} reviews)</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
              <Check className="w-3.5 h-3.5" />
              <span>In Stock ({product.stock_quantity} available)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pt-2">
            <span className="text-3xl font-black text-slate-900">
              {formatCurrency(product.price)}
            </span>
            {product.compare_at_price && (
              <span className="text-base text-slate-400 line-through">
                {formatCurrency(product.compare_at_price)}
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed border-t border-b border-slate-100 py-4">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase text-slate-700">Quantity</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-slate-200 text-slate-700 transition-colors rounded-l-xl"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 font-bold text-sm text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-slate-200 text-slate-700 transition-colors rounded-r-xl"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions: Add to Cart, Buy Now, Wishlist */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => addToCart(product, quantity)}
              className="flex-1 py-3.5 rounded-2xl bg-slate-900 hover:bg-[#8A1538] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Shopping Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 py-3.5 rounded-2xl text-white font-bold text-sm rose-gradient-btn shadow-md"
            >
              Buy Now
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3.5 rounded-2xl border transition-colors flex items-center justify-center ${
                inWishlist 
                  ? 'bg-[#8A1538] text-white border-[#8A1538] shadow-md' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-rose-50 hover:text-[#8A1538]'
              }`}
            >
              <Heart className={`w-5 h-5 ${inWishlist ? 'fill-white' : ''}`} />
            </button>
          </div>

          {/* Guarantee Icons */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8A1538]" />
              <span>Direct artisan shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#8A1538]" />
              <span>30-Day Fair Exchange</span>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs: Description, Shipping & Reviews */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex border-b border-slate-200 gap-8 text-sm font-bold">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'description' ? 'border-[#8A1538] text-[#8A1538]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Product Story
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'shipping' ? 'border-[#8A1538] text-[#8A1538]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Shipping & Packaging
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'reviews' ? 'border-[#8A1538] text-[#8A1538]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Customer Reviews ({productReviews.length || 18})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'description' && (
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
            <p>{product.description}</p>
            <p>Every piece is individually created with high quality materials. Slight variations in color or texture celebrate the unique authenticity of each product.</p>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p className="font-semibold text-slate-900">Eco-Conscious Packaging & Worldwide Express</p>
            <p>Orders are carefully packaged in quality materials directly at the studio and shipped within 1–3 business days.</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-8">
            
            {/* Reviews List */}
            <div className="space-y-4">
              {productReviews.length > 0 ? (
                productReviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{rev.user_name}</span>
                        <span className="text-[10px] text-slate-400">Verified Buyer</span>
                      </div>
                      <div className="flex text-amber-400">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-500 italic">No reviews yet for this product. Be the first to leave a review below!</div>
              )}
            </div>

            {/* Write Review Form */}
            <form onSubmit={handleReviewSubmit} className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Write a Customer Review</h4>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-700">Rating:</span>
                <div className="flex text-amber-400 gap-1 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setReviewRating(star)}
                    >
                      <Star className={`w-4 h-4 ${star <= reviewRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                rows={3}
                placeholder="Share your experience with this product..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#8A1538] bg-white"
              />

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-[#8A1538] transition-colors"
              >
                Submit Review
              </button>
            </form>

          </div>
        )}

      </div>

    </div>
  );
}
