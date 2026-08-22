import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/Badge";
import { IconPhone, IconHeadset, IconMenu, IconChart, IconPlug, IconPOS } from "@/components/ui/Icon";
import type { ComponentType } from "react";

export const metadata: Metadata = { title: "Help Center & FAQ — Wongnai POS" };

interface IconProps { className?: string; strokeWidth?: number }

const helpCategories: { Icon: ComponentType<IconProps>; title: string; desc: string; articles: number }[] = [
  { Icon: IconPOS, title: "เริ่มต้นใช้งาน", desc: "การตั้งค่าเบื้องต้น การติดตั้ง และการฝึกอบรม", articles: 12 },
  { Icon: IconPOS, title: "การชำระเงิน", desc: "ช่องทางชำระ การตั้งค่า EDC และ PromptPay", articles: 8 },
  { Icon: IconMenu, title: "การจัดการเมนู", desc: "เพิ่ม แก้ไข ตัวเลือก และโปรโมชั่น", articles: 15 },
  { Icon: IconChart, title: "รายงานและข้อมูล", desc: "การอ่านรายงาน Export และ Dashboard", articles: 10 },
  { Icon: IconPlug, title: "การเชื่อมต่อ", desc: "Delivery Platform, Accounting และ API", articles: 7 },
  { Icon: IconHeadset, title: "แก้ไขปัญหา", desc: "ปัญหาที่พบบ่อยและวิธีแก้ไข", articles: 20 },
];

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

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <section className="bg-[#080D17] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel>Help Center</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">เราพร้อมช่วยเหลือคุณ</h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8">ค้นหาคำตอบ คู่มือ และวิธีแก้ไขปัญหาสำหรับ Wongnai POS</p>
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-lg">
                <svg className="w-5 h-5 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="ค้นหาคำถามหรือหัวข้อ..." className="flex-1 text-sm text-[#334155] outline-none placeholder-[#94A3B8]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8">หมวดหมู่ความช่วยเหลือ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {helpCategories.map((cat) => (
                <div key={cat.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#FF6231] hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6231] mb-3">
                    <cat.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-1 group-hover:text-[#FF6231] transition-colors">{cat.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-3">{cat.desc}</p>
                  <span className="text-xs text-[#94A3B8]">{cat.articles} บทความ</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E2E8F0]">
                  <div className="font-semibold text-[#0F172A] mb-2">{faq.q}</div>
                  <div className="text-sm text-[#64748B] leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl font-bold text-[#0F172A] mb-3">ยังหาคำตอบไม่เจอ?</h2>
            <p className="text-[#64748B] mb-6">ทีมซัพพอร์ตพร้อมช่วยเหลือคุณ 24/7</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:020387444" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                <IconPhone className="w-4 h-4" /> โทรหาเรา
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC] font-semibold px-6 py-3 rounded-xl transition-colors">
                แชท LINE
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
