import Link from "next/link";
import AccordionGallery from "@/components/ui/AccordionGallery";

const items = [
  { video: "/videohero/videoplayback.mp4", label: "ร้านอาหาร Full Service", emoji: "🍽️" },
  { video: "/videohero/videoplayback.mp4", label: "คาเฟ่ & Specialty Coffee", emoji: "☕" },
  { video: "/videohero/videoplayback.mp4", label: "บุฟเฟต์ & All You Can Eat", emoji: "🥘" },
  { video: "/videohero/videoplayback.mp4", label: "เชนร้านอาหาร", emoji: "🏪" },
  { video: "/videohero/videoplayback.mp4", label: "Food Truck & Pop-up", emoji: "🚚" },
  { video: "/videohero/videoplayback.mp4", label: "ร้านอาหารญี่ปุ่น & อาหารนานาชาติ", emoji: "🍱" },
];

export default function HomeGallery() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #FFF7F3 50%, #FFE8DC 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
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

        {/* Mobile grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden h-36 sm:h-44 bg-[#0F172A]">
              <video
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                autoPlay muted loop playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-sm font-bold text-white leading-snug">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop accordion */}
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
