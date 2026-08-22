const integrations = [
  { name: "Grab Food", emoji: "🟢", desc: "รับออเดอร์ Delivery" },
  { name: "LINE MAN", emoji: "🟡", desc: "รับออเดอร์ Delivery" },
  { name: "Foodpanda", emoji: "🩷", desc: "รับออเดอร์ Delivery" },
  { name: "PromptPay", emoji: "💜", desc: "ชำระเงิน QR" },
  { name: "KBank", emoji: "🟢", desc: "รับชำระ EDC" },
  { name: "SCB", emoji: "🟣", desc: "รับชำระ EDC" },
  { name: "Lazada", emoji: "🟠", desc: "ขายออนไลน์" },
  { name: "Shopee", emoji: "🟠", desc: "ขายออนไลน์" },
  { name: "True Money", emoji: "🔴", desc: "ชำระเงิน Wallet" },
  { name: "LINE OA", emoji: "🟢", desc: "ส่งโปรโมชั่น" },
  { name: "QuickBooks", emoji: "🟢", desc: "ระบบบัญชี" },
  { name: "FlowAccount", emoji: "🔵", desc: "ออกใบกำกับภาษี" },
];

export default function Integrations() {
  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
            เชื่อมต่อง่าย ใช้งานได้เลย
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            เชื่อมต่อกับเครื่องมือที่คุณใช้อยู่
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            FoodStory เชื่อมต่อกับแพลตฟอร์ม Delivery ช่องทางชำระเงิน และระบบบัญชีชั้นนำ
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center cursor-default"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="text-sm font-semibold text-gray-900 mb-0.5">{item.name}</div>
              <div className="text-xs text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 transition-colors" style={{ color: "#FF6B2B" }}>
            ดู Integration ทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
