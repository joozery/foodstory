import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { featuresNav } from "@/lib/data/navigation";
import { NavIcon } from "@/components/ui/NavIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

const allFeatures = featuresNav.flatMap((g) => g.items.map((item) => ({ ...item, group: g.group })));

export async function generateStaticParams() {
  return allFeatures.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = allFeatures.find((f) => f.slug === slug);
  if (!feature) return {};
  return {
    title: `${feature.name} — Wongnai POS Feature`,
    description: feature.shortDesc,
  };
}

export default async function FeatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const feature = allFeatures.find((f) => f.slug === slug);
  if (!feature) notFound();

  const related = allFeatures.filter((f) => f.slug !== slug && f.group === feature.group).slice(0, 3);

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
            <div className="flex items-center gap-2 text-sm text-[#475569] mb-8">
              <Link href="/" className="hover:text-[#94A3B8]">หน้าหลัก</Link>
              <span>/</span>
              <Link href="/features" className="hover:text-[#94A3B8]">Features</Link>
              <span>/</span>
              <span className="text-[#94A3B8]">{feature.name}</span>
            </div>

            <div className="max-w-3xl">
              <div className="w-16 h-16 rounded-2xl bg-[#FF6231]/20 flex items-center justify-center text-[#FF6231] mb-5">
                <NavIcon icon={feature.icon} className="w-8 h-8" />
              </div>
              <div className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">{feature.group}</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">{feature.name}</h1>
              <p className="text-xl text-[#94A3B8] mb-8">{feature.shortDesc}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                  ทดลองใช้ฟรี
                </Link>
                <Link href="/get-quote" className="inline-flex items-center justify-center gap-2 border border-[#253145] text-white hover:bg-[#0F1824] font-semibold px-7 py-3.5 rounded-xl transition-colors">
                  ขอ Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature details placeholder */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-5">ทำงานอย่างไร?</h2>
                <p className="text-[#64748B] leading-relaxed mb-6">
                  {feature.name} ใน Wongnai POS ออกแบบมาเพื่อให้ใช้งานง่าย รวดเร็ว และเชื่อมต่อกับฟีเจอร์อื่นได้อย่างลื่นไหล
                </p>
                <div className="space-y-3">
                  {["ใช้งานได้ทันทีบน iPad, Android tablet และมือถือ", "เชื่อมต่อกับฟีเจอร์อื่นแบบ Real-time", "ข้อมูลสำรองอัตโนมัติบน Cloud", "รองรับการใช้งาน Offline"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[#334155]">
                      <div className="w-5 h-5 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#FF6231]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mx-auto mb-3">
                    <NavIcon icon={feature.icon} className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-[#94A3B8]">Feature preview / Screenshot</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related features */}
        {related.length > 0 && (
          <section className="py-12 bg-[#F8FAFC] border-t border-[#E2E8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-lg font-bold text-[#0F172A] mb-5">ฟีเจอร์ที่เกี่ยวข้อง</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/features/${f.slug}`}
                    className="bg-white rounded-xl p-4 border border-[#E2E8F0] hover:border-[#FF6231] hover:shadow-md transition-all group flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FFF0EB] flex items-center justify-center shrink-0 text-[#FF6231]">
                      <NavIcon icon={f.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#FF6231] transition-colors">{f.name}</div>
                      <div className="text-xs text-[#94A3B8]">{f.shortDesc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
