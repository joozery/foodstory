"use client";
import Link from "next/link";
import { BrandIcon } from "@/components/ui/Icon";
import SplitText from "@/components/ui/SplitText";

const partners: { name: string; brand?: string }[] = [
  { name: "Grab", brand: "grab" },
  { name: "LINE MAN", brand: "line" },
  { name: "PromptPay" },
  { name: "KBank" },
  { name: "SCB" },
  { name: "Shopee Food", brand: "shopee" },
];

export default function HomeHero() {

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── YouTube Video Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source src="/videohero/videoplayback.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              <SplitText
                text="ระบบจัดการ ร้านอาหาร"
                delay={40}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
              />
              <br />
              <SplitText
                text="ที่ครบที่สุด"
                delay={40}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
              />
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Wongnai POS รวมทุกอย่างที่ร้านอาหารต้องการ — POS, เมนู, โต๊ะ, ออเดอร์, ชำระเงิน, สต็อก และรายงาน ในระบบเดียวที่ใช้งานง่าย
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-orange-900/40"
              >
                ทดลองใช้ฟรี 30 วัน
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-2.5 rounded-lg text-sm border border-white/25 hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                ขอราคา
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Partners strip ── */}
      <div className="relative z-10 border-t border-white/10 bg-[#080D17]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-center text-xs text-white/30 mb-5 uppercase tracking-widest font-semibold">
            เชื่อมต่อกับแพลตฟอร์มที่คุณใช้อยู่แล้ว
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-60">
            {partners.map((p) =>
              p.brand ? (
                <div key={p.name} className="h-7 flex items-center justify-center">
                  <BrandIcon
                    brand={p.brand}
                    variant="default"
                    className="h-full w-auto object-contain filter brightness-0 invert"
                    alt={p.name}
                  />
                </div>
              ) : (
                <div key={p.name} className="h-7 flex items-center justify-center">
                  <span className="text-sm font-bold text-white/70 leading-none">{p.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
