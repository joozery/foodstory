import Link from "next/link";
import { solutions } from "@/lib/data/solutions";
import { NavIcon } from "@/components/ui/NavIcon";

export default function HomeSolutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            Solutions ตามประเภทร้าน
          </h2>
          <p className="text-lg font-semibold text-[#334155] mb-2">
            ไม่ว่าร้านไหน Wongnai POS รองรับได้หมด
          </p>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            ระบบปรับตามรูปแบบธุรกิจ ตั้งค่าเร็ว เริ่มใช้ได้เลยภายใน 1 วัน
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {solutions.map((sol) => (
            <Link
              key={sol.slug}
              href={`/solutions/${sol.slug}`}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#FF6231] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-3">
                <NavIcon icon={sol.icon} className="w-5 h-5" />
              </div>
              <div className="font-semibold text-[#0F172A] text-sm mb-1 group-hover:text-[#FF6231] transition-colors">
                {sol.shortName}
              </div>
              <div className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                {sol.tagline}
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#FF6231] opacity-0 group-hover:opacity-100 transition-opacity">
                เรียนรู้เพิ่มเติม
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6231] hover:text-[#E54E1F] transition-colors"
          >
            ดู Solutions ทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
