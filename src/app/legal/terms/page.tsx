import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "เงื่อนไขการใช้บริการ — Wongnai POS" };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 lg:pt-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">เงื่อนไขการใช้บริการ</h1>
          <p className="text-sm text-[#94A3B8] mb-10">อัปเดตล่าสุด: 1 สิงหาคม 2567</p>
          <div className="space-y-8 text-[#475569] leading-relaxed text-sm">
            {[
              { title: "1. การยอมรับเงื่อนไข", body: "การใช้งาน Wongnai POS ถือว่าคุณยอมรับเงื่อนไขการใช้บริการฉบับนี้ทุกประการ หากไม่ยอมรับ กรุณาหยุดใช้งาน" },
              { title: "2. การใช้งานที่อนุญาต", body: "คุณสามารถใช้ Wongnai POS เพื่อวัตถุประสงค์ทางธุรกิจที่ถูกกฎหมายเท่านั้น ห้ามนำไปใช้ในทางที่ผิดกฎหมายหรือก่อให้เกิดความเสียหายแก่ผู้อื่น" },
              { title: "3. การชำระเงินและการยกเลิก", body: "การชำระเงินรายเดือนหรือรายปีจะถูกเรียกเก็บตามรอบที่กำหนด คุณสามารถยกเลิกได้ทุกเมื่อโดยไม่มีค่าปรับ แต่จะไม่มีการคืนเงินสำหรับรอบที่ชำระแล้ว" },
              { title: "4. ข้อจำกัดความรับผิด", body: "Wongnai POS จะไม่รับผิดชอบต่อความเสียหายทางอ้อม ที่เกิดจากการใช้งานหรือไม่สามารถใช้งานบริการได้ รวมถึงการสูญหายของข้อมูล" },
              { title: "5. การเปลี่ยนแปลงเงื่อนไข", body: "เราสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขได้ทุกเมื่อ โดยจะแจ้งให้ทราบล่วงหน้าอย่างน้อย 30 วันผ่านทางอีเมลหรือระบบ" },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">{s.title}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
