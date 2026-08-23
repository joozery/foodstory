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
  const [mobileVisible, setMobileVisible] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMobile() {
    setMobileOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setMobileVisible(true)));
  }

  function closeMobile() {
    setMobileVisible(false);
    closeTimer.current = setTimeout(() => {
      setMobileOpen(false);
      setMobileSection(null);
    }, 380);
  }

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

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
              onClick={() => { mobileOpen ? closeMobile() : openMobile(); setActiveMega(null); }}
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

      {/* ── MOBILE MENU OVERLAY ─────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            style={{ opacity: mobileVisible ? 1 : 0 }}
            onClick={closeMobile}
          />

          {/* Panel */}
          <div
            className="relative ml-auto w-full sm:w-[340px] bg-white h-full flex flex-col shadow-2xl transition-transform duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{ transform: mobileVisible ? "translateX(0)" : "translateX(100%)" }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
              <img src="/logo/WNFS_Logo.svg" alt="Wongnai FoodStory POS" className="h-6 w-auto" />
              <button
                onClick={closeMobile}
                className="w-8 h-8 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] flex items-center justify-center transition-colors"
                aria-label="ปิดเมนู"
              >
                <svg className="w-4 h-4 text-[#475569]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav items — scrollable */}
            <div className="flex-1 overflow-y-auto px-4 py-3">

              {/* Accordion: สินค้าและบริการ */}
              {[
                {
                  key: "solutions",
                  label: "สินค้าและบริการ",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
                  items: solutionsNav.flatMap((g) => g.items).map((i) => ({ label: i.name, href: `/solutions/${i.slug}` })),
                },
                {
                  key: "features",
                  label: "ประเภทร้าน",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
                  items: featuresNav.flatMap((g) => g.items).map((i) => ({ label: i.name, href: `/features/${i.slug}` })),
                },
              ].map((section, si) => {
                const isOpen = mobileSection === section.key;
                return (
                  <div
                    key={section.key}
                    className="transition-all duration-500"
                    style={{
                      opacity: mobileVisible ? 1 : 0,
                      transform: mobileVisible ? "translateY(0)" : "translateY(14px)",
                      transitionDelay: mobileVisible ? `${si * 60}ms` : "0ms",
                    }}
                  >
                    <button
                      onClick={() => setMobileSection(isOpen ? null : section.key)}
                      className="w-full flex items-center gap-3 px-3 py-3.5 rounded-xl transition-colors hover:bg-[#F8FAFC] group"
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#FF6231] text-white" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {section.icon}
                        </svg>
                      </span>
                      <span className={`flex-1 text-left text-sm font-semibold transition-colors ${isOpen ? "text-[#FF6231]" : "text-[#0F172A]"}`}>
                        {section.label}
                      </span>
                      <ChevronDown open={isOpen} />
                    </button>

                    <div
                      className="overflow-hidden"
                      style={{ maxHeight: isOpen ? `${section.items.length * 44}px` : "0", transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)" }}
                    >
                      <div className="ml-11 mb-2 space-y-0.5 border-l-2 border-[#FFE4D9] pl-3">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobile}
                            className="flex items-center gap-2 py-2 px-2 rounded-lg text-sm text-[#475569] hover:text-[#FF6231] hover:bg-[#FFF8F5] transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#FDBA9B] shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Simple links */}
              {[
                { href: "/hardware", label: "ฮาร์ดแวร์", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                { href: "/pricing", label: "ราคา", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /> },
                { href: "/articles", label: "คลังความรู้", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                { href: "/help", label: "ช่วยเหลือ", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /> },
              ].map((link, li) => (
                <div
                  key={link.href}
                  className="transition-all duration-500"
                  style={{
                    opacity: mobileVisible ? 1 : 0,
                    transform: mobileVisible ? "translateY(0)" : "translateY(14px)",
                    transitionDelay: mobileVisible ? `${(li + 2) * 60}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#64748B] shrink-0 group-hover:bg-[#FFF0EB] group-hover:text-[#FF6231] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {link.icon}
                      </svg>
                    </span>
                    <span className="flex-1">{link.label}</span>
                    <svg className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#FF6231] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className="px-4 py-4 border-t border-[#F1F5F9] space-y-2.5 transition-all duration-500"
              style={{
                opacity: mobileVisible ? 1 : 0,
                transform: mobileVisible ? "translateY(0)" : "translateY(10px)",
                transitionDelay: mobileVisible ? "360ms" : "0ms",
              }}
            >
              <a href="#" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E2E8F0] text-sm font-semibold text-[#334155] hover:bg-[#F8FAFC] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                เข้าสู่ระบบ
              </a>
              <Link href="/contact" onClick={closeMobile} className="flex items-center justify-center gap-2 py-3 rounded-xl btn-orange text-sm font-semibold text-white shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ขอราคา / ทดลองใช้ฟรี
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
