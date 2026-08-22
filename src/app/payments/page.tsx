import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { IconQR, IconPOS, IconCheck, IconMenu, IconMobile } from "@/components/ui/Icon";
import { BrandIcon } from "@/components/ui/Icon";
import type { ComponentType } from "react";

export const metadata: Metadata = { title: "การชำระเงิน — รองรับทุกช่องทาง | Wongnai POS" };

interface IconProps { className?: string; strokeWidth?: number }

const paymentMethods: {
  Icon?: ComponentType<IconProps>;
  brand?: string;
  name: string;
  desc: string;
  instant: boolean;
}[] = [
  { Icon: IconQR, name: "PromptPay QR", desc: "ลูกค้าสแกน QR จ่ายได้ทันที รองรับทุกธนาคาร", instant: true },
  { Icon: IconPOS, name: "บัตรเครดิต/เดบิต", desc: "รองรับ Visa, Mastercard, JCB ผ่าน EDC Terminal", instant: true },
  { Icon: IconMobile, name: "TrueMoney Wallet", desc: "รับชำระผ่าน TrueMoney Wallet QR Code", instant: false },
  { brand: "line", name: "Rabbit LINE Pay", desc: "รับชำระผ่าน Rabbit LINE Pay", instant: false },
  { Icon: IconCheck, name: "เงินสด", desc: "คำนวณทอนเงินอัตโนมัติ บันทึกครบทุก session", instant: true },
  { Icon: IconMenu, name: "Invoice / Credit Term", desc: "สำหรับลูกค้าองค์กรที่ต้องการเครดิต", instant: false },
];

export default function PaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>ชำระเงิน</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">รับชำระเงินได้ทุกช่องทาง ในระบบเดียว</h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">ลูกค้าชำระได้หลายวิธี ข้อมูลยอดขายรวมอัตโนมัติในรายงาน</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {paymentMethods.map((pm) => (
                <div key={pm.name} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231]">
                      {pm.brand ? (
                        <BrandIcon brand={pm.brand} className="h-5 w-auto" alt={pm.name} />
                      ) : pm.Icon ? (
                        <pm.Icon className="w-5 h-5" />
                      ) : null}
                    </div>
                    {pm.instant && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#10B981]">พร้อมใช้</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-1.5">{pm.name}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{pm.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#080D17] rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">ต้องการเพิ่มช่องทางชำระเงิน?</h2>
              <p className="text-[#94A3B8] mb-7">ติดต่อทีมงานเพื่อขอใช้บริการ Payment Gateway และ EDC Terminal</p>
              <Link href="/get-quote" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                ขอข้อมูลการชำระเงิน
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
