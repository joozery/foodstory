const types = [
  {
    emoji: "🍜",
    title: "ร้านอาหารทั่วไป",
    description: "จัดการโต๊ะ ออเดอร์ บิล ครบสูตร รองรับหลายหมวดเมนูและราคาพิเศษ",
    features: ["จัดการโต๊ะ", "ออเดอร์ผ่านแท็บเล็ต", "ออกบิล & พิมพ์ใบเสร็จ"],
  },
  {
    emoji: "☕",
    title: "ร้านกาแฟ & เบเกอรี่",
    description: "ระบบคิว แก้ไขตัวเลือกเครื่องดื่ม สูตรกาแฟ และบริหารวัตถุดิบ",
    features: ["ระบบคิวลูกค้า", "ตัวเลือกสินค้า", "สูตรวัตถุดิบ"],
  },
  {
    emoji: "🍖",
    title: "บุฟเฟ่ต์",
    description: "นับเวลาโต๊ะ กำหนดรอบ คิดราคาต่อหัว และจัดการรอบลูกค้าอัตโนมัติ",
    features: ["นับเวลาโต๊ะ", "คิดราคาต่อหัว", "กำหนดรอบบุฟเฟ่ต์"],
  },
  {
    emoji: "🛵",
    title: "Delivery & Food Truck",
    description: "รับออเดอร์จาก Grab, LINE MAN, Foodpanda และออเดอร์หน้าร้านในระบบเดียว",
    features: ["เชื่อมต่อ Delivery", "ติดตามออเดอร์", "พิมพ์ใบปะหน้า"],
  },
  {
    emoji: "⚡",
    title: "Fast Food & Counter Service",
    description: "รับออเดอร์เร็ว จอแสดงผลครัว ระบบคิว และ Self-order Kiosk",
    features: ["ออเดอร์เร็ว", "จอครัว KDS", "Self-order Kiosk"],
  },
  {
    emoji: "🏢",
    title: "แฟรนไชส์ & หลายสาขา",
    description: "บริหารทุกสาขาจากศูนย์กลาง ดูรายงานรวม ตั้งค่าเมนูและราคาแยกสาขา",
    features: ["รายงานรวมสาขา", "จัดการเมนูกลาง", "ตั้งค่าสิทธิ์พนักงาน"],
  },
];

export default function RestaurantTypes() {
  return (
    <section id="restaurant-types" className="py-20 lg:py-28" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#FFF0E8", color: "#FF6B2B" }}>
            เหมาะกับทุกประเภทร้าน
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ไม่ว่าจะร้านไหน ก็ใช้ FoodStory ได้
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            ปรับแต่งระบบให้เหมาะกับแต่ละประเภทร้าน ตั้งค่าง่าย ใช้งานได้เลย
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-default"
            >
              <div className="text-4xl mb-4">{type.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{type.description}</p>
              <div className="space-y-2">
                {type.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#FF6B2B" }} />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a
                  href="#"
                  className="text-sm font-semibold flex items-center gap-1 transition-colors"
                  style={{ color: "#FF6B2B" }}
                >
                  ดูฟีเจอร์เพิ่มเติม
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
