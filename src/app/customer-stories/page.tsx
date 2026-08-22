import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Customer Stories — ร้านอาหารที่ประสบความสำเร็จกับ Wongnai POS" };

const stories = [
  { slug: "somchai-kitchen", title: "ข้าวต้มสมชาย: จากกระดาษสู่ดิจิทัล เพิ่มยอดขาย 40%", company: "ข้าวต้มสมชาย", type: "Full Service", avatar: "สช", highlight: "+40% ยอดขาย" },
  { slug: "cafe-nong", title: "Cafe Nong: ระบบคิวกาแฟที่เปลี่ยนประสบการณ์ลูกค้าไปตลอดกาล", company: "Cafe Nong Specialty Coffee", type: "คาเฟ่", avatar: "NN", highlight: "0 ออเดอร์ตกหล่น" },
  { slug: "yakiniku-plus", title: "Yakiniku Plus: บริหาร 8 สาขาด้วย Dashboard เดียว", company: "Yakiniku Plus Group", type: "แฟรนไชส์", avatar: "YP", highlight: "8 สาขา, 1 ระบบ" },
  { slug: "dessert-lab", title: "Dessert Lab: ลดต้นทุนวัตถุดิบ 25% ด้วยระบบสต็อก", company: "Dessert Lab Cafe", type: "เบเกอรี่", avatar: "DL", highlight: "-25% ต้นทุน" },
  { slug: "mango-buffet", title: "Mango Buffet: จัดรอบลูกค้าอัตโนมัติ เพิ่มรอบต่อวัน", company: "Mango Thai Buffet", type: "บุฟเฟต์", avatar: "MB", highlight: "+1 รอบ/วัน" },
  { slug: "boba-chain", title: "Boba Street: ขยายจาก 1 สู่ 12 สาขาใน 2 ปี", company: "Boba Street Thailand", type: "ชานม", avatar: "BS", highlight: "12 สาขา" },
];

export default function CustomerStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Customer Stories</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">ร้านอาหารที่เติบโตกับ Wongnai POS</h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">เรื่องราวจริงจากเจ้าของร้านที่ใช้ Wongnai POS เพิ่มยอดขาย ลดต้นทุน และขยายธุรกิจ</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Link key={story.slug} href={`/customer-stories/${story.slug}`} className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                  <div className="bg-gradient-to-br from-[#FFF0EB] to-[#F8FAFC] h-44 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl font-bold text-[#FF6231]">
                      {story.avatar}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFF0EB] text-[#FF6231]">{story.type}</span>
                      <span className="text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full">{story.highlight}</span>
                    </div>
                    <h2 className="font-bold text-[#0F172A] text-sm leading-snug mb-1 group-hover:text-[#FF6231] transition-colors">{story.title}</h2>
                    <p className="text-xs text-[#94A3B8]">{story.company}</p>
                  </div>
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
