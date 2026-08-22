const steps = [
  {
    step: "01",
    title: "สมัครและตั้งค่าร้าน",
    description: "สมัครใช้งานฟรี ตั้งค่าเมนู กำหนดโต๊ะ และตั้งค่าพนักงาน ภายใน 30 นาที",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "ดาวน์โหลดแอปและเชื่อมอุปกรณ์",
    description: "ติดตั้งแอป FoodStory บน iPad หรือแท็บเล็ต Android เชื่อมต่อเครื่องพิมพ์ใบเสร็จ",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "เปิดร้านและรับออเดอร์",
    description: "ลูกค้าสั่งอาหารผ่าน QR Code หรือพนักงานรับออเดอร์ผ่านแท็บเล็ต ส่งครัวอัตโนมัติ",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "ดูรายงานและเติบโต",
    description: "ติดตามยอดขาย เมนูขายดี และต้นทุน วิเคราะห์ธุรกิจเพื่อตัดสินใจได้แม่นยำขึ้น",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
              เริ่มต้นง่าย ใช้งานสะดวก
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              เริ่มใช้งาน
              <br />
              ได้ภายใน 1 วัน
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              ไม่ต้องมีความรู้เทคนิค ทีม FoodStory พร้อมช่วยตั้งค่าและฝึกอบรมพนักงานให้ฟรี
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}
                    >
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 my-2" style={{ backgroundColor: "#FFD5BC" }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-bold mb-1" style={{ color: "#FF6B2B" }}>ขั้นตอนที่ {step.step}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF6B2B 0%, #FF8C5A 100%)" }}>
              <div className="relative z-10">
                <div className="text-white text-2xl font-bold mb-1">พร้อมเปิดร้าน</div>
                <div className="text-orange-200 text-sm mb-6">ตั้งค่าเสร็จแล้ว · วันนี้ 14:30 น.</div>

                {/* Mini interface mockup */}
                <div className="bg-white rounded-2xl p-4 mb-4">
                  <div className="text-xs text-gray-400 mb-3 font-medium">เมนูประจำวัน</div>
                  <div className="grid grid-cols-2 gap-2">
                    {["ผัดไทย ฿80", "ต้มยำ ฿120", "ข้าวผัด ฿70", "ก๋วยเตี๋ยว ฿60"].map((item, i) => (
                      <div key={i} className="bg-orange-50 rounded-lg p-2.5 text-xs font-medium text-gray-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4">
                  <div className="text-xs text-gray-400 mb-3 font-medium">สถานะโต๊ะ</div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 10 }, (_, i) => ({
                      id: i + 1,
                      busy: [1, 2, 4, 6, 7, 9].includes(i + 1),
                    })).map((t) => (
                      <div
                        key={t.id}
                        className="rounded p-1.5 text-center text-xs font-bold"
                        style={
                          t.busy
                            ? { backgroundColor: "#FFF0E8", color: "#FF6B2B" }
                            : { backgroundColor: "#F3F4F6", color: "#9CA3AF" }
                        }
                      >
                        {t.id}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 bg-white" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10 bg-white" />
            </div>

            {/* Support card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FFF0E8" }}>
                <span className="text-lg">🎧</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">ซัพพอร์ต 24/7</div>
                <div className="text-xs text-gray-500">ทีมช่วยเหลือพร้อมตลอด ทางไลน์ โทร และอีเมล</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
