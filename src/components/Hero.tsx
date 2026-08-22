"use client";
export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff8f5 0%, #fff 60%, #fff5f0 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "#FF6B2B" }}></span>
              ระบบ POS อันดับ 1 ของไทย
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              จัดการร้านอาหาร
              <br />
              <span style={{ color: "#FF6B2B" }}>ครบจบในที่เดียว</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              FoodStory ระบบ POS สำหรับร้านอาหารที่ครบวงจรที่สุด จัดการโต๊ะ รับออเดอร์ ออกบิล ดูสต็อก และรายงานธุรกิจ ทุกอย่างในแอปเดียว
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg"
                style={{ backgroundColor: "#FF6B2B" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E85A1E")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FF6B2B")}
              >
                ทดลองใช้ฟรี 30 วัน
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 text-gray-700 font-semibold px-7 py-3.5 rounded-xl text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ดูวิดีโอตัวอย่าง
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-500">ร้านอาหารที่ใช้งาน</div>
              </div>
              <div className="w-px bg-gray-200 self-stretch hidden sm:block" />
              <div>
                <div className="text-2xl font-bold text-gray-900">5 ล้าน+</div>
                <div className="text-sm text-gray-500">ออเดอร์ต่อเดือน</div>
              </div>
              <div className="w-px bg-gray-200 self-stretch hidden sm:block" />
              <div>
                <div className="text-2xl font-bold text-gray-900">4.8 ★</div>
                <div className="text-sm text-gray-500">คะแนนรีวิว</div>
              </div>
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">ยอดขายวันนี้</div>
                    <div className="text-2xl font-bold text-gray-900">฿ 24,580</div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-medium bg-green-50 px-2.5 py-1 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +12.5%
                  </div>
                </div>

                {/* Order status grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "โต๊ะที่เปิด", value: "8", color: "#FF6B2B", bg: "#FFF0E8" },
                    { label: "ออเดอร์รอส่ง", value: "12", color: "#3B82F6", bg: "#EFF6FF" },
                    { label: "โต๊ะว่าง", value: "4", color: "#10B981", bg: "#ECFDF5" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: item.bg }}>
                      <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Table grid */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 font-medium mb-3">แผนผังโต๊ะ</div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: "T01", status: "busy" },
                      { id: "T02", status: "busy" },
                      { id: "T03", status: "free" },
                      { id: "T04", status: "busy" },
                      { id: "T05", status: "free" },
                      { id: "T06", status: "busy" },
                      { id: "T07", status: "busy" },
                      { id: "T08", status: "free" },
                    ].map((table) => (
                      <div
                        key={table.id}
                        className="rounded-lg p-2 text-center text-xs font-semibold border"
                        style={
                          table.status === "busy"
                            ? { backgroundColor: "#FFF0E8", color: "#FF6B2B", borderColor: "#FFD5BC" }
                            : { backgroundColor: "#F9FAFB", color: "#9CA3AF", borderColor: "#E5E7EB" }
                        }
                      >
                        {table.id}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent orders */}
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-3">ออเดอร์ล่าสุด</div>
                  <div className="space-y-2">
                    {[
                      { table: "T01", item: "ผัดไทย x2, ต้มยำ x1", amount: "฿ 320", status: "กำลังทำ" },
                      { table: "T04", item: "ข้าวผัด x1, ไก่ทอด x2", amount: "฿ 280", status: "พร้อมส่ง" },
                    ].map((order, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold text-white px-2 py-0.5 rounded" style={{ backgroundColor: "#FF6B2B" }}>{order.table}</span>
                          <span className="text-xs text-gray-600">{order.item}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-900">{order.amount}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${order.status === "พร้อมส่ง" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3 w-48">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#ECFDF5" }}>
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">ชำระเงินสำเร็จ</div>
                  <div className="text-xs text-gray-400">โต๊ะ T03 · ฿ 560</div>
                </div>
              </div>

              {/* Floating sales card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#FFF0E8" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#FF6B2B" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">ยอดขายเดือนนี้</div>
                  <div className="text-sm font-bold text-gray-900">฿ 842,300</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
