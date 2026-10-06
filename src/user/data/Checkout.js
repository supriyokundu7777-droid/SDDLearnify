// 1. Checkout Order Items Summary
export const checkoutOrderItems = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp (React 19 & Next.js 15)',
    type: 'Digital Course',
    price: 49.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80',
    instructor: 'Alex Morrison',
    badge: 'Lifetime Access'
  },
  {
    id: 2,
    title: 'Full-Stack Architecture Patterns & Systems Design Handbook',
    type: 'Digital E-Book (PDF + ePub)',
    price: 29.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80',
    instructor: 'Learnify Faculty',
    badge: 'Instant Download'
  },
  {
    id: 3,
    title: 'ESP32 IoT & Robotics Starter Development Kit',
    type: 'Physical Hardware Box',
    price: 64.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
    instructor: 'Hardware Lab',
    badge: 'Tracked Courier'
  }
];

// 2. Supported Countries
export const checkoutCountries = [
  'United States',
  'United Kingdom',
  'India',
  'Canada',
  'Germany',
  'Australia',
  'Bangladesh',
  'France',
  'Singapore',
  'Brazil'
];

// 3. Payment Methods
export const checkoutPaymentMethods = [
  {
    id: 'card',
    title: 'Credit / Debit Card',
    subtitle: 'Instant authorization via Stripe (Visa, Mastercard, Amex)',
    icon: '💳'
  },
  {
    id: 'paypal',
    title: 'PayPal Express',
    subtitle: 'Safe payment with your PayPal account or Pay Later',
    icon: '🅿️️'
  },
  {
    id: 'wallet',
    title: 'Apple Pay / Google Pay',
    subtitle: 'One-touch biometric checkout on mobile or browser',
    icon: '📱'
  }
];

// 4. Trust & Security Badges
export const checkoutTrustBadges = [
  { icon: '🔒', title: '256-Bit SSL Encrypted', desc: 'Bank-level secure socket layer protection' },
  { icon: '🛡️', title: '30-Day Money-Back Guarantee', desc: '100% risk-free purchase guarantee' },
  { icon: '⚡', title: 'Instant Activation', desc: 'Immediate GitHub repos & course access' }
];