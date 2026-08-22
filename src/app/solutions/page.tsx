import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { solutions } from "@/lib/data/solutions";
import { solutionsNav } from "@/lib/data/navigation";
import { NavIcon } from "@/components/ui/NavIcon";

export const metadata: Metadata = {
  title: "Solutions ตามประเภทร้านอาหาร",
  description: "Wongnai POS มีโซลูชันสำหรับร้านอาหารทุกประเภท QSR, Full Service, คาเฟ่, บุฟเฟต์, ชานม, เบเกอรี่ และอีกมากมาย",
};

export default function SolutionsHubPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        {/* Hero */}
        <section className="bg-[#F8FAFC] py-16 lg:py-20 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Solutions</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">
              ระบบที่ปรับตามประเภทร้านของคุณ
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              ไม่ใช่ one-size-fits-all — Wongnai POS ออกแบบฟีเจอร์และ workflow ให้เหมาะกับแต่ละประเภทร้านอาหาร
            </p>
          </div>
        </section>

        {/* Solutions by group */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {solutionsNav.map((group) => (
              <div key={group.group} className="mb-14 last:mb-0">
                <h2 className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                  {group.group}
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.items.map((item) => {
                    const sol = solutions.find((s) => s.slug === item.slug);
                    return (
                      <Link
                        key={item.slug}
                        href={`/solutions/${item.slug}`}
                        className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#FF6231] hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-4">
                          <NavIcon icon={item.icon} className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#0F172A] mb-1.5 group-hover:text-[#FF6231] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed mb-4">{item.shortDesc}</p>
                        {sol && (
                          <ul className="space-y-1.5">
                            {sol.features.slice(0, 3).map((f) => (
                              <li key={f} className="flex items-center gap-2 text-xs text-[#475569]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6231] shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-4 pt-4 border-t border-[#F1F5F9] flex items-center gap-1 text-xs font-semibold text-[#FF6231]">
                          ดูรายละเอียด
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4">
              ไม่แน่ใจว่าโซลูชันไหนเหมาะกับร้านคุณ?
            </h2>
            <p className="text-[#64748B] mb-8">
              ให้ทีมผู้เชี่ยวชาญ Wongnai POS วิเคราะห์ความต้องการและแนะนำโซลูชันที่เหมาะสมให้ฟรี
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/get-quote" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-sm">
                ปรึกษาผู้เชี่ยวชาญ
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#334155] hover:bg-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                ทดลองใช้ฟรี 30 วัน
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
