"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { plans } from "@/lib/data/pricing";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        {/* Header */}
        <section className="bg-[#F8FAFC] py-16 border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อน</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5">
              เลือกแพ็กเกจที่เหมาะกับคุณ
            </h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto mb-8">
              ทดลองใช้ฟรี 30 วัน ไม่ต้องใส่บัตรเครดิต ยกเลิกได้ทุกเมื่อ
            </p>
            {/* Billing toggle */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl p-1.5 shadow-sm">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!isYearly ? "bg-[#0F172A] text-white shadow-sm" : "text-[#64748B] hover:text-[#334155]"}`}
              >
                รายเดือน
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${isYearly ? "btn-orange text-white" : "text-[#64748B] hover:text-[#334155]"}`}
              >
                รายปี
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${isYearly ? "bg-white/20 text-white" : "bg-[#FFF0EB] text-[#FF6231]"}`}>ประหยัด 20%</span>
              </button>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-8 flex flex-col relative border transition-all ${plan.popular ? "border-[#FF6231] shadow-2xl shadow-orange-100" : "border-[#E2E8F0]"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#FF6231] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                        ยอดนิยม
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="text-sm font-bold text-[#FF6231] mb-1">{plan.name}</div>
                    <p className="text-sm text-[#64748B]">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    {plan.monthlyPrice ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-bold text-[#0F172A]">
                            ฿{(isYearly ? plan.yearlyPrice! : plan.monthlyPrice).toLocaleString()}
                          </span>
                          <span className="text-[#94A3B8] text-sm">/ เดือน</span>
                        </div>
                        {isYearly && (
                          <div className="text-xs text-[#94A3B8] mt-1">
                            เรียกเก็บ ฿{(plan.yearlyPrice! * 12).toLocaleString()} / ปี
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-[#0F172A]">ติดต่อเรา</div>
                    )}
                  </div>

                  <div className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-sm text-[#334155]">
                        <svg className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]">
                        <svg className="w-4 h-4 text-[#E2E8F0] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={plan.id === "enterprise" ? "/get-quote" : "/contact"}
                    className={`block text-center text-sm font-semibold py-3.5 rounded-xl transition-all ${plan.popular ? "btn-orange text-white shadow-sm" : "border border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]"}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#94A3B8] mt-8">
              ราคายังไม่รวม VAT 7% · ชำระผ่าน QR Code, โอนเงิน, บัตรเครดิต
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">คำถามที่พบบ่อยเรื่องราคา</h2>
            <div className="space-y-4">
              {[
                { q: "สามารถเปลี่ยนแพ็กเกจได้ไหม?", a: "ได้ทุกเมื่อ ทั้งอัปเกรดและดาวน์เกรด ค่าใช้จ่ายจะคำนวณตามสัดส่วนที่ใช้จริง" },
                { q: "ราคาสำหรับหลายอุปกรณ์คำนวณอย่างไร?", a: "แพ็กเกจ Pro ขึ้นไปใช้ได้ไม่จำกัดอุปกรณ์ในสาขาเดียวกัน สำหรับหลายสาขาติดต่อทีมขาย" },
                { q: "มีค่า Setup fee ไหม?", a: "ไม่มีค่า Setup fee ทุกแพ็กเกจ รวมการฝึกอบรมพื้นฐานผ่านวิดีโอและ Help Center" },
                { q: "ถ้าไม่พอใจสามารถขอเงินคืนได้ไหม?", a: "มี Money-back guarantee 14 วัน สำหรับแพ็กเกจรายเดือน หากไม่พอใจจะคืนเงินเต็มจำนวน" },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E2E8F0]">
                  <div className="font-semibold text-[#0F172A] mb-2">{faq.q}</div>
                  <div className="text-sm text-[#64748B] leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
