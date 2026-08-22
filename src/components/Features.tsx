const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "จัดการโต๊ะอาหาร",
    description: "แผนผังโต๊ะแบบ Drag & Drop ดูสถานะโต๊ะแบบ Real-time ย้ายโต๊ะและรวมบิลได้ง่าย",
    color: "#FF6B2B",
    bg: "#FFF0E8",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "E-Menu ดิจิทัล",
    description: "เมนูออนไลน์ที่ลูกค้าสแกน QR สั่งอาหารเองได้ อัปเดตราคาและเมนูได้ทันที",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "รับออเดอร์อาหาร",
    description: "รับออเดอร์ผ่านแท็บเล็ต มือถือ หรือ QR Code ส่งตรงครัวอัตโนมัติ ลดความผิดพลาด",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "E-Bill & ชำระเงิน",
    description: "ออกบิลดิจิทัล รองรับทุกช่องทางชำระ PromptPay, บัตรเครดิต, เงินสด และ Wallet",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "จัดการสต็อก",
    description: "ติดตามวัตถุดิบ ตั้งค่าแจ้งเตือนสต็อกต่ำ คำนวณต้นทุนอาหาร และสั่งซื้อวัตถุดิบออนไลน์",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "รายงานธุรกิจ",
    description: "Dashboard วิเคราะห์ยอดขาย เมนูขายดี พนักงานขยัน และเปรียบเทียบสาขา แบบ Real-time",
    color: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "CRM สมาชิก",
    description: "สะสมแต้ม บัตรสมาชิก โปรโมชั่น และส่ง Push Notification หาลูกค้าประจำ",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "จัดการหลายสาขา",
    description: "บริหารทุกสาขาจากหน้าจอเดียว ดูรายงานรวม ตั้งค่าราคาและเมนูแยกแต่ละสาขา",
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
            ฟีเจอร์ครบครัน
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ทุกฟีเจอร์ที่ร้านคุณต้องการ
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            FoodStory รวมเครื่องมือจัดการร้านอาหารไว้ในระบบเดียว ตั้งแต่การรับออเดอร์ ออกบิล ไปจนถึงวิเคราะห์ธุรกิจ
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: feature.bg, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
