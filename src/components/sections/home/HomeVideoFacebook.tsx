"use client";
import useEmblaCarousel from "embla-carousel-react";

const reels = [
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1764869167844709%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F957757703936521%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1026208366567333%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1066456899050253%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1748581492837642%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1369650177938698%2F&show_text=false&width=267&t=0",
  },
];

function ReelCard({ src }: { src: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-black w-[200px] sm:w-[240px]">
      <div className="relative w-full" style={{ paddingBottom: "178.3%" }}>
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          title="Facebook Reel"
        />
      </div>
    </div>
  );
}

export default function HomeVideoFacebook() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">Facebook Reels</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">วิดีโอแนะนำ</h2>
            <p className="text-[#64748B] mt-2">ดูวิธีใช้งานและรีวิวจากเจ้าของร้านจริง</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-[#E2E8F0] hover:border-[#FF6231] hover:text-[#FF6231] flex items-center justify-center transition-colors text-[#64748B]"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
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
          <div className="flex gap-6 items-start py-4">
            {reels.map((r, i) => (
              <div key={i} className="flex-none">
                <ReelCard src={r.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
