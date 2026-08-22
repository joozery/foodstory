import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { IconMobile, IconPOS, IconBox, IconTable, IconQR, IconSearch } from "@/components/ui/Icon";
import type { ComponentType } from "react";

export const metadata: Metadata = { title: "Hardware — อุปกรณ์ POS สำหรับร้านอาหาร | Wongnai POS" };

interface IconProps { className?: string; strokeWidth?: number }

const hardwareItems: {
  Icon: ComponentType<IconProps>;
  name: string;
  desc: string;
  price: string;
  badge: string | null;
}[] = [
  { Icon: IconMobile, name: "Tablet Stand Kit", desc: "ขาตั้ง iPad หรือ Android tablet พร้อม Power Bank ในตัว", price: "3,500", badge: "ขายดี" },
  { Icon: IconPOS, name: "Receipt Printer", desc: "เครื่องพิมพ์ใบเสร็จ Epson 80mm รองรับ USB และ WiFi", price: "4,200", badge: null },
  { Icon: IconBox, name: "Cash Drawer", desc: "ลิ้นชักเก็บเงิน เชื่อมต่อกับเครื่องพิมพ์ใบเสร็จได้เลย", price: "1,800", badge: null },
  { Icon: IconTable, name: "Kitchen Display (KDS)", desc: "จอแสดงออเดอร์ในครัว 15 นิ้ว กันน้ำ กันความชื้น", price: "8,500", badge: "ใหม่" },
  { Icon: IconQR, name: "Payment Terminal (EDC)", desc: "รับชำระบัตรเครดิต/เดบิต PromptPay ในเครื่องเดียว", price: "ติดต่อเรา", badge: null },
  { Icon: IconSearch, name: "Barcode Scanner", desc: "สแกนบาร์โค้ดสต็อกสินค้า รองรับ USB และ Bluetooth", price: "1,200", badge: null },
];

export default function HardwarePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Hardware</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">อุปกรณ์ POS ครบชุด พร้อมใช้งานทันที</h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">อุปกรณ์ที่ผ่านการทดสอบและรับประกันการทำงานร่วมกับ Wongnai POS</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareItems.map((item) => (
                <div key={item.name} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231]">
                      <item.Icon className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.badge === "ใหม่" ? "bg-[#ECFDF5] text-[#10B981]" : "bg-[#FFF0EB] text-[#FF6231]"}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{item.name}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]">
                    <div>
                      <div className="text-xs text-[#94A3B8]">ราคาเริ่มต้น</div>
                      <div className="font-bold text-[#0F172A]">
                        {item.price !== "ติดต่อเรา" ? `฿${item.price}` : item.price}
                      </div>
                    </div>
                    <Link href="/get-quote" className="text-sm font-semibold text-[#FF6231] hover:text-[#E54E1F] transition-colors">
                      สั่งซื้อ →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">ต้องการ Hardware Set สำหรับร้าน?</h2>
            <p className="text-[#64748B] mb-6">ทีมงานจะแนะนำอุปกรณ์ที่เหมาะสมตามประเภทและขนาดร้านของคุณ</p>
            <Link href="/get-quote" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              ขอคำแนะนำ Hardware Set
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
