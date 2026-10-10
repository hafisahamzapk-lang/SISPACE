export type UserRole = 'customer' | 'seller' | 'admin';
export type SellerStatus = 'pending' | 'approved' | 'rejected' | 'suspended';
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'unpaid' | 'paid' | 'refunded';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Seller {
  id: string;
  profile_id: string;
  store_name: string;
  store_slug: string;
  store_description?: string;
  logo_url?: string;
  banner_url?: string;
  business_address?: string;
  payout_info?: Record<string, any>;
  status: SellerStatus;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: string;
  created_at: string;
}

export interface Product {
  id: string;
  seller_id: string;
  seller_name?: string;
  category_id?: string;
  category_name?: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
  compare_at_price?: number;
  stock_quantity: number;
  sku?: string;
  is_featured: boolean;
  is_active: boolean;
  images: string[];
  rating?: number;
  reviews_count?: number;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  product: Product;
  quantity: number;
  created_at: string;
}

export interface WishlistItem {
  id: string;
  user_id: string;
  product_id: string;
  product: Product;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_title: string;
  product_image?: string;
  seller_id: string;
  seller_name?: string;
  unit_price: number;
  quantity: number;
  subtotal: number;
  created_at: string;
}

export interface ShippingAddress {
  fullName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  customer_id: string;
  customer_name?: string;
  customer_email?: string;
  status: OrderStatus;
  total_amount: number;
  shipping_address: ShippingAddress;
  payment_method: string;
  payment_status: PaymentStatus;
  items: OrderItem[];
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  user_name: string;
  user_avatar?: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface AdminAction {
  id: string;
  admin_id: string;
  action: string;
  target_type: string;
  target_id: string;
  details?: Record<string, any>;
  created_at: string;
}
