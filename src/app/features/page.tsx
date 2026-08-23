import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { featuresNav } from "@/lib/data/navigation";
import { NavIcon } from "@/components/ui/NavIcon";

export const metadata: Metadata = {
  title: "Features — ฟีเจอร์ครบครันสำหรับร้านอาหาร",
  description: "Wongnai POS มีฟีเจอร์ครบ POS, Table Management, Menu, Mobile Order, CRM, Reservation, Queue, Promotion, Inventory, Report, Multi-branch และ Integration",
};

export default function FeaturesHubPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Product & Features</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">
              ทุกฟีเจอร์ที่ร้านอาหารต้องการ
            </h1>
            <p className="text-base sm:text-xl text-[#64748B] max-w-3xl mx-auto">
              ออกแบบมาเพื่อร้านอาหารไทยโดยเฉพาะ ใช้งานง่าย ครบครัน และพร้อม Scale กับธุรกิจคุณ
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
            {featuresNav.map((group) => (
              <div key={group.group}>
                <h2 className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                  {group.group}
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/features/${item.slug}`}
                      className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#FF6231] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-4">
                        <NavIcon icon={item.icon} className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-[#0F172A] mb-1.5 group-hover:text-[#FF6231] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">{item.shortDesc}</p>
                      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#FF6231] opacity-0 group-hover:opacity-100 transition-opacity">
                        เรียนรู้เพิ่มเติม
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4">พร้อมลองใช้งานแล้วหรือยัง?</h2>
            <p className="text-[#64748B] mb-8">ทดลองใช้ฟรี 30 วัน ครบทุกฟีเจอร์ ไม่ต้องใส่บัตรเครดิต</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors shadow-sm">
              เริ่มทดลองใช้ฟรี
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
