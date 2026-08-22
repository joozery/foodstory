import { SectionLabel } from "@/components/ui/Badge";

const testimonials = [
  {
    name: "คุณสมชาย รักอาหาร",
    role: "เจ้าของ | ข้าวต้มกุ้ง สมชาย",
    type: "Full Service",
    avatar: "สช",
    color: "#FF6231",
    bg: "#FFF0EB",
    quote: "ตั้งแต่ใช้ Wongnai POS ออเดอร์ผิดพลาดหายไปเกือบ 100% ลูกค้าสแกน QR สั่งเองได้ พนักงานมีเวลาดูแลลูกค้าได้มากขึ้น ยอดขายเพิ่มขึ้น 30% ใน 3 เดือนแรก",
    rating: 5,
  },
  {
    name: "คุณนงนุช ธีรวัฒน์",
    role: "CEO | Cafe Nong Specialty Coffee",
    type: "คาเฟ่",
    avatar: "นน",
    color: "#3B82F6",
    bg: "#EFF6FF",
    quote: "ระบบคิวกาแฟเป็นตัวช่วยสำคัญมาก ลูกค้ารับบัตรคิว นั่งรอได้เลย ไม่ต้องยืนต่อแถว ช่วยให้ร้านดูดีขึ้นและลูกค้าพอใจมากขึ้น",
    rating: 5,
  },
  {
    name: "คุณวิชัย แสงสุวรรณ",
    role: "MD | Yakiniku Plus (8 สาขา)",
    type: "แฟรนไชส์",
    avatar: "วช",
    color: "#10B981",
    bg: "#ECFDF5",
    quote: "บริหาร 8 สาขาจาก Dashboard เดียว เห็นยอดขายและสต็อกแบบ Real-time ทำให้ตัดสินใจทางธุรกิจได้เร็วและแม่นยำขึ้นมาก",
    rating: 5,
  },
  {
    name: "คุณพรพิมล เจริญสุข",
    role: "เจ้าของ | Dessert Lab Cafe",
    type: "เบเกอรี่",
    avatar: "พพ",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    quote: "ระบบสต็อกวัตถุดิบช่วยลดของเสียได้มาก รู้ทันทีว่าแต่ละวันใช้แป้ง นม ไข่ไปเท่าไหร่ ทำให้คำนวณต้นทุนได้แม่นขึ้นมาก",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel>Customer Stories</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            ร้านอาหารไทยที่เติบโตกับ Wongnai POS
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            เรื่องราวจริงจากเจ้าของร้านที่ใช้ Wongnai POS เพิ่มประสิทธิภาพและยอดขาย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-md transition-all">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-[#FF6231]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[#334155] text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">{t.name}</div>
                    <div className="text-xs text-[#94A3B8]">{t.role}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFF0EB] text-[#FF6231]">
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/customer-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6231] hover:text-[#E54E1F] transition-colors"
          >
            อ่าน Customer Stories ทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
