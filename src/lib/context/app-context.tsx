'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, 
  Profile, 
  Seller, 
  Product, 
  CartItem, 
  WishlistItem, 
  Order, 
  OrderStatus, 
  Category, 
  Review, 
  ShippingAddress 
} from '@/types/database.types';
import { INITIAL_CATEGORIES, INITIAL_SELLERS, INITIAL_PRODUCTS, INITIAL_ORDERS, INITIAL_REVIEWS } from '@/lib/supabase/mock-data';

interface AppContextType {
  // Auth state
  user: Profile | null;
  role: UserRole;
  sellerProfile: Seller | null;
  login: (email: string, role?: UserRole, userProfile?: Profile) => void;
  logout: () => void;
  register: (name: string, email: string, role: UserRole, profileData?: Partial<Profile>) => void;
  switchRole: (newRole: UserRole) => void;

  // Catalog
  categories: Category[];
  products: Product[];
  sellers: Seller[];
  reviews: Review[];
  addProduct: (productData: Partial<Product>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  // Seller management
  approveSeller: (sellerId: string) => void;
  rejectSeller: (sellerId: string) => void;
  registerSeller: (storeData: Partial<Seller>) => void;
  updateStoreSettings: (sellerId: string, updates: Partial<Seller>) => void;

  // Cart & Wishlist
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  // Orders
  orders: Order[];
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: string) => Order | null;
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;

  // Toast
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEMO_CUSTOMER: Profile = {
  id: 'prof-cust-1',
  email: 'customer@sispaceqatar.com',
  full_name: 'Elena Rostova',
  role: 'customer',
  avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

const DEMO_SELLER_PROFILE: Profile = {
  id: 'prof-seller-1',
  email: 'amina@sispaceqatar.com',
  full_name: 'Amina Kendall',
  role: 'seller',
  avatar_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=150&q=80',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

const DEMO_ADMIN_PROFILE: Profile = {
  id: 'prof-admin-1',
  email: 'admin@sispaceqatar.com',
  full_name: 'Platform Administrator',
  role: 'admin',
  avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Profile | null>(DEMO_CUSTOMER);
  const [role, setRole] = useState<UserRole>('customer');
  const [sellerProfile, setSellerProfile] = useState<Seller | null>(INITIAL_SELLERS[0]);

  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [sellers, setSellers] = useState<Seller[]>(INITIAL_SELLERS);
  const [reviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Sync state with localStorage if available
  useEffect(() => {
    const savedUser = localStorage.getItem('sispace_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        if (parsed.role) setRole(parsed.role);
      } catch (e) {}
    }
    const savedCart = localStorage.getItem('sispace_cart') || localStorage.getItem('herhub_cart');
    if (savedCart) {
      try { setCart(JSON.parse(savedCart)); } catch (e) {}
    }
    const savedWishlist = localStorage.getItem('sispace_wishlist') || localStorage.getItem('herhub_wishlist');
    if (savedWishlist) {
      try { setWishlist(JSON.parse(savedWishlist)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sispace_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sispace_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const login = (email: string, targetRole: UserRole = 'customer', userProfile?: Profile) => {
    if (userProfile) {
      setUser(userProfile);
      setRole(userProfile.role || targetRole);
      setSellerProfile(userProfile.role === 'seller' ? INITIAL_SELLERS[0] : null);
      localStorage.setItem('sispace_user', JSON.stringify(userProfile));
      showToast(`Welcome back, ${userProfile.full_name || email}!`, 'success');
      return;
    }

    if (targetRole === 'admin' || email.includes('admin')) {
      setUser(DEMO_ADMIN_PROFILE);
      setRole('admin');
      setSellerProfile(null);
      localStorage.setItem('sispace_user', JSON.stringify(DEMO_ADMIN_PROFILE));
      showToast('Logged in as Platform Admin', 'success');
    } else if (targetRole === 'seller' || email.includes('seller')) {
      setUser(DEMO_SELLER_PROFILE);
      setRole('seller');
      setSellerProfile(INITIAL_SELLERS[0]);
      localStorage.setItem('sispace_user', JSON.stringify(DEMO_SELLER_PROFILE));
      showToast('Logged in as Vendor (Amina Artisanal)', 'success');
    } else {
      const cust = { ...DEMO_CUSTOMER, email };
      setUser(cust);
      setRole('customer');
      setSellerProfile(null);
      localStorage.setItem('sispace_user', JSON.stringify(cust));
      showToast(`Welcome back, ${email.split('@')[0]}!`, 'success');
    }
  };

  const logout = () => {
    setUser(null);
    setRole('customer');
    setSellerProfile(null);
    localStorage.removeItem('sispace_user');
    showToast('Logged out successfully', 'info');
  };

  const register = (name: string, email: string, targetRole: UserRole, profileData?: Partial<Profile>) => {
    const newProfile: Profile = {
      id: profileData?.id || `prof-${Date.now()}`,
      email,
      full_name: name,
      role: targetRole,
      phone: profileData?.phone || undefined,
      avatar_url: profileData?.avatar_url || undefined,
      created_at: profileData?.created_at || new Date().toISOString(),
      updated_at: profileData?.updated_at || new Date().toISOString()
    };
    setUser(newProfile);
    setRole(targetRole);
    localStorage.setItem('sispace_user', JSON.stringify(newProfile));
    showToast('Account registered successfully in Supabase!', 'success');
  };

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
    if (newRole === 'seller') {
      setUser(DEMO_SELLER_PROFILE);
      setSellerProfile(INITIAL_SELLERS[0]);
    } else if (newRole === 'admin') {
      setUser(DEMO_ADMIN_PROFILE);
      setSellerProfile(null);
    } else {
      setUser(DEMO_CUSTOMER);
      setSellerProfile(null);
    }
    showToast(`Switched view to ${newRole.toUpperCase()} mode`, 'info');
  };

  // Product CRUD
  const addProduct = (productData: Partial<Product>) => {
    const newProd: Product = {
      id: `prod-${Date.now()}`,
      seller_id: sellerProfile?.id || 'seller-1',
      seller_name: sellerProfile?.store_name || 'Amina Artisanal Studio',
      title: productData.title || 'Untitled Product',
      slug: (productData.title || 'untitled').toLowerCase().replace(/\s+/g, '-'),
      description: productData.description || '',
      price: Number(productData.price) || 0,
      compare_at_price: productData.compare_at_price ? Number(productData.compare_at_price) : undefined,
      stock_quantity: Number(productData.stock_quantity) || 10,
      category_id: productData.category_id || 'cat-1',
      category_name: categories.find(c => c.id === productData.category_id)?.name || 'Handcrafted Jewelry',
      images: productData.images && productData.images.length > 0 ? productData.images : ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'],
      is_featured: productData.is_featured || false,
      is_active: true,
      rating: 5.0,
      reviews_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setProducts(prev => [newProd, ...prev]);
    showToast('Product published successfully!', 'success');
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates, updated_at: new Date().toISOString() } : p));
    showToast('Product updated', 'success');
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast('Product removed', 'info');
  };

  // Seller Actions
  const approveSeller = (sellerId: string) => {
    setSellers(prev => prev.map(s => s.id === sellerId ? { ...s, status: 'approved' } : s));
    showToast('Seller approved and store activated!', 'success');
  };

  const rejectSeller = (sellerId: string) => {
    setSellers(prev => prev.map(s => s.id === sellerId ? { ...s, status: 'rejected' } : s));
    showToast('Seller application rejected', 'info');
  };

  const registerSeller = (storeData: Partial<Seller>) => {
    const newSeller: Seller = {
      id: `seller-${Date.now()}`,
      profile_id: user?.id || 'prof-new-seller',
      store_name: storeData.store_name || 'My Artisan Store',
      store_slug: (storeData.store_name || 'artisan').toLowerCase().replace(/\s+/g, '-'),
      store_description: storeData.store_description || '',
      logo_url: storeData.logo_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      banner_url: storeData.banner_url || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      business_address: storeData.business_address || 'Global Marketplace',
      status: 'pending',
      rating: 5.0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setSellers(prev => [newSeller, ...prev]);
    setSellerProfile(newSeller);
    setRole('seller');
    showToast('Seller application submitted for review!', 'success');
  };

  const updateStoreSettings = (sellerId: string, updates: Partial<Seller>) => {
    setSellers(prev => prev.map(s => s.id === sellerId ? { ...s, ...updates } : s));
    if (sellerProfile?.id === sellerId) {
      setSellerProfile(prev => prev ? { ...prev, ...updates } : null);
    }
    showToast('Store settings saved', 'success');
  };

  // Cart & Wishlist
  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product_id === product.id);
      if (existing) {
        return prev.map(item => item.product_id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, {
        id: `cart-${Date.now()}`,
        user_id: user?.id || 'guest',
        product_id: product.id,
        product,
        quantity,
        created_at: new Date().toISOString()
      }];
    });
    showToast(`Added "${product.title}" to cart`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product_id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product_id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(w => w.product_id === product.id);
      if (exists) {
        showToast('Removed from wishlist', 'info');
        return prev.filter(w => w.product_id !== product.id);
      } else {
        showToast('Added to wishlist', 'success');
        return [...prev, {
          id: `wish-${Date.now()}`,
          user_id: user?.id || 'guest',
          product_id: product.id,
          product,
          created_at: new Date().toISOString()
        }];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.some(w => w.product_id === productId);

  // Orders
  const placeOrder = (shippingAddress: ShippingAddress, paymentMethod: string): Order | null => {
    if (cart.length === 0) return null;

    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const newOrder: Order = {
      id: `ord-${Math.floor(1000 + Math.random() * 9000)}`,
      customer_id: user?.id || 'guest',
      customer_name: shippingAddress.fullName || user?.full_name || 'Valued Customer',
      customer_email: user?.email || 'customer@herhub.com',
      status: 'processing',
      total_amount: total,
      shipping_address: shippingAddress,
      payment_method: paymentMethod,
      payment_status: 'paid',
      items: cart.map(item => ({
        id: `item-${Date.now()}-${item.product_id}`,
        order_id: '',
        product_id: item.product.id,
        product_title: item.product.title,
        product_image: item.product.images[0],
        seller_id: item.product.seller_id,
        seller_name: item.product.seller_name,
        unit_price: item.product.price,
        quantity: item.quantity,
        subtotal: item.product.price * item.quantity,
        created_at: new Date().toISOString()
      })),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    showToast('Order placed successfully!', 'success');
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus, updated_at: new Date().toISOString() } : o));
    showToast(`Order #${orderId} updated to ${newStatus.toUpperCase()}`, 'success');
  };

  return (
    <AppContext.Provider value={{
      user,
      role,
      sellerProfile,
      login,
      logout,
      register,
      switchRole,
      categories,
      products,
      sellers,
      reviews,
      addProduct,
      updateProduct,
      deleteProduct,
      approveSeller,
      rejectSeller,
      registerSeller,
      updateStoreSettings,
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      toggleWishlist,
      isInWishlist,
      orders,
      placeOrder,
      updateOrderStatus,
      toast,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
