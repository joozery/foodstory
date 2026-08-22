export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FF6B2B 0%, #FF8C5A 60%, #FFB347 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 bg-white translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full opacity-5 bg-white" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6 bg-white/20 text-white">
              ทดลองใช้ฟรี ไม่ต้องใส่บัตรเครดิต
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              พร้อมยกระดับร้านอาหาร
              <br />
              ของคุณแล้วหรือยัง?
            </h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-10">
              เข้าร่วมกับร้านอาหารกว่า 10,000 แห่งทั่วไทยที่เลือกใช้ FoodStory จัดการธุรกิจให้ง่ายขึ้น ยอดขายดีขึ้น
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ color: "#FF6B2B" }}
              >
                ทดลองใช้ฟรี 30 วัน
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.17 8.17 0 004.77 1.52V6.9a4.85 4.85 0 01-1-.21z" />
                </svg>
                ติดตามบน TikTok
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {[
                { icon: "🛡️", text: "ข้อมูลปลอดภัย SSL" },
                { icon: "💳", text: "ไม่ต้องใช้บัตรเครดิต" },
                { icon: "❌", text: "ยกเลิกได้ทุกเมื่อ" },
                { icon: "🎧", text: "ซัพพอร์ต 24/7" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
