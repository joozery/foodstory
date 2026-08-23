import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "เกี่ยวกับเรา — Wongnai POS" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#080D17] py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <SectionLabel>เกี่ยวกับ Wongnai POS</SectionLabel>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                เราเชื่อว่าเทคโนโลยีที่ดีทำให้ร้านอาหารไทยเติบโตได้
              </h1>
              <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed">
                Wongnai POS (เดิมชื่อ FoodStory) เป็นผลิตภัณฑ์ภายใต้บริษัท Wongnai Media Co., Ltd. (LINE MAN Wongnai) ผู้นำด้านเทคโนโลยีอาหารในประเทศไทย
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-5">เรื่องราวของเรา</h2>
                <div className="space-y-4 text-[#475569] leading-relaxed">
                  <p>FoodStory ก่อตั้งขึ้นในปี 2555 โดยกลุ่มนักพัฒนาที่มีความหลงใหลในวงการร้านอาหาร ด้วยวิสัยทัศน์ที่ต้องการทำให้เทคโนโลยีการจัดการร้านอาหารเข้าถึงได้ง่ายและราคาจับต้องได้</p>
                  <p>ในปี 2566 บริษัทถูกซื้อกิจการโดย LINE MAN Wongnai ซึ่งเป็นหนึ่งในบริษัทเทคโนโลยีอาหารที่ใหญ่ที่สุดในประเทศไทย และได้ Rebrand เป็น &ldquo;Wongnai POS&rdquo; เพื่อสร้าง ecosystem ที่แข็งแกร่งยิ่งขึ้น</p>
                  <p>ปัจจุบัน Wongnai POS ให้บริการร้านอาหารกว่า 10,000 แห่งทั่วประเทศไทย ตั้งแต่ร้านอาหารข้างทางจนถึงเชนระดับประเทศ</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2555", label: "ปีที่ก่อตั้ง" },
                  { value: "10,000+", label: "ร้านอาหาร" },
                  { value: "2566", label: "เข้าร่วม LINE MAN Wongnai" },
                  { value: "200+", label: "พนักงาน" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] text-center">
                    <div className="text-2xl font-bold text-[#FF6231] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#64748B]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">ร่วมงานกับเรา</h2>
            <p className="text-[#64748B] mb-6">เราเปิดรับสมัครพนักงานที่มีความหลงใหลในการพัฒนาเทคโนโลยีสำหรับร้านอาหาร</p>
            <Link href="#" className="inline-flex items-center gap-2 btn-orange text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              ดูตำแหน่งงานว่าง
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
