// ========================================================
// 1. SHOP CATEGORIES (12 Items)
// ========================================================
export const shopCategories = [
  'All Items',
  'Technical Books & E-Books',
  'Hardware Kits & IoT',
  'Developer Merch & Apparel',
  'Software Licenses & Tools',
  'Cheat Sheets & Desk Mats',
  'Mechanical Keyboards & Keycaps',
  'Cloud Sandbox Compute Credits',
  'Audio & Podcasting Gear',
  'Ergonomic Workstation Accessories',
  'Printed Quick-Reference Posters',
  'Robotics & Sensor Breadboards'
];

// ========================================================
// 2. SORT OPTIONS (8 Items)
// ========================================================
export const shopSortOptions = [
  { value: 'featured', label: 'Featured Items' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Customer Rating' },
  { value: 'popular', label: 'Most Popular / Best Sellers' },
  { value: 'newest', label: 'New Arrivals' },
  { value: 'discount', label: 'Biggest Discount' },
  { value: 'reviews', label: 'Most Reviewed' }
];

// Product Image Assets Pool
const productImages = [
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2',
  'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'https://images.unsplash.com/photo-1587829741301-dc798b83add3'
];

const baseProductTemplates = [
  {
    title: 'Full-Stack Architecture Patterns Handbook',
    category: 'Technical Books & E-Books',
    price: 999, originalPrice: 1699,
    rating: 4.9,
    reviews: 340,
    badge: 'Best Seller',
    format: 'PDF + ePub + Kindle',
    description: 'Deep dive into microservices, event-driven design, and resilient database caching strategies.'
  },
  {
    title: 'ESP32 IoT & Robotics Starter Development Kit',
    category: 'Hardware Kits & IoT',
    price: 2499, originalPrice: 3499,
    rating: 4.8,
    reviews: 215,
    badge: 'Hardware Lab',
    format: 'Physical Hardware Box',
    description: 'Includes Wi-Fi/Bluetooth microcontrollers, breadboard, OLED screen, and 30+ sensors.'
  },
  {
    title: 'Learnify "Git Push --Force" Heavyweight Developer Hoodie',
    category: 'Developer Merch & Apparel',
    price: 1499, originalPrice: 2299,
    rating: 4.9,
    reviews: 512,
    badge: 'Official Merch',
    format: '100% Organic Cotton',
    description: 'Premium ultra-soft embroidered fleece hoodie tailored specifically for late-night coding sessions.'
  },
  {
    title: 'Vim & Linux Terminal Shortcuts Oversized Extended Desk Mat',
    category: 'Cheat Sheets & Desk Mats',
    price: 799, originalPrice: 1199,
    rating: 5.0,
    reviews: 430,
    badge: 'Desk Setup',
    format: '900 x 400 mm Non-Slip Rubber',
    description: 'Water-resistant stitched edge gaming desk pad with instant terminal and shortcut cheat sheets.'
  },
  {
    title: 'Next.js 15 & React 19 Production Architecture Blueprint',
    category: 'Technical Books & E-Books',
    price: 1199, originalPrice: 1799,
    rating: 4.9,
    reviews: 180,
    badge: 'Hot Release',
    format: 'Digital E-Book + Starter Code',
    description: 'Master Server Actions, Partial Prerendering (PPR), and scalable cloud deployment workflows.'
  },
  {
    title: 'Raspberry Pi 5 Developer Cluster Node (8GB RAM)',
    category: 'Hardware Kits & IoT',
    price: 4999, originalPrice: 6499,
    rating: 4.9,
    reviews: 140,
    badge: 'Limited Stock',
    format: 'Physical Board + Case & Cooler',
    description: 'Perfect for hosting local Kubernetes (k3s) clusters, home media servers, and Linux automation.'
  },
  {
    title: 'DevTools Pro: Annual Cloud Sandbox & IDE License',
    category: 'Software Licenses & Tools',
    price: 2999, originalPrice: 4499,
    rating: 4.8,
    reviews: 95,
    badge: 'Cloud License',
    format: '1-Year License Key',
    description: '100 monthly cloud GPU computing hours and disposable container sandboxes for AI/ML builds.'
  },
  {
    title: 'Mechanical Keyboard Switch Tester & Custom Keycap Set',
    category: 'Mechanical Keyboards & Keycaps',
    price: 1299, originalPrice: 1699,
    rating: 4.7,
    reviews: 88,
    badge: 'Accessories',
    format: '16-Key Acrylic Tester + PBT Caps',
    description: 'Custom programmer keycap novelty set featuring terminal, sudo, and bug fix icons.'
  },
  {
    title: 'Shure Cardioid USB Dynamic Studio Microphone',
    category: 'Audio & Podcasting Gear',
    price: 5999, originalPrice: 7999,
    rating: 4.9,
    reviews: 160,
    badge: 'Pro Audio',
    format: 'USB-C / XLR Microphone',
    description: 'Crystal-clear broadcast audio for recording course lessons, webinars, and team standups.'
  },
  {
    title: 'Ergonomic Memory Foam Wrist Rest & Vertical Mouse Pad',
    category: 'Ergonomic Workstation Accessories',
    price: 699, originalPrice: 999,
    rating: 4.8,
    reviews: 310,
    badge: 'Ergonomics',
    format: 'Anti-Slip Cooling Gel',
    description: 'Alleviate carpal tunnel fatigue during prolonged typing and code debugging sessions.'
  }
];

// ========================================================
// 3. PRODUCTS DATA (150 Items Total)
// ========================================================
export const shopProductsData = Array.from({ length: 150 }, (_, idx) => {
  const base = baseProductTemplates[idx % baseProductTemplates.length];
  const cycle = Math.floor(idx / baseProductTemplates.length);
  const title = cycle === 0 ? base.title : `${base.title} [Edition ${cycle + 1}]`;

  return {
    id: idx + 1,
    title,
    category: base.category,
    price: parseFloat((base.price + (cycle * 3)).toFixed(2)),
    originalPrice: parseFloat((base.originalPrice + (cycle * 5)).toFixed(2)),
    rating: parseFloat((base.rating - ((idx % 3) * 0.05)).toFixed(1)),
    reviews: base.reviews + (idx * 6),
    badge: base.badge,
    format: base.format,
    image: `${productImages[idx % productImages.length]}?auto=format&fit=crop&w=600&q=80`,
    description: base.description
  };
});

// ========================================================
// 4. SHOP GUARANTEES & VALUE PROPS (20 Items)
// ========================================================
export const shopGuarantees = [
  { id: 1, icon: '🚀', title: 'Instant Digital Delivery', desc: 'Download e-books, source repos, and license keys immediately.' },
  { id: 2, icon: '📦', title: 'Global Tracked Shipping', desc: 'Fast international door-to-door delivery on hardware and apparel.' },
  { id: 3, icon: '🛡️', title: '30-Day Money-Back Guarantee', desc: 'Hassle-free return policy if you are not completely satisfied.' },
  { id: 4, icon: '💬', title: 'Direct Mentor & Author Support', desc: 'Questions on books and kits are answered in private Discord lounges.' },
  { id: 5, icon: '🔒', title: 'PCI-DSS 256-Bit SSL Checkout', desc: 'Bank-level encrypted payment transactions via Stripe and PayPal.' },
  { id: 6, icon: '🔄', title: 'Free Replacement on Hardware', desc: 'Defective IoT sensor parts replaced free within 90 days of receipt.' },
  { id: 7, icon: '🏷️', title: 'Student & Educator Discounts', desc: 'Verified students receive an extra 15% discount across all store items.' },
  { id: 8, icon: '♾️', title: 'Lifetime Digital Updates', desc: 'Purchased e-books receive free revisions when frameworks release major updates.' },
  { id: 9, icon: '🎁', title: 'Eco-Friendly Packaging', desc: 'All physical hoodies, keycaps, and hardware ship in 100% recyclable boxes.' },
  { id: 10, icon: '📜', title: 'Open-Source Commercial Rights', desc: 'Starter templates purchased through the store include full commercial licensing.' },
  { id: 11, icon: '⚡', title: 'Fast-Track DHL Express Shipping', desc: 'Optional 48-hour international courier delivery to major tech hubs.' },
  { id: 12, icon: '🤝', title: 'Bulk Team Purchase Discounts', desc: 'Custom tier pricing available for enterprise engineering departments.' },
  { id: 13, icon: '📱', title: 'Universal ePub & Kindle Formats', desc: 'Read comfortably on iPad, Remarkable, Kindle, or mobile e-readers.' },
  { id: 14, icon: '🧪', title: 'Tested Hardware Components', desc: 'Every ESP32 and Raspberry Pi board is bench-tested before dispatch.' },
  { id: 15, icon: '🎨', title: 'Premium Screen-Printed Merch', desc: 'Durable screen printing that withstands 100+ machine wash cycles.' },
  { id: 16, icon: '🧾', title: 'Detailed Corporate VAT Receipts', desc: 'Automated invoices with custom corporate tax identification.' },
  { id: 17, icon: '🛠️', title: 'Step-by-Step Hardware Video Guides', desc: 'Physical kits come with comprehensive video assembly walkthroughs.' },
  { id: 18, icon: '🌍', title: 'Customs & Duty Pre-Calculated', desc: 'No surprise customs fees upon international delivery.' },
  { id: 19, icon: '🔑', title: 'Instant API License Activation', desc: 'Software product license keys delivered instantly to your dashboard.' },
  { id: 20, icon: '☕', title: 'Official Developer Coffee Beans', desc: 'Ethically sourced single-origin roasts crafted for sustained cognitive focus.' }
];

// ========================================================
// 5. CUSTOMER PRODUCT REVIEWS (80 Items Total)
// ========================================================
const reviewerNames = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Marcus Aurelius', 'Siddharth Sen', 'Chloe Bourgeois', 'Gabriel Agreste', 'Kavita Iyer', 'Devon Vance'
];

const customerFeedback = [
  'The Full-Stack Architecture Handbook saved our team months of technical trial and error. The diagrams are crystal clear.',
  'The extended desk mat has fantastic stitch quality and the Vim shortcuts are surprisingly helpful when switching tools.',
  'ESP32 kit arrived in 3 days. All the sensors were cleanly labeled and the associated course labs worked without a hitch.',
  'The hoodie is exceptionally soft, heavy, and does not shrink in the wash. Standard uniform for remote engineering work!',
  'Best e-book on Next.js 15 Server Actions out there. The GitHub repo code worked out of the box with zero npm build errors.'
];

export const shopCustomerReviews = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  productId: (idx % 150) + 1,
  name: `${reviewerNames[idx % reviewerNames.length]} ${idx >= 16 ? `(#${idx + 1})` : ''}`,
  rating: 5,
  date: `Month ${(idx % 12) + 1}, 2026`,
  comment: customerFeedback[idx % customerFeedback.length],
  verifiedPurchase: true
}));

// ========================================================
// 6. STORE FAQS & SHIPPING POLICIES (40 Items Total)
// ========================================================
const storeFaqTemplates = [
  'How soon do I receive my digital e-book and code downloads after purchasing?',
  'What is the international delivery timeline for hardware kits and apparel?',
  'Can I get an invoice with my company name and VAT number for reimbursement?',
  'What happens if my hardware board or sensor arrives damaged in transit?',
  'Are software license keys renewed automatically or one-time purchases?',
  'Can I download the e-book in multiple digital formats (PDF, ePub, MOBI)?',
  'What is the return policy for clothing apparel if the size does not fit?',
  'Are the starter code repositories updated when new framework versions launch?',
  'Do you ship to university addresses and campus post offices?',
  'Can I request bulk order discounts for our company engineering cohort?'
];

export const shopOrderFaqs = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 1,
  question: `${storeFaqTemplates[idx % 10]} ${idx >= 10 ? `[Support Ref #${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Digital downloads and license keys are delivered immediately to your account dashboard and email. Physical merchandise ships within 24 hours with tracked door-to-door courier delivery and our 30-day guarantee.',
  category: idx % 2 === 0 ? 'Shipping & Hardware' : 'Digital Downloads & Licenses'
}));