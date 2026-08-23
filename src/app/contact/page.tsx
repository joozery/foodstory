import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "ติดต่อเรา & ทดลองใช้ฟรี — Wongnai POS" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>ทดลองใช้ฟรี 30 วัน</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">เริ่มต้นกับ Wongnai POS</h1>
            <p className="text-base sm:text-xl text-[#64748B] max-w-2xl mx-auto">ไม่ต้องใส่บัตรเครดิต ยกเลิกได้ทุกเมื่อ ทีมซัพพอร์ตพร้อมช่วยตั้งค่า</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">สมัครทดลองใช้ฟรี</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">ชื่อ-นามสกุล *</label>
                    <input type="text" placeholder="ชื่อของคุณ" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">เบอร์โทรศัพท์ *</label>
                    <input type="tel" placeholder="08x-xxx-xxxx" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">อีเมล *</label>
                    <input type="email" placeholder="email@restaurant.com" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">ประเภทร้าน</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all bg-white">
                      <option value="">เลือกประเภทร้าน</option>
                      <option>QSR</option><option>Full Service</option><option>คาเฟ่</option>
                      <option>บุฟเฟต์</option><option>ชานม</option><option>เบเกอรี่</option><option>อื่นๆ</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-orange text-white font-semibold py-4 rounded-xl transition-colors shadow-sm">
                    เริ่มทดลองใช้ฟรี 30 วัน
                  </button>
                </form>
              </div>

              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">ติดต่อเรา</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      ),
                      title: "โทรศัพท์", detail: "02-038-7444", sub: "จ-ศ 9:00–18:00 น.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      ),
                      title: "LINE Official", detail: "@wongnaipos", sub: "ตอบกลับภายใน 2 นาที",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      ),
                      title: "อีเมล", detail: "pos@wongnai.com", sub: "ตอบกลับภายใน 24 ชม.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      ),
                      title: "ที่อยู่", detail: "บริษัท วงใน มีเดีย จำกัด", sub: "กรุงเทพมหานคร ประเทศไทย",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center shrink-0 text-[#FF6231]">{item.icon}</div>
                      <div>
                        <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wide">{item.title}</div>
                        <div className="font-semibold text-[#0F172A] mt-0.5">{item.detail}</div>
                        <div className="text-sm text-[#64748B]">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
