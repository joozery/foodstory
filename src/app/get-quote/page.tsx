import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "ขอใบเสนอราคา — Wongnai POS" };

export default function GetQuotePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Lead Generation</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">ขอใบเสนอราคา</h1>
            <p className="text-base sm:text-xl text-[#64748B] max-w-2xl mx-auto">
              กรอกข้อมูลร้านของคุณ ทีมผู้เชี่ยวชาญจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 sm:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">ชื่อ *</label>
                    <input type="text" placeholder="ชื่อของคุณ" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">นามสกุล *</label>
                    <input type="text" placeholder="นามสกุลของคุณ" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-2">ชื่อร้านอาหาร *</label>
                  <input type="text" placeholder="ชื่อร้านของคุณ" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">เบอร์โทรศัพท์ *</label>
                    <input type="tel" placeholder="08x-xxx-xxxx" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#334155] mb-2">อีเมล</label>
                    <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-2">ประเภทร้านอาหาร *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all bg-white">
                    <option value="">เลือกประเภทร้าน</option>
                    <option>QSR (Quick Service)</option>
                    <option>Full Service</option>
                    <option>คาเฟ่</option>
                    <option>บุฟเฟต์</option>
                    <option>ชานม/เครื่องดื่ม</option>
                    <option>เบเกอรี่</option>
                    <option>ร้านเชน/แฟรนไชส์</option>
                    <option>อื่นๆ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-2">จำนวนสาขา</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all bg-white">
                    <option>1 สาขา</option>
                    <option>2-5 สาขา</option>
                    <option>6-20 สาขา</option>
                    <option>20+ สาขา</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-2">ความต้องการเพิ่มเติม</label>
                  <textarea rows={4} placeholder="บอกเราเพิ่มเติมเกี่ยวกับร้านและความต้องการของคุณ..." className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full btn-orange text-white font-semibold py-4 rounded-xl text-base transition-colors shadow-sm"
                >
                  ส่งข้อมูลเพื่อรับใบเสนอราคา
                </button>
                <p className="text-center text-xs text-[#94A3B8]">
                  ทีมผู้เชี่ยวชาญจะติดต่อกลับภายใน 24 ชั่วโมง · ข้อมูลของคุณปลอดภัยและเป็นความลับ
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
