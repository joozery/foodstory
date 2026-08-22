const testimonials = [
  {
    name: "คุณสมชาย วงศ์ประเสริฐ",
    role: "เจ้าของร้าน ข้าวต้มกุ้ง สมชาย",
    avatar: "สช",
    rating: 5,
    text: "ก่อนหน้านี้ใช้กระดาษจดออเดอร์ ผิดพลาดบ่อยมาก ตั้งแต่ใช้ FoodStory ลูกค้าสแกน QR สั่งเองได้เลย ลดเวลาพนักงานได้เยอะ และออเดอร์ผิดพลาดน้อยลงมาก",
    bg: "#FFF0E8",
    color: "#FF6B2B",
  },
  {
    name: "คุณนงนุช ธีระวัฒน์",
    role: "เจ้าของร้าน Cafe Nong ลาดพร้าว",
    avatar: "นน",
    rating: 5,
    text: "ชอบมากระบบคิวกาแฟ ลูกค้ารับรหัสคิวแล้วรอตามที่นั่งได้เลย ไม่ต้องยืนต่อคิว แถมยังดูรายงานยอดขายแต่ละเมนูได้ด้วย รู้เลยว่าเมนูไหนขายดีที่สุด",
    bg: "#EFF6FF",
    color: "#3B82F6",
  },
  {
    name: "คุณวิชัย แสงสุวรรณ",
    role: "MD, Yakiniku Buffet Group (5 สาขา)",
    avatar: "วช",
    rating: 5,
    text: "บริหาร 5 สาขาพร้อมกันง่ายมาก ดูยอดขายรวมและแยกสาขาได้ทันที รู้ว่าสาขาไหนขายดี สาขาไหนต้องปรับปรุง ทีมซัพพอร์ต FoodStory ตอบเร็วมาก แนะนำเลย",
    bg: "#ECFDF5",
    color: "#10B981",
  },
  {
    name: "คุณพรพิมล เจริญสุข",
    role: "เจ้าของร้าน Street Food วงเวียน 22",
    avatar: "พพ",
    rating: 5,
    text: "เพิ่งเปิดร้าน ยังไม่ค่อยรู้เรื่องเทคโนโลยี แต่ FoodStory ตั้งค่าง่ายมาก ทีมมาช่วยสอนให้ที่ร้านเลย ตอนนี้รับออเดอร์และออกบิลผ่านแอปได้คล่องแล้ว",
    bg: "#F5F3FF",
    color: "#8B5CF6",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
            10,000+ ร้านอาหารเชื่อใจ FoodStory
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            เจ้าของร้านพูดถึงเรา
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            ร้านอาหารทั่วไทยใช้ FoodStory เพื่อเพิ่มประสิทธิภาพและยอดขาย
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.bg, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "ร้านอาหารที่ใช้งาน" },
            { value: "4.8 / 5", label: "คะแนนเฉลี่ยจาก App Store" },
            { value: "99.9%", label: "Uptime ตลอดปี" },
            { value: "< 2 นาที", label: "เวลาตอบกลับซัพพอร์ต" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
