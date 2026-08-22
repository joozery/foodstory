"use client";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    label: "จัดการออเดอร์อัตโนมัติ",
    heading: "จัดการออเดอร์",
    headingSub: "ไม่มีสะดุด",
    desc: "รับออเดอร์หน้าร้าน เดลิเวอรี และ QR Order เข้า POS ระบบเดียวอัตโนมัติ ไม่ตกหล่น",
    image: "/2pic/POS_feature1.webp",
  },
  {
    label: "รายงานยอดขาย Real-time",
    heading: "รู้ยอดขาย",
    headingSub: "แบบ Real-time",
    desc: "ดูรายได้ เมนูขายดี และกำไรจากทุกสาขาในหน้าจอเดียว ไม่ต้องรอสิ้นวัน",
    image: "/2pic/WNFS_feature2.webp",
  },
  {
    label: "รับชำระครบทุกช่องทาง",
    heading: "ชำระเงิน",
    headingSub: "ครบทุกช่องทาง",
    desc: "บัตรเดบิต บัตรเครดิต พร้อมเพย์ และ e-Wallet ในเครื่องเดียว เชื่อมยอดกับ POS ทันที",
    image: "/2pic/WNFS_feature3.webp",
  },
  {
    label: "บริหารสต๊อกวัตถุดิบ",
    heading: "ควบคุมสต๊อก",
    headingSub: "แม่นยำทุกชิ้น",
    desc: "ตัดสต๊อกอัตโนมัติทุกออเดอร์ แจ้งเตือนเมื่อวัตถุดิบใกล้หมด ลด Food Waste ได้จริง",
    image: "/2pic/WNFS_feature4.webp",
  },
  {
    label: "QR Order สแกนสั่งอาหาร",
    heading: "QR Order",
    headingSub: "สะดวก ไร้รอยต่อ",
    desc: "ลูกค้าสแกน QR สั่งอาหารเองได้ที่โต๊ะ ออเดอร์ส่งตรงครัวทันที ลดภาระพนักงาน",
    image: "/2pic/WNFS_feature6.webp",
  },
  {
    label: "เชื่อมต่อ LINE MAN เดลิเวอรี",
    heading: "เดลิเวอรี",
    headingSub: "เชื่อมทุก Platform",
    desc: "รับออเดอร์ Grab, LINE MAN เข้า POS โดยตรง ไม่ต้องรับแยกหลายจอ ลดความผิดพลาด",
    image: "/2pic/WNFS_feature7.webp",
  },
];

const SCROLL_PER_FEATURE = 280;

function FeatureBlock({ activeIdx, setActiveIdx }: { activeIdx: number; setActiveIdx: (i: number) => void }) {
  const active = features[activeIdx];
  return (
    <div className="rounded-2xl overflow-hidden border border-[#FFD5C2] grid grid-cols-1 lg:grid-cols-2"
      style={{ background: "linear-gradient(135deg, #FFF3EE 0%, #ffffff 60%)" }}>

      {/* Left */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
        <div>
          <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">Why Wongnai POS</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] leading-snug mb-2">
            ออกแบบมาเพื่อ<br />
            <span className="text-[#94A3B8]">ทุกความต้องการของร้านอาหาร</span>
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed">
            ระบบครบวงจรที่ช่วยให้เจ้าของร้านจัดการทุกอย่างได้ง่ายขึ้น
          </p>
        </div>

        <div className="space-y-1">
          {features.map((f, i) => {
            const isActive = i === activeIdx;
            return (
              <button key={i} onClick={() => setActiveIdx(i)} className="w-full text-left">
                <div
                  className="flex items-center justify-between px-3 sm:px-4 py-3 rounded-xl transition-all duration-300"
                  style={{
                    background: isActive ? "#fff" : "transparent",
                    boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                    borderLeft: isActive ? "3px solid #FF6231" : "3px solid transparent",
                  }}
                >
                  <span className="text-sm font-medium transition-colors duration-300"
                    style={{ color: isActive ? "#FF6231" : "#64748B" }}>
                    {f.label}
                  </span>
                  {isActive && (
                    <svg className="w-4 h-4 text-[#FF6231] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-4 border-t border-[#E2E8F0]">
          <div key={activeIdx} className="cardswap-animate">
            <p className="text-xs text-[#94A3B8] mb-1 uppercase tracking-widest font-semibold">
              {active.heading} · {active.headingSub}
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">{active.desc}</p>
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative h-56 sm:h-72 lg:h-auto bg-white flex items-center justify-center overflow-hidden">
        <img
          key={activeIdx}
          src={active.image}
          alt={active.label}
          className="w-full h-full object-contain cardswap-animate"
        />
      </div>
    </div>
  );
}

export default function HomeCardSwap() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const { top } = wrapperRef.current.getBoundingClientRect();
      const scrolled = -top;
      const idx = Math.max(0, Math.min(features.length - 1, Math.floor(scrolled / SCROLL_PER_FEATURE)));
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  /* Mobile: normal section */
  if (!isDesktop) {
    return (
      <section className="py-10 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FeatureBlock activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
        </div>
      </section>
    );
  }

  /* Desktop: scroll-driven sticky */
  return (
    <div ref={wrapperRef} className="bg-white"
      style={{ height: `calc(100vh + ${features.length * SCROLL_PER_FEATURE}px)` }}>
      <div className="sticky top-0 py-12 lg:py-16" style={{ height: "100vh" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <FeatureBlock activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
        </div>
      </div>
    </div>
  );
}
