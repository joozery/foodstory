"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { productsLeftPanel, productsColumns, productsPanels, solutionsStartCards, solutionsTypeList, solutionsOtherBiz, hardwareNav, solutionsNav, featuresNav, resourcesNav } from "@/lib/data/navigation";
import { NavIcon } from "@/components/ui/NavIcon";
import { IconPhone, IconPOS } from "@/components/ui/Icon";

type MegaMenuKey = "solutions" | "features" | "hardware" | "resources" | null;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 text-current transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function WongnaiLogo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <img
        src="/logo/WNFS_Logo.svg"
        alt="Wongnai FoodStory POS"
        className="h-7 w-auto"
      />
    </Link>
  );
}

export default function Navbar() {
  const [activeMega, setActiveMega] = useState<MegaMenuKey>(null);
  const [activeProduct, setActiveProduct] = useState<string>("pos");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openNow(key: MegaMenuKey) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveMega(key);
  }

  function scheduleOpen(key: MegaMenuKey) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveMega(key), 120);
  }

  function scheduleClose() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveMega(null), 150);
  }

  function cancelClose() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <a
        href="/pricing"
        className="text-xs py-2 hidden lg:block hover:opacity-90 overflow-hidden transition-all duration-300"
        style={{
          background: "#000000",
          maxHeight: scrolled ? "0px" : "40px",
          opacity: scrolled ? 0 : 1,
          paddingTop: scrolled ? "0" : undefined,
          paddingBottom: scrolled ? "0" : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2">
          <span className="text-white font-semibold tracking-wide">คลิก! เพื่อดูโปรโมชั่นพิเศษ! ประจำเดือน</span>
          <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>

      {/* Main nav */}
      <nav
        ref={navRef}
        onKeyDown={(e) => e.key === "Escape" && setActiveMega(null)}
        className="bg-white border-b border-[#E2E8F0]"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <WongnaiLogo />

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {/* สินค้าและบริการ */}
              <button
                onMouseEnter={() => scheduleOpen("solutions")}
                onMouseLeave={scheduleClose}
                onFocus={() => openNow("solutions")}
                onKeyDown={(e) => e.key === "Escape" && setActiveMega(null)}
                aria-expanded={activeMega === "solutions"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeMega === "solutions" ? "bg-[#FFF0EB] text-[#FF6231]" : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]"}`}
              >
                สินค้าและบริการ
              </button>

              {/* ประเภทร้าน */}
              <button
                onMouseEnter={() => scheduleOpen("features")}
                onMouseLeave={scheduleClose}
                onFocus={() => openNow("features")}
                onKeyDown={(e) => e.key === "Escape" && setActiveMega(null)}
                aria-expanded={activeMega === "features"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeMega === "features" ? "bg-[#FFF0EB] text-[#FF6231]" : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]"}`}
              >
                ประเภทร้าน
              </button>

              {/* ฮาร์ดแวร์ */}
              <button
                onMouseEnter={() => scheduleOpen("hardware")}
                onMouseLeave={scheduleClose}
                onFocus={() => openNow("hardware")}
                onKeyDown={(e) => e.key === "Escape" && setActiveMega(null)}
                aria-expanded={activeMega === "hardware"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeMega === "hardware" ? "bg-[#FFF0EB] text-[#FF6231]" : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]"}`}
              >
                ฮาร์ดแวร์
              </button>
              <Link href="/pricing" onMouseEnter={scheduleClose} className="px-3 py-2 rounded-lg text-sm font-medium text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors">
                ราคา
              </Link>

              {/* คลังความรู้ */}
              <button
                onMouseEnter={() => scheduleOpen("resources")}
                onMouseLeave={scheduleClose}
                onFocus={() => openNow("resources")}
                onKeyDown={(e) => e.key === "Escape" && setActiveMega(null)}
                aria-expanded={activeMega === "resources"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeMega === "resources" ? "bg-[#FFF0EB] text-[#FF6231]" : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]"}`}
              >
                คลังความรู้
              </button>

              <Link href="/help" onMouseEnter={scheduleClose} className="px-3 py-2 rounded-lg text-sm font-medium text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors">
                ช่วยเหลือ
              </Link>
            </div>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#"
                className="text-sm font-medium text-[#334155] px-3 py-2 rounded-lg hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors"
              >
                เข้าสู่ระบบ
              </a>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white px-4 py-2 rounded-xl btn-orange transition-colors shadow-sm"
              >
                ขอราคา / ทดลองใช้ฟรี
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#475569] hover:bg-[#F1F5F9]"
              onClick={() => { setMobileOpen(!mobileOpen); setActiveMega(null); }}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* ── MEGA MENU: สินค้าและบริการ ─────────────────────── */}
        {activeMega === "solutions" && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="absolute left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-xl mega-menu-enter">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex gap-0">
                {/* Left: product cards */}
                <div className="w-56 shrink-0 border-r border-[#F1F5F9] pr-6 mr-8">
                  <div className="space-y-0.5">
                    {productsLeftPanel.map((product) => (
                      <Link
                        key={product.key}
                        href={product.href}
                        onMouseEnter={() => setActiveProduct(product.key)}
                        onClick={() => setActiveMega(null)}
                        className={`flex flex-col gap-0.5 px-3 py-3 rounded-xl transition-colors group ${activeProduct === product.key ? "bg-[#FFF0EB]" : "hover:bg-[#FFF7F5]"}`}
                      >
                        <span className={`text-sm font-bold transition-colors ${activeProduct === product.key ? "text-[#FF6231]" : "text-[#0F172A] group-hover:text-[#FF6231]"}`}>
                          {product.name}
                        </span>
                        <span className="text-xs text-[#94A3B8] leading-relaxed">{product.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/products"
                    onClick={() => setActiveMega(null)}
                    className="block mt-4 px-3 text-xs font-semibold text-[#FF6231] hover:underline"
                  >
                    ดูสินค้าทั้งหมด →
                  </Link>
                </div>

                {/* Right: dynamic columns based on active product */}
                <div className="flex-1 grid gap-x-10" style={{ gridTemplateColumns: `repeat(${(productsPanels[activeProduct] ?? productsColumns).length}, minmax(0,1fr))` }}>
                  {(productsPanels[activeProduct] ?? productsColumns).map((col) => (
                    <div key={col.group}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider leading-snug">
                          {col.group}
                        </span>
                        {col.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FF6231] text-white shrink-0">
                            {col.badge}
                          </span>
                        )}
                      </div>
                      {col.display === "card" ? (
                        <div className="space-y-2">
                          {col.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMega(null)}
                              className="flex flex-col gap-1 p-3.5 rounded-xl border border-[#E2E8F0] hover:border-[#FF6231] hover:shadow-sm bg-white transition-all group"
                            >
                              <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6231] transition-colors leading-snug">
                                {item.name}
                              </span>
                              {item.desc && (
                                <span className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMega(null)}
                              className={`flex gap-2 group transition-colors hover:text-[#FF6231] ${item.sub ? "ml-4" : ""}`}
                            >
                              <span className={`shrink-0 mt-1.5 transition-colors group-hover:bg-[#FF6231] ${item.sub ? "w-1 h-1 rounded-full bg-[#CBD5E1]" : "w-1.5 h-1.5 rounded-sm bg-[#E2E8F0]"}`} />
                              <span>
                                <span className={`block text-sm leading-snug transition-colors group-hover:text-[#FF6231] ${item.sub ? "text-[#64748B]" : "text-[#334155] font-medium"}`}>
                                  {item.name}
                                </span>
                                {item.desc && (
                                  <span className="block text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{item.desc}</span>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                      {col.note && (
                        <p className="mt-5 text-[11px] text-[#94A3B8] leading-relaxed border-t border-[#F1F5F9] pt-4">
                          {col.note}{" "}
                          <Link href="/hardware" onClick={() => setActiveMega(null)} className="text-[#FF6231] font-semibold hover:underline">
                            ฮาร์ดแวร์ →
                          </Link>
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA card — POS only */}
                {activeProduct === "pos" && (
                  <div className="w-48 shrink-0 ml-8 self-start">
                    <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0]">
                      <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2">ร้านเชน 5+ สาขา</div>
                      <p className="text-sm font-medium text-[#0F172A] leading-relaxed mb-4">
                        ทีมงานออกแบบระบบให้ตามโครงสร้างสาขา
                      </p>
                      <Link
                        href="/get-quote"
                        onClick={() => setActiveMega(null)}
                        className="text-xs font-semibold text-[#FF6231] hover:underline"
                      >
                        นัดคุยกับทีมขาย →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── MEGA MENU: ประเภทร้าน ─────────────────────── */}
        {activeMega === "features" && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="absolute left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-xl mega-menu-enter">
            <div className="max-w-7xl mx-auto px-6 pt-7 pb-0">
              <div className="flex gap-10">

                {/* Left: เริ่มต้นที่นี่ */}
                <div className="w-80 shrink-0 border-r border-[#F1F5F9] pr-8">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">เริ่มต้นที่นี่</p>
                  <div className="space-y-3">
                    {solutionsStartCards.map((card) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        onClick={() => setActiveMega(null)}
                        className="flex gap-4 p-3 rounded-xl hover:bg-[#FFF7F5] group transition-colors border border-transparent hover:border-[#FFE4D9]"
                      >
                        <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-[#F1F5F9]">
                          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <span className="inline-block text-[10px] font-bold text-[#FF6231] bg-[#FFF0EB] px-2 py-0.5 rounded-full mb-1.5">
                            {card.badge}
                          </span>
                          <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6231] transition-colors leading-snug">
                            {card.title}
                          </p>
                          <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{card.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Center: ตามประเภทร้าน */}
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">ตามประเภทร้าน</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                    {solutionsTypeList.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveMega(null)}
                        className="flex items-center gap-2 text-sm text-[#334155] hover:text-[#FF6231] transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] group-hover:bg-[#FF6231] shrink-0 transition-colors" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right: ร้านเชนและองค์กร */}
                <div className="w-52 shrink-0">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">ร้านเชนและองค์กร</p>
                  <div className="bg-[#FFF7F5] rounded-2xl p-5 border border-[#FFE4D9]">
                    <p className="text-sm font-bold text-[#0F172A] mb-2">Chain & Enterprise</p>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                      5+ สาขา — วางระบบรวมศูนย์ Master Catalog และ BI ให้ทั้งเครือ
                    </p>
                    <Link
                      href="/get-quote"
                      onClick={() => setActiveMega(null)}
                      className="block text-center text-xs font-bold text-white btn-orange px-4 py-2.5 rounded-xl"
                    >
                      นัดคุยกับทีมขาย
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom: ธุรกิจอื่นๆ */}
              <div className="grid border-t border-[#F1F5F9] mt-6" style={{ gridTemplateColumns: `1fr repeat(${solutionsOtherBiz.length}, 1fr)` }}>
                <div className="py-4 pr-6 border-r border-[#F1F5F9]">
                  <p className="text-xs font-bold text-[#334155]">ธุรกิจอื่นๆ</p>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5 leading-relaxed">แบรนด์ในเครือสำหรับธุรกิจ<br/>นอกกลุ่มร้านอาหาร</p>
                </div>
                {solutionsOtherBiz.map((biz) => (
                  <Link
                    key={biz.name}
                    href={biz.href}
                    onClick={() => setActiveMega(null)}
                    className="py-4 px-6 border-r border-[#F1F5F9] last:border-r-0 group hover:bg-[#FFF7F5] transition-colors"
                  >
                    <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6231] transition-colors">{biz.name}</p>
                    <p className="text-xs text-[#94A3B8] mt-0.5">{biz.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MEGA MENU: ฮาร์ดแวร์ ─────────────────────── */}
        {activeMega === "hardware" && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="absolute left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-xl mega-menu-enter">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex gap-10">

                {/* Wongnai POS */}
                <div className="w-[380px] shrink-0 border-r border-[#F1F5F9] pr-8">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">Wongnai POS</p>

                  {/* iPad */}
                  <Link
                    href={hardwareNav.pos.ipad.href}
                    onClick={() => setActiveMega(null)}
                    className="flex gap-3 p-2.5 rounded-xl border border-[#E2E8F0] hover:border-[#FF6231] hover:shadow-sm group transition-all mb-4 bg-white"
                  >
                    <div className="w-14 h-10 rounded-lg overflow-hidden shrink-0 bg-[#F1F5F9]">
                      <img src={hardwareNav.pos.ipad.image} alt={hardwareNav.pos.ipad.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6231] transition-colors">{hardwareNav.pos.ipad.name}</p>
                      <p className="text-xs text-[#94A3B8] mt-0.5">{hardwareNav.pos.ipad.desc}</p>
                    </div>
                  </Link>

                  {/* Android */}
                  <p className="text-sm font-bold text-[#0F172A] mb-3">{hardwareNav.pos.android.label}</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {hardwareNav.pos.android.items.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setActiveMega(null)} className="group">
                        <div className="w-full h-16 rounded-lg overflow-hidden bg-[#F1F5F9] mb-1.5 group-hover:ring-2 group-hover:ring-[#FF6231] transition-all">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[11px] text-[#64748B] group-hover:text-[#FF6231] transition-colors text-center leading-tight">{item.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Payment */}
                <div className="w-52 shrink-0 border-r border-[#F1F5F9] pr-8">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">Payment</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {hardwareNav.payment.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setActiveMega(null)} className="group">
                        <div className="w-full h-14 rounded-lg overflow-hidden bg-[#F1F5F9] mb-1.5 group-hover:ring-2 group-hover:ring-[#FF6231] transition-all">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-1 justify-center">
                          <span className="w-1.5 h-1.5 rounded-sm bg-[#FF6231] shrink-0" />
                          <p className="text-[11px] text-[#334155] group-hover:text-[#FF6231] transition-colors">{item.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed border-t border-[#F1F5F9] pt-3">
                    สินค้ากลุ่มนี้รับชำระเงิน ตัวเดียวกับใน{" "}
                    <Link href="/products/payment" onClick={() => setActiveMega(null)} className="text-[#FF6231] font-semibold hover:underline">
                      Payment Solution
                    </Link>
                  </p>
                </div>

                {/* Accessories */}
                <div className="w-40 shrink-0">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">Accessories</p>
                  <div className="space-y-2.5">
                    {hardwareNav.accessories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveMega(null)}
                        className="flex items-center gap-2 text-sm text-[#334155] hover:text-[#FF6231] transition-colors group"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#CBD5E1] group-hover:bg-[#FF6231] shrink-0 transition-colors" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MEGA MENU: คลังความรู้ ─────────────────────── */}
        {activeMega === "resources" && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="absolute left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-xl mega-menu-enter">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex gap-16">
                {/* เปรียบเทียบ POS */}
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">เปรียบเทียบ POS</p>
                  <div className="space-y-2.5">
                    {resourcesNav.compare.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveMega(null)}
                        className="flex items-start gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#E2E8F0] group-hover:bg-[#FF6231] shrink-0 mt-1.5 transition-colors" />
                        <span className="text-sm text-[#334155] group-hover:text-[#FF6231] transition-colors leading-snug">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* แหล่งความรู้ */}
                <div className="w-48 shrink-0 border-l border-[#F1F5F9] pl-16">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-4">แหล่งความรู้</p>
                  <div className="space-y-2.5">
                    {resourcesNav.knowledge.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveMega(null)}
                        className="flex items-center gap-2 text-sm text-[#334155] hover:text-[#FF6231] transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#E2E8F0] group-hover:bg-[#FF6231] shrink-0 transition-colors" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── MOBILE MENU ─────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-xl overflow-y-auto max-h-[80vh]">
          <div className="px-4 py-4 space-y-1">
            {/* สินค้าและบริการ */}
            <button
              onClick={() => setMobileSection(mobileSection === "solutions" ? null : "solutions")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
            >
              สินค้าและบริการ <ChevronDown open={mobileSection === "solutions"} />
            </button>
            {mobileSection === "solutions" && (
              <div className="ml-3 space-y-1 pb-2">
                {solutionsNav.flatMap((g) => g.items).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#475569] hover:text-[#FF6231] hover:bg-[#FFF0EB]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF6231] shrink-0" />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* ประเภทร้าน */}
            <button
              onClick={() => setMobileSection(mobileSection === "features" ? null : "features")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
            >
              ประเภทร้าน <ChevronDown open={mobileSection === "features"} />
            </button>
            {mobileSection === "features" && (
              <div className="ml-3 space-y-1 pb-2">
                {featuresNav.flatMap((g) => g.items).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/features/${item.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#475569] hover:text-[#FF6231] hover:bg-[#FFF0EB]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF6231] shrink-0" />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {[
              { href: "/hardware", label: "ฮาร์ดแวร์" },
              { href: "/pricing", label: "ราคา" },
              { href: "/articles", label: "คลังความรู้" },
              { href: "/help", label: "ช่วยเหลือ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
              <a href="#" className="block text-center text-sm font-medium text-[#334155] py-2.5 rounded-xl hover:bg-[#F8FAFC]">
                เข้าสู่ระบบ
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-center text-sm font-semibold text-white py-2.5 btn-orange rounded-xl">
                ขอราคา / ทดลองใช้ฟรี
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
