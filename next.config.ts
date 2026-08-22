import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect map: FoodStory old URLs → Wongnai POS new URLs
  async redirects() {
    return [
      // Old FoodStory routes
      { source: "/restaurant-pos", destination: "/solutions/full-service", permanent: true },
      { source: "/qsr-pos", destination: "/solutions/qsr", permanent: true },
      { source: "/cafe-pos", destination: "/solutions/cafe", permanent: true },
      { source: "/buffet-pos", destination: "/solutions/buffet", permanent: true },
      { source: "/food-truck-pos", destination: "/solutions/food-truck", permanent: true },
      { source: "/bakery-pos", destination: "/solutions/bakery", permanent: true },
      { source: "/bar-pos", destination: "/solutions/bar", permanent: true },

      // Old feature routes
      { source: "/table-management", destination: "/features/table-management", permanent: true },
      { source: "/emenu", destination: "/features/menu", permanent: true },
      { source: "/e-menu", destination: "/features/menu", permanent: true },
      { source: "/mobile-order", destination: "/features/mobile-order", permanent: true },
      { source: "/crm", destination: "/features/crm", permanent: true },
      { source: "/inventory", destination: "/features/inventory", permanent: true },
      { source: "/report", destination: "/features/report", permanent: true },
      { source: "/queue", destination: "/features/queue", permanent: true },
      { source: "/reservation", destination: "/features/reservation", permanent: true },
      { source: "/promotion", destination: "/features/promotion", permanent: true },
      { source: "/integration", destination: "/features/integration", permanent: true },
      { source: "/multi-branch", destination: "/features/multi-branch", permanent: true },

      // Old general routes
      { source: "/foodstory-pos", destination: "/", permanent: true },
      { source: "/blog", destination: "/articles", permanent: true },
      { source: "/blog/:slug", destination: "/articles/:slug", permanent: true },
      { source: "/support", destination: "/help", permanent: true },
      { source: "/faq", destination: "/help#faq", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/get-started", destination: "/contact", permanent: true },
      { source: "/free-trial", destination: "/contact", permanent: true },
      { source: "/demo", destination: "/get-quote", permanent: true },
      { source: "/download", destination: "/hardware", permanent: true },
      { source: "/plan", destination: "/pricing", permanent: true },
      { source: "/plans", destination: "/pricing", permanent: true },
      { source: "/stories", destination: "/customer-stories", permanent: true },
      { source: "/case-studies", destination: "/customer-stories", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/legal/terms", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
