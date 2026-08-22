import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import {
  IconForkKnife, IconPlug, IconTrending, IconHeadset, IconChart, IconShield,
} from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Why Wongnai POS — ทำไมต้องเลือกเรา" };

const benefits = [
  { Icon: IconForkKnife, title: "Made for Thai Restaurants", desc: "ออกแบบโดยคนไทย เพื่อร้านอาหารไทย รองรับ workflow และภาษาไทยอย่างสมบูรณ์" },
  { Icon: IconPlug, title: "Ecosystem ครบวงจร", desc: "เชื่อมต่อกับ Wongnai, LINE MAN, Grab, Foodpanda และอีก 50+ แพลตฟอร์ม" },
  { Icon: IconTrending, title: "พิสูจน์แล้วว่าเพิ่มยอดขาย", desc: "ร้านที่ใช้ Wongnai POS ยอดขายเฉลี่ยเพิ่มขึ้น 28% ใน 6 เดือนแรก" },
  { Icon: IconHeadset, title: "Support 24/7 ภาษาไทย", desc: "ทีมซัพพอร์ตไทยพร้อมช่วยเหลือตลอด 24 ชั่วโมง ทั้งทาง LINE, โทรศัพท์ และ On-site" },
  { Icon: IconChart, title: "อัปเดตฟีเจอร์ฟรีตลอด", desc: "ฟีเจอร์ใหม่ทุกเดือน ไม่มีค่าใช้จ่ายเพิ่ม รับ feedback จากเจ้าของร้านโดยตรง" },
  { Icon: IconShield, title: "ข้อมูลปลอดภัย PDPA Compliant", desc: "ข้อมูลร้านและลูกค้าเข้ารหัสและปลอดภัยตามมาตรฐาน PDPA และ ISO 27001" },
];

export default function WhyWongnaiPOSPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#080D17] py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #FF6231 0%, transparent 70%)" }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <SectionLabel>Why Wongnai POS</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              ทำไมร้านอาหาร 10,000+ แห่ง<br />ถึงเลือก Wongnai POS?
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              ไม่ใช่แค่ POS ทั่วไป — เราเป็นพาร์ทเนอร์ที่เข้าใจธุรกิจร้านอาหารไทยดีที่สุด
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item) => (
                <div key={item.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-4">
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                ทดลองใช้ฟรี 30 วัน
              </Link>
              <Link href="/customer-stories" className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#334155] hover:bg-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                อ่าน Customer Stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
