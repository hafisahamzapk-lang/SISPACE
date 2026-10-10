import { Category, Product, Seller, Review, Order, Profile } from '@/types/database.types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Homemade Healthy Sweets & Laddus',
    slug: 'healthy-laddus-sweets',
    description: 'Fresh seeds & nuts laddus, premium quality with no preservatives by Hynoos Food Qatar.',
    image_url: '/images/qatar/hynoos_laddus_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-2',
    name: 'Feminineza Store: Hijabs & Modest Nighties',
    slug: 'premium-hijabs-accessories',
    description: 'Chiffon, jersey, shimmer hijabs & soft modest Dubai nighties (4 PC for QAR 100) by Feminineza Store (Mamoura, Qatar).',
    image_url: '/images/qatar/feminineza_hijabs_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-3',
    name: 'Feminineza Modest Dubai Nighties & Apparel',
    slug: 'modest-dubai-apparel',
    description: 'Soft, premium quality fabric modest dresses & Dubai nighties (4 PC for QAR 100) by Feminineza Store (Mamoura, Qatar).',
    image_url: '/images/qatar/dubai_nighties_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-4',
    name: 'Daycare & Babysitting Service',
    slug: 'daycare-babysitting-service',
    description: 'Safe & trusted care, fun engaging activities, story time & learning support in Hilal Area, Doha (Call/WhatsApp +974 30889290).',
    image_url: '/images/qatar/daycare_babysitting_flyer.jpg',
    created_at: new Date().toISOString()
  },

  {
    id: 'cat-6',
    name: 'Personalized Gifts & Keepsakes',
    slug: 'personalized-gifts-keepsakes',
    description: 'Custom photo mugs, chocolate bouquets & handcrafted love cakes by Sketch and Stitch Qatar.',
    image_url: '/images/qatar/sketch_stitch_gifts_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-7',
    name: 'Online Tuition & Academic Coaching',
    slug: 'online-tuition-coaching',
    description: 'Expert subject teachers, flexible timings & concept-based learning by Future Minds Academy Qatar.',
    image_url: '/images/qatar/future_minds_tuition_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-8',
    name: 'Pure Organic Henna Cones & Body Art',
    slug: 'organic-henna-body-art',
    description: '100% Wudu friendly pure organic henna cones, hand cones & henna paste by SAZ Henna Qatar (Ain Khalid, Doha).',
    image_url: '/images/qatar/saz_henna_organic_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-9',
    name: 'Traditional Kerala Snacks & Pickles',
    slug: 'traditional-kerala-snacks-pickles',
    description: 'Authentic homemade Malabar snacks (Unnakaya, Samosa, Elayappam) & fresh mango & pineapple pickles in Qatar.',
    image_url: '/images/qatar/kerala_snacks_pickles_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-10',
    name: 'MOJA Timeless Hijabs & Neutral Elegance',
    slug: 'moja-timeless-hijabs',
    description: 'Soft hues, effortless beauty & neutral elegance by MOJA. Lightweight & flowy premium hijabs in 20+ rich shades.',
    image_url: '/images/qatar/moja_hijab_collection_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-11',
    name: 'GIFTERRA Events & Decor',
    slug: 'gifterra-events-decor',
    description: 'Turning your moments into beautiful memories! Elegant setups, custom cakes, food & photography in Qatar (+974 66126836).',
    image_url: '/images/qatar/gifterra_events_decor_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-12',
    name: 'Home Tutor & After-School Care',
    slug: 'home-tutor-after-school-care',
    description: 'Experienced lady tutor for KG to 7th (All Subjects) & 8th to 10th (Maths). Morning & evening sessions in Ain Khalid (+974 66584952).',
    image_url: '/images/qatar/home_tutor_ain_khalid_flyer.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 'cat-13',
    name: 'Z Queen Malaysian Chiffon Hijabs',
    slug: 'z-queen-malaysian-chiffon-hijabs',
    description: 'Effortless beauty & endless shades. Premium Malaysian heavy chiffon hijabs in 100+ vibrant & nude colors by Z Queen Hijabs.',
    image_url: '/images/qatar/z_queen_hijabs_flyer.jpg',
    created_at: new Date().toISOString()
  }
];

export const INITIAL_SELLERS: Seller[] = [
  {
    id: 'seller-1',
    profile_id: 'prof-seller-1',
    store_name: 'Hynoos Food Qatar',
    store_slug: 'hynoos-food-qatar',
    store_description: 'Homemade with Love — Fresh, healthy seeds & nuts laddus made in Qatar with zero preservatives. Contact: +974 77327607 / +974 71343015',
    logo_url: '/images/qatar/hynoos_laddus_flyer.jpg',
    banner_url: '/images/qatar/hynoos_laddus_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 4.98,
    created_at: new Date(Date.now() - 86400000 * 60).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-2',
    profile_id: 'prof-seller-2',
    store_name: 'Feminineza Store',
    store_slug: 'feminineza-store',
    store_description: 'Moja & Zera Brands — Premium chiffon, jersey & shimmer hijabs, kids hijabs, prayer dresses & modest nighties. Mamoura, Qatar. Contact: +974 66184760',
    logo_url: '/images/qatar/feminineza_hijabs_flyer.jpg',
    banner_url: '/images/qatar/feminineza_hijabs_flyer.jpg',
    business_address: 'Mamoura, Qatar',
    status: 'approved',
    rating: 4.95,
    created_at: new Date(Date.now() - 86400000 * 45).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-3',
    profile_id: 'prof-seller-3',
    store_name: 'Hilal Daycare & Babysitting',
    store_slug: 'hilal-daycare-babysitting',
    store_description: 'Safe, Happy, Loved — Your little one’s safety and happiness is my priority! Safe & trusted care, fun engaging activities, story time & learning support for infants, toddlers & school kids. Hilal Area, Qatar. Call/WhatsApp: +974 30889290',
    logo_url: '/images/qatar/daycare_babysitting_flyer.jpg',
    banner_url: '/images/qatar/daycare_babysitting_flyer.jpg',
    business_address: 'Hilal Area, Doha, Qatar',
    status: 'approved',
    rating: 4.99,
    created_at: new Date(Date.now() - 86400000 * 30).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-5',
    profile_id: 'prof-seller-5',
    store_name: 'Sketch and Stitch',
    store_slug: 'sketch-and-stitch',
    store_description: 'Sketch Your Memories, Stitched with Love — Personalized unique & memorable gifts. Customized photo mugs, chocolate bouquets, cakes & keepsakes in Qatar. DM to order.',
    logo_url: '/images/qatar/sketch_stitch_gifts_flyer.jpg',
    banner_url: '/images/qatar/sketch_stitch_gifts_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 4.97,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-6',
    profile_id: 'prof-seller-6',
    store_name: 'Future Minds Tuition Academy',
    store_slug: 'future-minds-tuition-academy',
    store_description: 'Building Bright Minds for a Better Tomorrow! Highly qualified subject expert teachers, concept-based curriculum, exam preparation & free online demo class. Contact: +974 70906815',
    logo_url: '/images/qatar/future_minds_tuition_flyer.jpg',
    banner_url: '/images/qatar/future_minds_tuition_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 4.96,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-7',
    profile_id: 'prof-seller-7',
    store_name: 'SAZ Henna Organic',
    store_slug: 'saz-henna-organic',
    store_description: 'Pure organic henna cones — 100% Wudu friendly. Hand cones (5 QAR), Nail cones (4 QAR), Practice cones (4 QAR), Henna paste (10 QAR). Ain Khalid, Doha. Delivery & pickup available. Contact: +974 50929989',
    logo_url: '/images/qatar/saz_henna_organic_flyer.jpg',
    banner_url: '/images/qatar/saz_henna_organic_flyer.jpg',
    business_address: 'Ain Khalid, Doha, Qatar',
    status: 'approved',
    rating: 4.99,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-8',
    profile_id: 'prof-seller-8',
    store_name: 'Malabar Home Kitchen',
    store_slug: 'malabar-home-kitchen',
    store_description: 'Authentic Kerala Homemade Delights — Hot fried snacks, Unnakaya, Elayappam, Kallummakkaya & homemade spicy mango & pineapple pickles made fresh to order in Qatar.',
    logo_url: '/images/qatar/kerala_snacks_pickles_flyer.jpg',
    banner_url: '/images/qatar/kerala_snacks_pickles_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 4.98,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-9',
    profile_id: 'prof-seller-9',
    store_name: 'MOJA Hijabs',
    store_slug: 'moja-hijabs',
    store_description: 'MOJA Timeless Collection — Soft hues, effortless beauty, endless ways to style. Lightweight & flowy premium quality hijabs for everyday wear, meetings & special occasions.',
    logo_url: '/images/qatar/moja_hijab_collection_flyer.jpg',
    banner_url: '/images/qatar/moja_hijab_collection_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 4.97,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-10',
    profile_id: 'prof-seller-10',
    store_name: 'GIFTERRA Events & Decor',
    store_slug: 'gifterra-events-decor',
    store_description: 'Your Dream Event, Our Creative Touch! Complete event setups for Birthdays, Weddings, Engagements, Private Parties & Corporate Events. Includes decor, cakes, food & photography. Contact: +974 66126836 / 70918960',
    logo_url: '/images/qatar/gifterra_events_decor_flyer.jpg',
    banner_url: '/images/qatar/gifterra_events_decor_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 5.0,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-11',
    profile_id: 'prof-seller-11',
    store_name: 'Ain Khalid Lady Home Tutor',
    store_slug: 'ain-khalid-lady-home-tutor',
    store_description: 'Personalized attention, better concepts, better future. 5 days weekly after-school care & tutoring handled by experienced lady tutor. Located in Ain Khalid, near Salwa Road, Qatar. Call/WhatsApp: +974 66584952',
    logo_url: '/images/qatar/home_tutor_ain_khalid_flyer.jpg',
    banner_url: '/images/qatar/home_tutor_ain_khalid_flyer.jpg',
    business_address: 'Ain Khalid, Near Salwa Road, Doha, Qatar',
    status: 'approved',
    rating: 4.99,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'seller-12',
    profile_id: 'prof-seller-12',
    store_name: 'Z Queen Hijabs',
    store_slug: 'z-queen-hijabs',
    store_description: 'Premium Malaysian Heavy Chiffon Hijabs — Soft, smooth, lightweight, breathable & easy to style in 100+ shades. Online order & Qatar delivery available.',
    logo_url: '/images/qatar/z_queen_hijabs_flyer.jpg',
    banner_url: '/images/qatar/z_queen_hijabs_flyer.jpg',
    business_address: 'Doha, Qatar',
    status: 'approved',
    rating: 5.0,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    seller_id: 'seller-1',
    seller_name: 'Hynoos Food Qatar',
    category_id: 'cat-1',
    category_name: 'Homemade Healthy Sweets & Laddus',
    title: 'Homemade Seeds & Nuts Laddus (Healthy & Fresh)',
    slug: 'homemade-seeds-nuts-laddus',
    description: 'Homemade with Love — Fresh seeds & nuts laddus prepared in Qatar. Premium quality, zero preservatives, 100% healthy & delicious.',
    price: 75.00,
    compare_at_price: 95.00,
    stock_quantity: 40,
    sku: 'HYN-LAD-01',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1599785209707-a456fc1337cc?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviews_count: 38,
    created_at: new Date(Date.now() - 86400000 * 20).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-2',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-2',
    category_name: 'Premium Hijabs & Accessories',
    title: 'Moja & Zera Premium Chiffon & Jersey Hijabs Collection',
    slug: 'moja-zera-premium-hijabs',
    description: 'Feminineza Store Exclusive — Premium chiffon, jersey, shimmer & kids hijabs with matching accessories & prayer dresses in Mamoura, Qatar.',
    price: 95.00,
    compare_at_price: 120.00,
    stock_quantity: 50,
    sku: 'FEM-HIJ-02',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/feminineza_hijabs_flyer.jpg'
    ],
    rating: 4.9,
    reviews_count: 45,
    created_at: new Date(Date.now() - 86400000 * 15).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-3',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-3',
    category_name: 'Modest Dubai Nighties & Apparel',
    title: 'Modest Dubai Printed Nighties Bundle (4 PC Offer)',
    slug: 'modest-dubai-nighties-bundle',
    description: 'Exclusive Offer! 4 PC FOR 100 RIYAL. Soft, modest, premium quality fabric nighties for maximum comfort. Delivery available in Qatar.',
    price: 100.00,
    compare_at_price: 150.00,
    stock_quantity: 25,
    sku: 'FEM-NIG-03',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/dubai_nighties_flyer.jpg',
      '/images/qatar/feminineza_lace_square_nighties.jpg'
    ],
    rating: 4.8,
    reviews_count: 29,
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-14',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-3',
    category_name: 'Modest Dubai Nighties & Apparel',
    title: 'Feminineza Lace Neckline Premium Printed Cotton Nighties',
    slug: 'feminineza-lace-neckline-printed-cotton-nighties',
    description: 'Premium quality soft cotton floral & patterned nighties featuring elegant lace trimming on square necklines. High-breathability modest fit for daily home comfort. Available in 5 distinct patterns (Brown Vintage, Cream Floral, Navy Geometric, Khaki Floral, Navy Red Blossom). Special offer: 4 PC FOR QAR 100.',
    price: 28.00,
    compare_at_price: 35.00,
    stock_quantity: 60,
    sku: 'FEM-NIG-14',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/feminineza_lace_square_nighties.jpg'
    ],
    rating: 4.9,
    reviews_count: 38,
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-15',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-3',
    category_name: 'Modest Dubai Nighties & Apparel',
    title: 'Feminineza Elegant V-Neck Floral Loungewear Nighties',
    slug: 'feminineza-vneck-floral-loungewear-nighties',
    description: 'Flowy and soft V-neck modest printed nighties designed by Feminineza Store. Vibrant floral prints in Sunshine Yellow, Slate Grey, Mustard Blossom, and Royal Blue White Floral. Ultra-comfortable for all-day indoor relaxation.',
    price: 28.00,
    compare_at_price: 35.00,
    stock_quantity: 45,
    sku: 'FEM-NIG-15',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/feminineza_vneck_floral_nighties.jpg'
    ],
    rating: 4.9,
    reviews_count: 24,
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-16',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-3',
    category_name: 'Modest Dubai Nighties & Apparel',
    title: 'Feminineza Deep V-Neck Lace Detail Printed Nightdresses',
    slug: 'feminineza-deep-vneck-lace-detail-nightdresses',
    description: 'Modest maxi nightdresses crafted with white delicate lace trim around deep V-necklines and sleeve cuffs. Premium soft breathable fabric in Black Lotus, Navy Vines, Sage Floral, Grey Paisley, and Golden Mustard.',
    price: 28.00,
    compare_at_price: 35.00,
    stock_quantity: 50,
    sku: 'FEM-NIG-16',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/feminineza_deep_vneck_lace_nighties.jpg'
    ],
    rating: 4.8,
    reviews_count: 31,
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-17',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-3',
    category_name: 'Modest Dubai Nighties & Apparel',
    title: 'Feminineza Leopard & Wild Floral Lace Trimmed Nightwear',
    slug: 'feminineza-leopard-wild-floral-lace-nightwear',
    description: 'Chic and modern full-length nighties featuring striking leopard prints and pastel floral patterns with intricate white lace chest accents. Soft touch fabric with generous modest silhouette.',
    price: 28.00,
    compare_at_price: 35.00,
    stock_quantity: 40,
    sku: 'FEM-NIG-17',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/feminineza_leopard_floral_nighties.jpg'
    ],
    rating: 4.95,
    reviews_count: 19,
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-18',
    seller_id: 'seller-2',
    seller_name: 'Feminineza Store',
    category_id: 'cat-3',
    category_name: 'Modest Dubai Nighties & Apparel',
    title: 'Feminineza Feeding-Friendly Maternity & Nursing Nighties (M - XXL)',
    slug: 'feminineza-feeding-friendly-maternity-nursing-nighties',
    description: 'Specially designed feeding-friendly button-front nursing nighties by Feminineza Store. Easy front button access, delicate lace detailing, ultra-soft breathable cotton. Available in sizes M, L, XL, XXL across Pastel Patchwork, Midnight Blossom, Ivory Ornamental, and Navy Daisy patterns.',
    price: 32.00,
    compare_at_price: 45.00,
    stock_quantity: 55,
    sku: 'FEM-NIG-18',
    is_featured: true,
    is_active: true,
    images: [
      '/images/qatar/feminineza_feeding_friendly_nighties.jpg'
    ],
    rating: 5.0,
    reviews_count: 42,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-4',
    seller_id: 'seller-3',
    seller_name: 'Hilal Daycare & Babysitting',
    category_id: 'cat-4',
    category_name: 'Daycare & Babysitting Service',
    title: 'Safe & Loving Hourly Daycare & Babysitting (Hilal Area)',
    slug: 'safe-loving-hourly-daycare-babysitting',
    description: 'Safe, happy & loved daycare service in Hilal Area. Min 1 hour, flexible timing. Includes fun activities, learning support, meals & snacks as needed. Pre-booking required (+974 30889290).',
    price: 35.00,
    compare_at_price: 50.00,
    stock_quantity: 20,
    sku: 'HIL-DAY-04',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviews_count: 32,
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    updated_at: new Date().toISOString()
  },

  {
    id: 'prod-6',
    seller_id: 'seller-5',
    seller_name: 'Sketch and Stitch',
    category_id: 'cat-6',
    category_name: 'Personalized Gifts & Keepsakes',
    title: 'Personalized Photo Mug & Chocolate Bouquet Gift Set',
    slug: 'personalized-photo-mug-chocolate-bouquet',
    description: 'Thoughtful gifts made with love! Custom photo mug, chocolate bouquet with KitKat & Ferrero Rocher, and handcrafted love cake by Sketch and Stitch.',
    price: 160.00,
    compare_at_price: 190.00,
    stock_quantity: 15,
    sku: 'SKS-GIF-06',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviews_count: 27,
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-7',
    seller_id: 'seller-6',
    seller_name: 'Future Minds Tuition Academy',
    category_id: 'cat-7',
    category_name: 'Online Tuition & Academic Coaching',
    title: 'Free Online Demo Class & Interactive Tuition Session',
    slug: 'free-online-demo-class-tuition',
    description: 'Choose your preferred teacher! Expert online subject tuition with flexible timings, concept-based curriculum & exam-ready preparation in Qatar.',
    price: 150.00,
    compare_at_price: 200.00,
    stock_quantity: 50,
    sku: 'FMT-TUI-07',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.9,
    reviews_count: 34,
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-8',
    seller_id: 'seller-7',
    seller_name: 'SAZ Henna Organic',
    category_id: 'cat-8',
    category_name: 'Pure Organic Henna Cones & Body Art',
    title: 'Pure Organic Henna Cones & Paste Set (100% Wudu Friendly)',
    slug: 'pure-organic-henna-cone-set',
    description: '100% Wudu friendly organic henna cones & paste. Hand cone (5 QAR), Nail cone (4 QAR), Practice cone (4 QAR), Henna paste (10 QAR). Delivery & pickup in Ain Khalid, Doha (+974 50929989).',
    price: 25.00,
    compare_at_price: 35.00,
    stock_quantity: 100,
    sku: 'SAZ-HEN-08',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviews_count: 41,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-9',
    seller_id: 'seller-8',
    seller_name: 'Malabar Home Kitchen',
    category_id: 'cat-9',
    category_name: 'Traditional Kerala Snacks & Pickles',
    title: 'Homemade Malabar Snacks & Fresh Pineapple / Mango Pickle Platter',
    slug: 'malabar-snacks-fresh-pickles-platter',
    description: 'Freshly made traditional Kerala evening snacks (Unnakaya, Samosas, Elayappam) served with homemade spicy mango and pineapple pickles.',
    price: 45.00,
    compare_at_price: 60.00,
    stock_quantity: 30,
    sku: 'MAL-SNA-09',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.98,
    reviews_count: 36,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-10',
    seller_id: 'seller-9',
    seller_name: 'MOJA Hijabs',
    category_id: 'cat-10',
    category_name: 'MOJA Timeless Hijabs & Neutral Elegance',
    title: 'MOJA Timeless Neutral Elegance Hijab Collection (Set of 3)',
    slug: 'moja-timeless-neutral-hijab-collection',
    description: 'Made for every mood — Lightweight, flowy & breathable premium hijabs in Ivory, Honey Cream, Opera Mauve & Dark Maroon shades.',
    price: 120.00,
    compare_at_price: 150.00,
    stock_quantity: 45,
    sku: 'MOJ-HIJ-10',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.97,
    reviews_count: 29,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-11',
    seller_id: 'seller-10',
    seller_name: 'GIFTERRA Events & Decor',
    category_id: 'cat-11',
    category_name: 'GIFTERRA Events & Decor',
    title: 'Bespoke Birthday & Engagement Event Styling & Decor Package',
    slug: 'bespoke-birthday-engagement-event-styling',
    description: 'Complete birthday & private party decoration setup featuring floral arches, neon signs, balloon backdrops, photography & reels package.',
    price: 650.00,
    compare_at_price: 850.00,
    stock_quantity: 10,
    sku: 'GIF-EVE-11',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviews_count: 19,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-12',
    seller_id: 'seller-11',
    seller_name: 'Ain Khalid Lady Home Tutor',
    category_id: 'cat-12',
    category_name: 'Home Tutor & After-School Care',
    title: 'After-School Tutoring & Concept Coaching (Monthly Package)',
    slug: 'after-school-tutoring-concept-coaching',
    description: '2 hours daily / 5 days weekly after-school tutoring for KG to 7th (All subjects) and 8th to 10th (Mathematics) with flexible morning/evening shifts.',
    price: 350.00,
    compare_at_price: 450.00,
    stock_quantity: 15,
    sku: 'HMT-TUI-12',
    is_featured: true,
    is_active: true,
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.99,
    reviews_count: 28,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-13',
    seller_id: 'seller-12',
    seller_name: 'Z Queen Hijabs',
    category_id: 'cat-13',
    category_name: 'Z Queen Malaysian Chiffon Hijabs',
    title: 'Z Queen Premium Malaysian Heavy Chiffon Hijab (Chart B Collection)',
    slug: 'z-queen-malaysian-heavy-chiffon-chart-b',
    description: 'Authentic Z Queen Hijabs — Soft, smooth & durable Malaysian heavy chiffon hijabs. Features Chart B color selection: Burgundy, Olive, Antique Grey, Mustard, Dusty Grape, Milk White, Candy Pink, Dusty Pink 01 & Silver. Lightweight, non-slip & breathable.',
    price: 45.00,
    compare_at_price: 60.00,
    stock_quantity: 80,
    sku: 'ZQN-HIJ-13',
    is_featured: true,
    is_active: true,
    images: [
      '/images/z_queen/chart_b.jpg',
      '/images/z_queen/chart_a.jpg',
      '/images/z_queen/chart_c.jpg',
      '/images/z_queen/chart_d.jpg',
      '/images/z_queen/swatches.jpg'
    ],
    rating: 5.0,
    reviews_count: 52,
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-19',
    seller_id: 'seller-12',
    seller_name: 'Z Queen Hijabs',
    category_id: 'cat-13',
    category_name: 'Z Queen Malaysian Chiffon Hijabs',
    title: 'Z Queen Premium Malaysian Chiffon Hijab (Chart A Color Palette)',
    slug: 'z-queen-malaysian-chiffon-chart-a',
    description: 'High-grade Malaysian Heavy Chiffon Hijab by Z Queen. Chart A features classic & nude essentials: Black, Navy, Dusty Pink, Grey, Opera Mauve, Mauve, Beige, Nude Beige & Nude Espresso.',
    price: 45.00,
    compare_at_price: 60.00,
    stock_quantity: 75,
    sku: 'ZQN-HIJ-19',
    is_featured: true,
    is_active: true,
    images: [
      '/images/z_queen/chart_a.jpg',
      '/images/z_queen/chart_b.jpg',
      '/images/z_queen/swatches.jpg'
    ],
    rating: 4.95,
    reviews_count: 48,
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-20',
    seller_id: 'seller-12',
    seller_name: 'Z Queen Hijabs',
    category_id: 'cat-13',
    category_name: 'Z Queen Malaysian Chiffon Hijabs',
    title: 'Z Queen Malaysian Chiffon Hijab (Chart C Earth & Pastel Palette)',
    slug: 'z-queen-malaysian-chiffon-chart-c',
    description: 'Vibrant & elegant shades in Chart C selection: Fog Grey, Coffee Brown, Rouge Pink, Maroon, Moss Green, Peach, Powder Blue, Marigold, Nude Silver & Dusty Silver. Easy to pin and drape.',
    price: 45.00,
    compare_at_price: 60.00,
    stock_quantity: 65,
    sku: 'ZQN-HIJ-20',
    is_featured: true,
    is_active: true,
    images: [
      '/images/z_queen/chart_c.jpg',
      '/images/z_queen/chart_d.jpg',
      '/images/z_queen/swatches.jpg'
    ],
    rating: 4.98,
    reviews_count: 36,
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-21',
    seller_id: 'seller-12',
    seller_name: 'Z Queen Hijabs',
    category_id: 'cat-13',
    category_name: 'Z Queen Malaysian Chiffon Hijabs',
    title: 'Z Queen Malaysian Heavy Chiffon Hijab (Chart D Rich Jewels & Blues)',
    slug: 'z-queen-malaysian-chiffon-chart-d',
    description: 'Rich jewel tones and deep blues in Chart D: Dark Maroon, Old Rose, Cobalt Blue, Dark Chikku, Denim, Dusty Brown, Sky Blue, Espresso, Dusty Mauve & Pearl Cream.',
    price: 45.00,
    compare_at_price: 60.00,
    stock_quantity: 70,
    sku: 'ZQN-HIJ-21',
    is_featured: true,
    is_active: true,
    images: [
      '/images/z_queen/chart_d.jpg',
      '/images/z_queen/chart_b.jpg',
      '/images/z_queen/swatches.jpg'
    ],
    rating: 5.0,
    reviews_count: 42,
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'prod-22',
    seller_id: 'seller-12',
    seller_name: 'Z Queen Hijabs',
    category_id: 'cat-13',
    category_name: 'Z Queen Malaysian Chiffon Hijabs',
    title: 'Z Queen Neutral Swatches Premium Soft Chiffon Collection',
    slug: 'z-queen-neutral-swatches-collection',
    description: 'Over 40+ neutral, earth, mocha, tan, cream, sand and nude shades in premium soft chiffon fabric. Perfect for versatile daily styling.',
    price: 45.00,
    compare_at_price: 60.00,
    stock_quantity: 90,
    sku: 'ZQN-HIJ-22',
    is_featured: true,
    is_active: true,
    images: [
      '/images/z_queen/swatches.jpg',
      '/images/z_queen/chart_a.jpg',
      '/images/z_queen/chart_b.jpg'
    ],
    rating: 5.0,
    reviews_count: 64,
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-8402',
    customer_id: 'prof-cust-1',
    customer_name: 'Elena Rostova',
    customer_email: 'elena@example.com',
    status: 'delivered',
    total_amount: 300.00,
    shipping_address: {
      fullName: 'Elena Rostova',
      street: 'West Bay Street 12',
      city: 'Doha',
      state: 'Ad Dawhah',
      postalCode: '00000',
      country: 'Qatar',
      phone: '+974 4400 1234'
    },
    payment_method: 'Credit Card',
    payment_status: 'paid',
    items: [
      {
        id: 'item-1',
        order_id: 'ord-8402',
        product_id: 'prod-1',
        product_title: 'Hand-Hammered Brass Sunburst Hoop Earrings',
        product_image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
        seller_id: 'seller-1',
        seller_name: 'Amina Artisanal Studio',
        unit_price: 175.00,
        quantity: 1,
        subtotal: 175.00,
        created_at: new Date(Date.now() - 86400000 * 7).toISOString()
      },
      {
        id: 'item-2',
        order_id: 'ord-8402',
        product_id: 'prod-2',
        product_title: 'Raw Whipped Shea & Rosehip Body Butter',
        product_image: 'https://images.unsplash.com/photo-1608248597261-8332570544c0?auto=format&fit=crop&w=800&q=80',
        seller_id: 'seller-2',
        seller_name: 'Sora Organic Beauty',
        unit_price: 125.00,
        quantity: 1,
        subtotal: 125.00,
        created_at: new Date(Date.now() - 86400000 * 7).toISOString()
      }
    ],
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 'ord-8403',
    customer_id: 'prof-cust-1',
    customer_name: 'Elena Rostova',
    customer_email: 'elena@example.com',
    status: 'processing',
    total_amount: 450.00,
    shipping_address: {
      fullName: 'Elena Rostova',
      street: 'West Bay Street 12',
      city: 'Doha',
      state: 'Ad Dawhah',
      postalCode: '00000',
      country: 'Qatar',
      phone: '+974 4400 1234'
    },
    payment_method: 'Card',
    payment_status: 'paid',
    items: [
      {
        id: 'item-3',
        order_id: 'ord-8403',
        product_id: 'prod-3',
        product_title: 'Hand-Dyed Indigo Linen Wrap Kimono',
        product_image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        seller_id: 'seller-3',
        seller_name: 'Zahara Fashion House',
        unit_price: 450.00,
        quantity: 1,
        subtotal: 450.00,
        created_at: new Date(Date.now() - 86400000 * 1).toISOString()
      }
    ],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 1).toISOString()
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    product_id: 'prod-1',
    user_id: 'prof-cust-1',
    user_name: 'Elena Rostova',
    user_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Sublime craftsmanship! These earrings catch the light beautifully and are surprisingly lightweight.',
    created_at: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    id: 'rev-2',
    product_id: 'prod-2',
    user_id: 'prof-cust-2',
    user_name: 'Amara Vance',
    user_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The scent of real wild rose and unrefined shea butter is intoxicating. Absorbs quickly without greasy feel!',
    created_at: new Date(Date.now() - 86400000 * 3).toISOString()
  }
];
