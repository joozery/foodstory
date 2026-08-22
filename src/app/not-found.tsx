import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="text-8xl font-bold text-[#FF6231] mb-4">404</div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">ไม่พบหน้าที่คุณต้องการ</h1>
          <p className="text-[#64748B] mb-8">
            หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือ URL อาจไม่ถูกต้อง
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 btn-orange text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              กลับหน้าหลัก
            </Link>
            <Link href="/help" className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC] font-semibold px-6 py-3 rounded-xl transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
