import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "บทความ & Resource Center — Wongnai POS" };

const categories = ["ทั้งหมด", "เทคนิคการเพิ่มยอดขาย", "การจัดการร้านอาหาร", "เทคโนโลยีร้านอาหาร", "อัปเดตฟีเจอร์"];

const articles = [
  { slug: "increase-revenue-qr-menu", title: "5 วิธีเพิ่มยอดขายด้วย QR Menu ที่ร้านอาหารไทยควรรู้", category: "เทคนิคการเพิ่มยอดขาย", readTime: 5, date: "15 ส.ค. 2567" },
  { slug: "inventory-management-tips", title: "จัดการสต็อกวัตถุดิบอย่างไรให้ลดต้นทุนได้ 20%", category: "การจัดการร้านอาหาร", readTime: 7, date: "10 ส.ค. 2567" },
  { slug: "digital-transformation-restaurant", title: "Digital Transformation ร้านอาหาร: เริ่มต้นที่ไหนดี?", category: "เทคโนโลยีร้านอาหาร", readTime: 8, date: "5 ส.ค. 2567" },
  { slug: "wongnai-pos-new-features-aug", title: "อัปเดตใหม่ Wongnai POS สิงหาคม 2567: ฟีเจอร์ที่ลูกค้าร้องขอ", category: "อัปเดตฟีเจอร์", readTime: 3, date: "1 ส.ค. 2567" },
  { slug: "cafe-crm-loyalty", title: "ระบบ CRM และ Loyalty Program สำหรับคาเฟ่: คู่มือฉบับสมบูรณ์", category: "เทคนิคการเพิ่มยอดขาย", readTime: 10, date: "28 ก.ค. 2567" },
  { slug: "multi-branch-management", title: "บริหารร้านหลายสาขาอย่างไรให้ไม่ปวดหัว", category: "การจัดการร้านอาหาร", readTime: 6, date: "20 ก.ค. 2567" },
];

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Resource Center</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">บทความ & ทรัพยากร</h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">คู่มือ เทคนิค และข่าวสารสำหรับเจ้าของร้านอาหารที่ต้องการเติบโต</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, i) => (
                <button key={cat} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? "bg-[#FF6231] text-white" : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] h-40 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#CBD5E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFF0EB] text-[#FF6231]">{article.category}</span>
                    <h2 className="font-bold text-[#0F172A] mt-3 mb-2 leading-snug group-hover:text-[#FF6231] transition-colors text-sm">{article.title}</h2>
                    <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>อ่าน {article.readTime} นาที</span>
                    </div>
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
