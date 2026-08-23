import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { solutions, getSolutionBySlug } from "@/lib/data/solutions";
import { NavIcon } from "@/components/ui/NavIcon";
import { IconMobile, IconChart } from "@/components/ui/Icon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return {};
  return {
    title: `Wongnai POS สำหรับ${sol.name}`,
    description: sol.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) notFound();

  const related = solutions.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        {/* Hero */}
        <section className="bg-[#080D17] py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #FF6231 0%, transparent 70%)" }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-[#475569] mb-8">
              <Link href="/" className="hover:text-[#94A3B8]">หน้าหลัก</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-[#94A3B8]">Solutions</Link>
              <span>/</span>
              <span className="text-[#94A3B8]">{sol.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#FF6231]/20 flex items-center justify-center text-[#FF6231] mb-5">
                  <NavIcon icon={sol.icon} className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <SectionLabel>{sol.shortName}</SectionLabel>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                  {sol.tagline}
                </h1>
                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8">
                  {sol.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg">
                    ทดลองใช้ฟรี 30 วัน
                  </Link>
                  <Link href="/get-quote" className="inline-flex items-center justify-center gap-2 border border-[#253145] text-white hover:bg-[#0F1824] font-semibold px-7 py-3.5 rounded-xl transition-colors">
                    ขอใบเสนอราคา
                  </Link>
                </div>
              </div>

              {/* Feature list */}
              <div className="bg-[#0F1824] rounded-2xl border border-[#1A2535] p-6">
                <div className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-4">ฟีเจอร์หลัก</div>
                <div className="space-y-3">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FF6231]/20 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-[#FF6231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#CBD5E1]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why this solution */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A]">
                ทำไม Wongnai POS ถึงเหมาะกับ{sol.shortName}?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { Icon: IconMobile, title: "ใช้งานง่าย ไม่ต้องเทรน", desc: "UI เรียบง่าย พนักงานใหม่เรียนรู้ได้ภายใน 30 นาที" },
                { Icon: IconChart, title: "อัปเดตแบบ Real-time", desc: "เมนู ราคา โปรโมชั่น อัปเดตทุกอุปกรณ์ทันที ไม่ต้องรีสตาร์ท" },
                { Icon: IconChart, title: "รายงานที่เข้าใจง่าย", desc: "Dashboard ดูยอดขาย กำไร เมนูขายดี ได้ทุกที่ทุกเวลา" },
              ].map((item) => (
                <div key={item.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-4">
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related solutions */}
        <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-[#0F172A] mb-6">Solutions อื่นที่เกี่ยวข้อง</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="bg-white rounded-xl p-4 border border-[#E2E8F0] hover:border-[#FF6231] hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-2">
                    <NavIcon icon={s.icon} className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6231] transition-colors">{s.shortName}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
