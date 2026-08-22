import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/ui/FloatingChat";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Wongnai POS – ระบบจัดการร้านอาหารครบวงจร", template: "%s | Wongnai POS" },
  description: "Wongnai POS ระบบ POS สำหรับร้านอาหารทุกประเภท จัดการโต๊ะ เมนู ออเดอร์ ชำระเงิน รายงาน และสาขา ในระบบเดียว",
  keywords: ["POS", "ร้านอาหาร", "Wongnai", "ระบบจัดการร้าน", "ระบบ POS", "restaurant management"],
  authors: [{ name: "Wongnai" }],
  creator: "Wongnai",
  metadataBase: new URL("https://pos.wongnai.com"),
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Wongnai POS",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
