"use client";
import { useState } from "react";

const points = [
  "ครบทุกฟีเจอร์ที่ร้านอาหารต้องการในระบบเดียว",
  "ใช้งานง่าย ไม่ต้องมีความรู้ด้านเทคนิค",
  "ทีมซัพพอร์ตพร้อมช่วยเหลือ 24/7 ทุกขั้นตอน",
];

export default function HomeCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    window.location.href = `/contact?email=${encodeURIComponent(email)}`;
  };

  return (
    <div>
      {/* CTA section */}
      <section className="relative overflow-hidden rounded-tl-[48px] rounded-tr-[48px]" style={{ minHeight: 480 }}>
        {/* Background image */}
        <img
          src="/pic/cover1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Left overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.05) 100%)" }}
        />
        {/* Bottom fade to dark */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #080D17 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="max-w-lg">
            <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-4">เริ่มต้นวันนี้</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-[1.2] mb-6">
              พร้อมเริ่มต้น{" "}
              <span className="relative inline-block">
                วันนี้
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path d="M3 9 Q25 2 50 7 Q75 12 97 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
              </span>
              {" "}ได้เลย
            </h2>

            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] bg-white outline-none focus:ring-2 focus:ring-white/40"
                />
                {error && (
                  <p className="text-white/70 text-xs mt-1.5 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    กรุณากรอกอีเมลให้ถูกต้อง
                  </p>
                )}
              </div>
              <button type="submit" className="btn-orange text-white font-bold text-sm px-6 py-3 rounded-xl whitespace-nowrap">
                เริ่มต้นใช้งาน
              </button>
            </form>
            <p className="text-white/40 text-xs mt-3">ทดลองใช้ฟรี 30 วัน · ไม่ต้องใช้บัตรเครดิต</p>
          </div>
        </div>
      </section>

      {/* Bridge to footer */}
      <div style={{ background: "#080D17", height: 1 }} />
    </div>
  );
}
