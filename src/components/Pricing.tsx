"use client";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    thaiName: "เริ่มต้น",
    monthlyPrice: 590,
    yearlyPrice: 490,
    description: "เหมาะสำหรับร้านขนาดเล็ก หรือเริ่มต้นธุรกิจ",
    color: "#6B7280",
    features: [
      "1 สาขา",
      "จัดการโต๊ะสูงสุด 10 โต๊ะ",
      "เมนูไม่จำกัด",
      "ออกบิลและพิมพ์ใบเสร็จ",
      "รายงานยอดขายรายวัน",
      "ซัพพอร์ตทางอีเมล",
    ],
    notIncluded: ["E-Menu QR Code", "จัดการสต็อก", "CRM สมาชิก", "API Integration"],
  },
  {
    name: "Pro",
    thaiName: "มืออาชีพ",
    monthlyPrice: 1290,
    yearlyPrice: 990,
    description: "เหมาะสำหรับร้านที่ต้องการฟีเจอร์ครบครัน",
    color: "#FF6B2B",
    popular: true,
    features: [
      "1 สาขา",
      "โต๊ะไม่จำกัด",
      "E-Menu QR Code",
      "จัดการสต็อกวัตถุดิบ",
      "CRM สมาชิกสะสมแต้ม",
      "รายงานธุรกิจแบบละเอียด",
      "เชื่อมต่อ Delivery Platform",
      "ซัพพอร์ต 24/7 ทางไลน์",
    ],
    notIncluded: ["API Integration", "หลายสาขา"],
  },
  {
    name: "Enterprise",
    thaiName: "องค์กร",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "สำหรับแฟรนไชส์และร้านที่มีหลายสาขา",
    color: "#1A1A2E",
    features: [
      "หลายสาขา ไม่จำกัด",
      "ทุกฟีเจอร์ใน Pro",
      "Dashboard รวมสาขา",
      "API Integration",
      "Custom Branding",
      "ฝึกอบรมพนักงาน On-site",
      "Account Manager ส่วนตัว",
      "SLA 99.9% Uptime",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
            ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อน
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            เลือกแพ็กเกจที่เหมาะกับคุณ
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            ทดลองใช้ฟรี 30 วัน ไม่ต้องใส่บัตรเครดิต ยกเลิกได้ทุกเมื่อ
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-1.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${!isYearly ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              รายเดือน
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${isYearly ? "text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              style={isYearly ? { backgroundColor: "#FF6B2B" } : {}}
            >
              รายปี
              <span className="text-xs font-bold px-1.5 py-0.5 rounded-md" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>-20%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border flex flex-col relative ${plan.popular ? "shadow-xl" : "border-gray-100"}`}
              style={plan.popular ? { borderColor: "#FF6B2B", borderWidth: 2 } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold text-white px-4 py-1.5 rounded-full" style={{ backgroundColor: "#FF6B2B" }}>
                    ยอดนิยม
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm font-semibold mb-1" style={{ color: plan.color }}>{plan.name}</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{plan.thaiName}</div>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      ฿{isYearly ? plan.yearlyPrice?.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/ เดือน</span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-gray-900">ติดต่อเรา</div>
                )}
                {isYearly && plan.monthlyPrice && (
                  <div className="text-xs text-gray-400 mt-1">
                    เรียกเก็บ ฿{((plan.yearlyPrice ?? 0) * 12).toLocaleString()} / ปี
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </div>
                ))}
                {plan.notIncluded.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all ${plan.popular ? "text-white" : "text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}
                style={plan.popular ? { backgroundColor: "#FF6B2B" } : {}}
                onMouseEnter={e => { if (plan.popular) e.currentTarget.style.backgroundColor = "#E85A1E"; }}
                onMouseLeave={e => { if (plan.popular) e.currentTarget.style.backgroundColor = "#FF6B2B"; }}
              >
                {plan.monthlyPrice ? "ทดลองใช้ฟรี 30 วัน" : "ติดต่อทีมขาย"}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          ราคาทั้งหมดยังไม่รวม VAT 7% · ชำระผ่านบัตรเครดิต โอนเงิน หรือ QR Code
        </p>
      </div>
    </section>
  );
}
