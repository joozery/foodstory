"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const features = [
  {
    title: "จัดการออเดอร์ง่าย",
    desc: "ทั้งหน้าร้าน และออนไลน์ พร้อมระบบจัดการโต๊ะตามผังโต๊ะเสมือนจริง ช่วยให้บริการลูกค้าได้ไม่สะดุด",
    image: "/pic/01.png",
    accent: "#FF6231",
  },
  {
    title: "รับชำระง่าย ลูกค้าจ่ายสะดวก",
    desc: "รองรับทุกช่องทางการชำระเงินผ่านเครื่อง EDC ที่เชื่อมต่อกับระบบ POS ช่วยเพิ่มยอดขาย และขยายฐานลูกค้า",
    image: "/pic/02.png",
    accent: "#3B82F6",
  },
  {
    title: "บริหารสต๊อกแม่น รู้ต้นทุนชัด",
    desc: "เชื่อมสูตรอาหาร (BOM) พร้อมตัดสต๊อกอัตโนมัติ ช่วยให้รู้ต้นทุนจริง ควบคุมวัตถุดิบได้แม่นยำ ลดปัญหา Food Waste",
    image: "/pic/03.png",
    accent: "#10B981",
  },
  {
    title: "บริหาร และตรวจสอบพนักงานได้",
    desc: "จัดการข้อมูลพนักงาน พร้อมระบบลงเวลา เพิ่มความโปร่งใสและลดปัญหาการทำงานของพนักงานในระบบ POS เดียว",
    image: "/pic/04.png",
    accent: "#8B5CF6",
  },
  {
    title: "รู้ยอดขาย และข้อมูลเชิงลึก",
    desc: "เช็กยอดขายแบบเรียลไทม์ ช่วยวางแผนธุรกิจ เพิ่มยอดขาย และขยายกำไรอย่างมีประสิทธิภาพ",
    image: "/pic/05.png",
    accent: "#06B6D4",
  },
  {
    title: "มอบประสบการณ์ที่ดีกว่าให้ลูกค้า",
    desc: "ด้วยระบบสแกนสั่งอาหารผ่าน QR Code ที่เชื่อมต่อกับระบบ POS อย่างไร้รอยต่อ",
    image: "/pic/06.png",
    accent: "#FF6231",
  },
];

export default function HomeFeatures() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">Product & Features</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] leading-snug">
              ระบบ POS ร้านอาหาร
              <br />
              <span className="text-[#64748B]">ที่รวมทุกฟีเจอร์ไว้ในที่เดียว</span>
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-[#E2E8F0] hover:border-[#FF6231] hover:text-[#FF6231] flex items-center justify-center transition-colors text-[#64748B]"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-[#E2E8F0] hover:border-[#FF6231] hover:text-[#FF6231] flex items-center justify-center transition-colors text-[#64748B]"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex-none w-[80%] sm:w-[46%] lg:w-1/4 pr-4"
              >
              <div className="relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end group w-full">
                <div
                  className="absolute inset-0 bg-[#1A2535]"
                  style={{
                    backgroundImage: `url('${f.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative z-10 p-6">
                  <div className="w-1 h-10 rounded-full mb-4 opacity-80" style={{ background: f.accent }} />
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 h-2 bg-[#FF6231]"
                  : "w-2 h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-orange px-6 py-3 rounded-xl"
          >
            ดูฟีเจอร์ทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
