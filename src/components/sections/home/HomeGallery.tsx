"use client";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AccordionGallery from "@/components/ui/AccordionGallery";

const items = [
  { video: "/videohero/videoplayback.mp4", label: "ร้านอาหาร Full Service" },
  { video: "/videohero/videoplayback.mp4", label: "คาเฟ่ & Specialty Coffee" },
  { video: "/videohero/videoplayback.mp4", label: "บุฟเฟต์ & All You Can Eat" },
  { video: "/videohero/videoplayback.mp4", label: "เชนร้านอาหาร" },
  { video: "/videohero/videoplayback.mp4", label: "Food Truck & Pop-up" },
  { video: "/videohero/videoplayback.mp4", label: "ร้านอาหารญี่ปุ่น & อาหารนานาชาติ" },
];

function MobileGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center", dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setSelectedIndex(idx);
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) v.play().catch(() => {});
      else { v.pause(); v.currentTime = 0; }
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="lg:hidden -mx-4 sm:-mx-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 px-6">
          {items.map((item, i) => (
            <div key={i} className="flex-none w-[78vw] sm:w-[60vw]">
              <div className="relative rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: "9/14" }}>
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={item.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted loop playsInline
                  autoPlay={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-base font-bold text-white leading-snug">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4 px-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === selectedIndex ? 20 : 6,
              height: 6,
              background: i === selectedIndex ? "#FF6231" : "#E2E8F0",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomeGallery() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #FFF7F3 50%, #FFE8DC 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              เหมาะกับทุกประเภทร้าน
            </h2>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-orange px-5 py-2.5 rounded-xl shrink-0"
          >
            ดูทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile: video carousel */}
        <MobileGallery />

        {/* Desktop: accordion */}
        <div className="hidden lg:block">
          <AccordionGallery
            items={items}
            defaultIndex={0}
            expandRatio={0.65}
            height={520}
            gap={8}
            radius={16}
            trigger="hover"
            accentColor="#FF6231"
            overlayColor="#080D17"
            grayscale
            showLabels
            showOverlay={false}
            style={{ "--ag-inactive-tint": "rgba(255,98,49,0.18)" } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
}
