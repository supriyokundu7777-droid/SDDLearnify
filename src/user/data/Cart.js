// ========================================================
// 1. DEFAULT CART ITEMS (3 Active + 47 Presets = 50 Items)
// ========================================================
export const initialCartItems = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp (React 19 & Next.js 15)',
    category: 'Online Course',
    type: 'Digital Course',
    price: 2499, originalPrice: 5999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    instructor: 'Alex Morrison',
    badge: 'Lifetime Access'
  },
  {
    id: 2,
    title: 'Full-Stack Architecture Patterns & Systems Design Handbook',
    category: 'E-Book / PDF',
    type: 'Digital Download',
    price: 999, originalPrice: 1699,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
    instructor: 'Learnify Faculty',
    badge: 'Instant E-Book'
  },
  {
    id: 3,
    title: 'ESP32 IoT & Robotics Starter Development Kit',
    category: 'Hardware Kit',
    type: 'Physical Item',
    price: 2499, originalPrice: 3499,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
    instructor: 'Hardware Lab',
    badge: 'Tracked Shipping'
  }
];

const presetTitles = [
  'Docker & Kubernetes Cloud DevOps Masterclass',
  'Next.js 15 Server Actions Enterprise Blueprint',
  'Autonomous AI Agents with PyTorch & LangChain',
  'Learnify "Git Push --Force" Embroidered Hoodie',
  'Vim & Linux Terminal Shortcuts Extended Desk Mat',
  'Raspberry Pi 5 Developer Cluster Node (8GB)',
  'Microservices Architecture with Node.js & Redis',
  'Figma Design Systems & Variables Masterclass'
];

export const cartCatalogPresets = Array.from({ length: 47 }, (_, idx) => ({
  id: idx + 4,
  title: `${presetTitles[idx % presetTitles.length]} [Edition #${idx + 1}]`,
  category: ['Online Course', 'E-Book', 'Hardware Kit', 'Developer Merch'][idx % 4],
  type: idx % 2 === 0 ? 'Digital Download' : 'Physical Item',
  price: parseFloat(((idx * 3.5) % 80 + 19.99).toFixed(2)),
  originalPrice: parseFloat(((idx * 5.2) % 110 + 39.99).toFixed(2)),
  quantity: 1,
  image: `https://images.unsplash.com/photo-${['1498050108023-c5249f4df085', '1544716278-ca5e3f4abd8c', '1518770660439-4636190af475', '1618384887929-16ec33fab9ef'][idx % 4]}?auto=format&fit=crop&w=400&q=80`,
  instructor: ['Alex Morrison', 'Dr. Emily Watson', 'Elena Rostova', 'David Reynolds'][idx % 4],
  badge: ['Lifetime Access', 'Instant Download', 'Tracked Courier', 'Limited Stock'][idx % 4]
}));

// ========================================================
// 2. ACTIVE PROMO CODES (50 Items)
// ========================================================
export const validPromoCodes = {
  'LEARN2026': 0.15,
  'STUDENT30': 0.30,
  'PROMO10': 0.10,
  'REACT19': 0.20,
  'DEVCOMMUNITY': 0.25,
  'SUMMERDEV': 0.15,
  'AIACCELERATE': 0.20,
  'WELCOME50': 0.50,
  'VIPMEMBER': 0.35,
  'CYBERMONDAY': 0.40,
  ...Object.fromEntries(
    Array.from({ length: 40 }, (_, idx) => [
      `BOOST${idx + 11}`,
      parseFloat((0.10 + (idx % 4) * 0.05).toFixed(2))
    ])
  )
};

// ========================================================
// 3. RECOMMENDED ADD-ONS (100 Items)
// ========================================================
const addOnTemplates = [
  { title: 'Docker & Kubernetes Cloud DevOps Masterclass', price: 19.99, orig: 39.99, rating: 4.8, img: '1607799279861-4dd421887fb3' },
  { title: 'Vim & Linux Terminal Shortcuts Extended Desk Mat', price: 24.99, orig: 34.99, rating: 5.0, img: '1618384887929-16ec33fab9ef' },
  { title: 'Clean Architecture in TypeScript (Interactive Guide)', price: 499, orig: 999, rating: 4.9, img: '1544716278-ca5e3f4abd8c' },
  { title: 'Git & GitHub Workflow Automation Cheatsheet', price: 299, orig: 599, rating: 4.7, img: '1498050108023-c5249f4df085' },
  { title: 'FastAPI & PyTorch Model Deployment Sandbox Kit', price: 999, orig: 1699, rating: 4.9, img: '1518770660439-4636190af475' }
];

export const recommendedAddOns = Array.from({ length: 100 }, (_, idx) => {
  const base = addOnTemplates[idx % addOnTemplates.length];
  const iteration = Math.floor(idx / addOnTemplates.length);
  return {
    id: idx + 101,
    title: iteration === 0 ? base.title : `${base.title} [Addon Pack #${iteration + 1}]`,
    price: parseFloat((base.price + (iteration * 1.5)).toFixed(2)),
    originalPrice: parseFloat((base.orig + (iteration * 2.5)).toFixed(2)),
    rating: parseFloat((base.rating - ((idx % 3) * 0.05)).toFixed(1)),
    image: `https://images.unsplash.com/photo-${base.img}?auto=format&fit=crop&w=300&q=80`
  };
});

// ========================================================
// 4. CART TRUST & SECURITY SIGNALS (30 Items)
// ========================================================
export const cartTrustSignals = [
  { icon: '🔒', title: '256-Bit SSL Encrypted', desc: 'Secure bank-level payment protection' },
  { icon: '🛡️', title: '30-Day Money-Back', desc: 'Hassle-free refund on all digital items' },
  { icon: '⚡', title: 'Instant Activation', desc: 'Immediate access to course videos and repositories' },
  { icon: '💳', title: 'PCI-DSS Compliant', desc: 'Encrypted credit card tokenization' },
  { icon: '📦', title: 'Tracked Courier Delivery', desc: 'Fast DHL & FedEx tracking on hardware kits' },
  { icon: '📜', title: 'Commercial License Rights', desc: 'Full authorization to use boilerplates in commercial code' },
  { icon: '💬', title: 'Priority Discord Role', desc: 'Automatic verified student role unlocked in community' },
  { icon: '🔄', title: 'Lifetime Content Updates', desc: 'Free access to newer course framework revisions' },
  { icon: '🧾', title: 'Automated VAT/GST Invoices', desc: 'Download compliant corporate expense invoices' },
  { icon: '🌍', title: 'Zero Foreign Transaction Fees', desc: 'Billed transparently in your chosen native currency' },
  ...Array.from({ length: 20 }, (_, idx) => ({
    icon: ['🛡️', '⚡', '🔒', '🔑', '🎯'][idx % 5],
    title: `Student Buyer Protection Level ${idx + 1}`,
    desc: 'Guaranteed authenticated repository source and verified certificate generation.'
  }))
];

// ========================================================
// 5. SHIPPING & CHECKOUT FAQS (50 Items)
// ========================================================
const cartFaqQuestions = [
  'How soon do I receive course access after finishing payment?',
  'How can I apply a discount or promotional voucher code?',
  'What payment methods and international cards do you accept?',
  'What should I do if my payment fails or gets declined by my bank?',
  'Can I download an invoice with my company VAT/GST information?',
  'What is the return policy for physical developer merchandise?',
  'Are taxes calculated based on my geographic billing address?',
  'Can I gift this cart purchase directly to another colleague or student?',
  'What happens if I already own one of the courses inside a bundle?',
  'Does purchasing a course include full access to the GitHub repo?'
];

export const cartCheckoutFaqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${cartFaqQuestions[idx % 10]} ${idx >= 10 ? `[FAQ Topic #${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Digital course access, GitHub invitations, and license keys are delivered immediately upon checkout. Physical hardware orders ship within 24 hours with tracked courier delivery.',
  category: idx % 2 === 0 ? 'Billing & Vouchers' : 'Fulfillment & Licensing'
}));

// ========================================================
// 6. SUPPORTED PAYMENT METHODS (30 Items)
// ========================================================
export const supportedPaymentMethods = [
  { id: 1, name: 'Visa International', category: 'Credit/Debit Card', icon: '💳' },
  { id: 2, name: 'MasterCard World', category: 'Credit/Debit Card', icon: '💳' },
  { id: 3, name: 'American Express', category: 'Credit/Debit Card', icon: '💳' },
  { id: 4, name: 'PayPal Express Checkout', category: 'Digital Wallet', icon: '🅿️' },
  { id: 5, name: 'Apple Pay (Biometric)', category: 'Mobile Wallet', icon: '🍎' },
  { id: 6, name: 'Google Pay', category: 'Mobile Wallet', icon: '🌐' },
  { id: 7, name: 'Stripe One-Click Link', category: 'Instant Checkout', icon: '⚡' },
  { id: 8, name: 'UnionPay', category: 'Credit/Debit Card', icon: '💳' },
  { id: 9, name: 'Discover Financial', category: 'Credit/Debit Card', icon: '💳' },
  { id: 10, name: 'JCB International', category: 'Credit/Debit Card', icon: '💳' },
  ...Array.from({ length: 20 }, (_, idx) => ({
    id: idx + 11,
    name: `Regional Payment Gateway #${idx + 1}`,
    category: 'Localized Banking & SEPA',
    icon: '🏦'
  }))
];