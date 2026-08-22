"use client";
import { useState } from "react";

const faqs = [
  {
    q: "FoodStory POS คืออะไร?",
    a: "ระบบจัดการร้านอาหารที่ออกแบบมาเพื่อร้านอาหารโดยเฉพาะ มีฟีเจอร์ที่ครอบคลุมการจัดการร้าน ทั้งช่วยจัดการออเดอร์ทั้งหน้าร้านและออนไลน์ บริหารสต๊อกวัตถุดิบ และดูรายงานยอดขายแบบเรียลไทม์ เพิ่มประสิทธิภาพการทำงานให้สะดวกและรวดเร็วยิ่งขึ้น",
  },
  {
    q: "แตกต่างจาก POS ร้านอาหารเจ้าอื่นอย่างไร?",
    a: "FoodStory POS ทำงานร่วมกับระบบ POS บนระบบ iPadOS ได้อย่างมีประสิทธิภาพ และมีฟีเจอร์การจัดการร้านอาหารครบจบใน iPad เครื่องเดียว ทั้งระบบจัดการโต๊ะ ระบบจัดการออเดอร์หน้าร้านและออนไลน์ที่เชื่อมต่อเดลิเวอรี LINE MAN ระบบจัดการคิวและอัปเดตสถานะออเดอร์ ระบบจัดการสต๊อกขั้นสูง ระบบรายงานยอดขายอย่างละเอียด ระบบสแกนสั่งอาหารผ่าน QR Code ระบบจัดการสมาชิก CRM และเชื่อมต่อเครื่อง EDC เป็นต้น",
  },
  {
    q: "รองรับร้านประเภทใดบ้าง?",
    a: "ระบบจัดการร้านอาหารของ FoodStory เหมาะกับธุรกิจร้านอาหารทุกประเภท ไม่ว่าจะเป็นร้านอาหารไทย คาเฟ่ ชาบู ปิ้งย่าง บุฟเฟ่ต์ หรือร้านแฟรนไชส์ที่มีหลายสาขา",
  },
  {
    q: "เครื่อง POS ราคาเท่าไหร่?",
    a: "ราคาเครื่อง POS และระบบ POS ขึ้นอยู่กับรุ่นและอุปกรณ์ที่เลือกใช้งาน เรามีแพ็กเกจให้เลือกหลายแบบเพื่อตอบโจทย์ร้านอาหารทุกประเภท พร้อมให้คำปรึกษาโดยผู้เชี่ยวชาญฟรี",
  },
  {
    q: "หากสนใจต้องทำอย่างไร?",
    a: "เพียงติดต่อเจ้าหน้าที่ฝ่ายขายของเราเพื่อรับคำแนะนำฟรี เราพร้อมช่วยคุณเลือกระบบที่เหมาะกับร้านของคุณมากที่สุด และให้บริการหลังการขายทุกวัน ตลอด 24 ชั่วโมง",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-[#FF6231] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">คำถามที่พบบ่อย</h2>
          <p className="text-[#64748B] mt-3">ข้อสงสัยที่เจ้าของร้านถามบ่อย ตอบครบทุกคำถาม</p>
        </div>

        {/* Accordion 2-col */}
        <div className="grid lg:grid-cols-2 gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? "#FF6231" : "#E2E8F0",
                  background: isOpen ? "#FFF8F5" : "#fff",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="font-semibold text-[#0F172A] text-sm lg:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "#FF6231" : "#F1F5F9",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke={isOpen ? "white" : "#64748B"} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <div className="h-px bg-[#FFE8DF] mb-4" />
                    <p className="text-[#64748B] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
