const footerLinks = {
  product: {
    title: "ผลิตภัณฑ์",
    links: [
      { label: "ฟีเจอร์ทั้งหมด", href: "#" },
      { label: "ราคา", href: "#" },
      { label: "ดาวน์โหลดแอป", href: "#" },
      { label: "Hardware", href: "#" },
      { label: "API & Integration", href: "#" },
    ],
  },
  solutions: {
    title: "โซลูชัน",
    links: [
      { label: "ร้านอาหารทั่วไป", href: "#" },
      { label: "ร้านกาแฟ", href: "#" },
      { label: "บุฟเฟ่ต์", href: "#" },
      { label: "Delivery", href: "#" },
      { label: "แฟรนไชส์", href: "#" },
    ],
  },
  company: {
    title: "บริษัท",
    links: [
      { label: "เกี่ยวกับเรา", href: "#" },
      { label: "ข่าวสาร", href: "#" },
      { label: "ร่วมงานกับเรา", href: "#" },
      { label: "พาร์ทเนอร์", href: "#" },
      { label: "ติดต่อเรา", href: "#" },
    ],
  },
  support: {
    title: "ช่วยเหลือ",
    links: [
      { label: "ศูนย์ช่วยเหลือ", href: "#" },
      { label: "คู่มือการใช้งาน", href: "#" },
      { label: "วิดีโอสอน", href: "#" },
      { label: "Line Official", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FF6B2B" }}>
                <span className="text-white font-bold text-sm">FS</span>
              </div>
              <span className="font-bold text-xl text-white">FoodStory</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              ระบบ POS ครบวงจรสำหรับร้านอาหารทุกประเภท ช่วยให้การบริหารร้านง่ายขึ้น
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["f", "ig", "yt", "tik"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors text-xs font-bold text-gray-400 hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col, index) => (
            <div key={index}>
              <div className="text-sm font-semibold text-white mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © 2024 FoodStory by Living Mobile Co., Ltd. สงวนลิขสิทธิ์
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-gray-400 transition-colors">เงื่อนไขการใช้งาน</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
