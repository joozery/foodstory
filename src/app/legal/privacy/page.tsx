import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "นโยบายความเป็นส่วนตัว — Wongnai POS" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">นโยบายความเป็นส่วนตัว</h1>
          <p className="text-sm text-[#94A3B8] mb-10">อัปเดตล่าสุด: 1 สิงหาคม 2567</p>
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 text-[#475569] leading-relaxed text-sm">
              {[
                { title: "1. ข้อมูลที่เราเก็บรวบรวม", body: "Wongnai POS เก็บรวบรวมข้อมูลที่จำเป็นสำหรับการให้บริการ ได้แก่ ข้อมูลการลงทะเบียน ข้อมูลการทำธุรกรรม และข้อมูลการใช้งานระบบ" },
                { title: "2. วัตถุประสงค์การใช้ข้อมูล", body: "เราใช้ข้อมูลเพื่อให้บริการ ปรับปรุงประสบการณ์การใช้งาน วิเคราะห์การใช้งาน และติดต่อสื่อสารกับผู้ใช้งาน" },
                { title: "3. การแบ่งปันข้อมูล", body: "เราไม่ขายข้อมูลส่วนตัวของคุณให้กับบุคคลที่สาม และจะแบ่งปันข้อมูลเฉพาะในกรณีที่จำเป็นตามกฎหมายหรือด้วยความยินยอมของคุณเท่านั้น" },
                { title: "4. ความปลอดภัยของข้อมูล", body: "ข้อมูลทั้งหมดเข้ารหัสด้วย SSL/TLS และเราดำเนินมาตรการรักษาความปลอดภัยตามมาตรฐาน ISO 27001 และปฏิบัติตาม PDPA" },
                { title: "5. สิทธิ์ของผู้ใช้งาน", body: "คุณมีสิทธิ์เข้าถึง แก้ไข ลบ หรือส่งออกข้อมูลส่วนตัวของคุณได้ทุกเมื่อ โดยติดต่อทีมงานที่ privacy@wongnai.com" },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="text-base font-bold text-[#0F172A] mb-2">{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
