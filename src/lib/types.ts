export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface Solution {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  heroImage?: string;
}

export interface Feature {
  slug: string;
  name: string;
  icon: string;
  category: "order" | "payment" | "customer" | "management" | "analytics" | "integration";
  tagline: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  notIncluded: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  restaurantType: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishedAt: string;
  coverImage?: string;
}
