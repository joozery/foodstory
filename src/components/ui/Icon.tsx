/**
 * Inline SVG icon library for Wongnai POS UI icons.
 * Brand icons (Grab, LINE, etc.) use thesvg.org CDN.
 */

interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

const base = ({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) =>
  ({ className, strokeWidth } as const);

/* ── Restaurant Type Icons ─────────────────────────────── */

export function IconForkKnife({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 3v7.5a3 3 0 006 0V3M9 10.5V21M15 3v18M6 3v4a3 3 0 003 3h0" />
    </svg>
  );
}

export function IconCoffee({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 17H5a2 2 0 01-2-2V9h14v6a2 2 0 01-2 2h-1M9 17h6M9 17v4m6-4v4M6 9V4m12 5V4M9 21h6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17 9h2a2 2 0 012 2v1a2 2 0 01-2 2h-2" />
    </svg>
  );
}

export function IconBowl({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 12h18M5.5 12C5.5 7.806 8.806 4.5 13 4.5S20.5 7.806 20.5 12H5.5zM3 12a9 9 0 0018 0" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 12l2-3 2 3M15 7.5V4" />
    </svg>
  );
}

export function IconDrink({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 3h6l1 8H8L9 3zM8 11l-2 10h12L16 11M10 3V2M14 3V2M11 7h2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 11v10" />
    </svg>
  );
}

export function IconBread({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5 11.5C3.343 11.5 2 10.157 2 8.5 2 6.67 3.56 5.5 5.5 5.5c.17 0 .34.01.5.03A6 6 0 0117.5 6H18a4 4 0 014 4v.5a1 1 0 01-1 1H5zM5 11.5V20a1 1 0 001 1h12a1 1 0 001-1v-8.5" />
    </svg>
  );
}

export function IconBuffet({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 17h18M6 17V9a6 6 0 0112 0v8M12 3v2M4 17v3h16v-3" />
    </svg>
  );
}

export function IconWineGlass({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8 3h8l-4 9-4-9zM12 12v8M8 20h8" />
    </svg>
  );
}

export function IconTruck({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M13 16H3V6h10v10zM13 9h4l3 4v3h-7V9z" />
    </svg>
  );
}

export function IconBuilding({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

export function IconChopsticks({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M7 3l2 18M11 3l-2 18M13 8h8M13 12h6" />
    </svg>
  );
}

/* ── Feature Icons ─────────────────────────────────────── */

export function IconPOS({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function IconTable({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 8h18M3 8v2m0-2V6a1 1 0 011-1h16a1 1 0 011 1v2M3 10H2v8h2M21 10h1v8h-2M6 18v2M18 18v2M6 10v8M18 10v8" />
    </svg>
  );
}

export function IconMenu({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

export function IconMobile({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

export function IconOrderPay({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

export function IconUsers({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconCalendar({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

export function IconQueue({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
    </svg>
  );
}

export function IconTag({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}

export function IconBox({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

export function IconChart({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

export function IconBranch({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

export function IconPlug({ className = "w-6 h-6", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

/* ── UI / General Icons ────────────────────────────────── */

export function IconArrowRight({ className = "w-5 h-5", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function IconChevronRight({ className = "w-4 h-4", strokeWidth = 2.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IconCheck({ className = "w-4 h-4", strokeWidth = 2.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconX({ className = "w-4 h-4", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function IconSearch({ className = "w-5 h-5", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export function IconPhone({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export function IconMail({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function IconLocation({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconStar({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function IconShield({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export function IconHeadset({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

export function IconQR({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12v.01M12 4h.01M4 4h4v4H4V4zm12 0h4v4h-4V4zM4 16h4v4H4v-4z" />
    </svg>
  );
}

export function IconTrending({ className = "w-5 h-5", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

export function IconPlay({ className = "w-5 h-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ── Brand icon via thesvg.org CDN ─────────────────────── */
interface BrandIconProps {
  brand: string;
  variant?: "default" | "mono" | "light" | "dark" | "wordmark";
  className?: string;
  alt?: string;
}

export function BrandIcon({ brand, variant = "default", className = "h-6 w-auto", alt }: BrandIconProps) {
  return (
    <img
      src={`https://thesvg.org/icons/${brand}/${variant}.svg`}
      alt={alt ?? brand}
      className={className}
      loading="lazy"
    />
  );
}
