import Link from "next/link";
import type { ReactElement } from "react";

const resources = [
  {
    category: "บทความ",
    title: "5 วิธีเพิ่มยอดขายร้านอาหารด้วย QR Order",
    desc: "เทคนิคง่ายๆ ที่เจ้าของร้านอาหารนำไปใช้ได้ทันที เพื่อเพิ่มยอดขายและลดเวลาให้บริการ",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tag: "เพิ่มยอดขาย",
    readTime: "5 นาที",
    href: "/articles",
    accent: "#FF6231",
    featured: true,
  },
  {
    category: "คู่มือ",
    title: "เริ่มต้นใช้งาน Wongnai POS ภายใน 1 วัน",
    desc: "ขั้นตอนการตั้งค่าระบบ POS สำหรับมือใหม่ ตั้งแต่การเพิ่มเมนู จัดโต๊ะ จนถึงรับชำระเงิน",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tag: "สำหรับมือใหม่",
    readTime: "8 นาที",
    href: "/help",
    accent: "#FF6231",
    featured: false,
  },
  {
    category: "วิดีโอ",
    title: "วิธีดูรายงานยอดขายและวิเคราะห์ข้อมูลธุรกิจ",
    desc: "เรียนรู้วิธีใช้ Dashboard วิเคราะห์เมนูขายดี ต้นทุน และกำไรแบบเรียลไทม์",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "รายงาน",
    readTime: "12 นาที",
    href: "/help#tutorials",
    accent: "#FF6231",
    featured: false,
  },
  {
    category: "FAQ",
    title: "คำถามที่พบบ่อยเกี่ยวกับระบบ POS และการชำระเงิน",
    desc: "รวมคำถามยอดฮิตจากเจ้าของร้าน ตั้งแต่การตั้งค่า การชำระเงิน ไปจนถึงการ Integrate",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    tag: "ทั่วไป",
    readTime: "3 นาที",
    href: "/help#faq",
    accent: "#FF6231",
    featured: false,
  },
  {
    category: "เคล็ดลับ",
    title: "บริหารสต็อกวัตถุดิบให้แม่น ลด Food Waste ได้จริง",
    desc: "วิธีใช้ระบบ BOM ควบคู่กับการตัดสต็อกอัตโนมัติ เพื่อควบคุมต้นทุนและลดของเสียในครัว",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    tag: "สต็อก & ต้นทุน",
    readTime: "6 นาที",
    href: "/articles",
    accent: "#FF6231",
    featured: false,
  },
];

const categoryIcon: Record<string, ReactElement> = {
  บทความ: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  คู่มือ: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  วิดีโอ: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  FAQ: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  เคล็ดลับ: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function HomeKnowledge() {
  const [featured, ...rest] = resources;

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">Resources</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">คลังความรู้</h2>
            <p className="text-[#64748B] mt-2 text-base">บทความ คู่มือ และวิดีโอสำหรับเจ้าของร้านอาหาร</p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-orange px-5 py-2.5 rounded-xl shrink-0"
          >
            ดูทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:grid-rows-2">

          {/* Featured card */}
          <Link
            href={featured.href}
            className="relative overflow-hidden rounded-2xl lg:col-span-1 lg:row-span-2 h-64 sm:h-72 lg:h-auto"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div
              className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm"
              style={{ background: featured.accent + "CC" }}
            >
              {categoryIcon[featured.category]}
              {featured.category}
            </div>
            <div className="absolute inset-x-0 bottom-0 pb-6 px-6">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 inline-block"
                style={{ background: featured.accent + "33", color: featured.accent }}
              >
                {featured.tag}
              </span>
              <h3 className="text-lg font-bold text-white leading-snug mb-2">{featured.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{featured.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  อ่าน {featured.readTime}
                </span>
                <span className="text-xs font-bold flex items-center gap-1" style={{ color: featured.accent }}>
                  อ่านต่อ
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Small cards */}
          {rest.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="relative overflow-hidden rounded-2xl h-48 sm:h-56"
            >
              <img
                src={r.image}
                alt={r.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div
                className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                style={{ background: r.accent + "CC" }}
              >
                {categoryIcon[r.category]}
                {r.category}
              </div>
              <div className="absolute inset-x-0 bottom-0 pb-4 px-4">
                <h3 className="text-sm font-bold text-white leading-snug mb-2 line-clamp-2">{r.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {r.readTime}
                  </span>
                  <span className="text-xs font-bold flex items-center gap-0.5" style={{ color: r.accent }}>
                    อ่านต่อ
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
