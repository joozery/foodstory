import Link from "next/link";
import { BrandIcon } from "@/components/ui/Icon";

const nav = [
  {
    title: "สินค้าและบริการ",
    links: [
      { label: "ระบบ POS", href: "/features" },
      { label: "QR Order", href: "/features#qr-order" },
      { label: "จัดการโต๊ะ", href: "/features#table" },
      { label: "บริหารสต๊อก", href: "/features#stock" },
      { label: "รายงานยอดขาย", href: "/features#report" },
      { label: "ฮาร์ดแวร์", href: "/hardware" },
      { label: "ราคาและแพ็กเกจ", href: "/pricing" },
    ],
  },
  {
    title: "ประเภทร้าน",
    links: [
      { label: "ร้านอาหารทั่วไป", href: "/solutions/restaurant" },
      { label: "คาเฟ่และเบเกอรี่", href: "/solutions/cafe" },
      { label: "ชาบูและปิ้งย่าง", href: "/solutions/shabu" },
      { label: "บุฟเฟ่ต์", href: "/solutions/buffet" },
      { label: "ฟู้ดทรัค", href: "/solutions/foodtruck" },
      { label: "Chain & Enterprise", href: "/solutions/chain" },
    ],
  },
  {
    title: "ช่วยเหลือ",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/help#faq" },
      { label: "วิดีโอสอน", href: "/help#tutorials" },
      { label: "อัปเกรดแพ็กเกจ", href: "#" },
      { label: "สั่ง Hardware เพิ่ม", href: "#" },
    ],
  },
  {
    title: "บริษัท",
    links: [
      { label: "เกี่ยวกับเรา", href: "/about" },
      { label: "Why Wongnai POS", href: "/why-wongnai-pos" },
      { label: "ร่วมงานกับเรา", href: "#" },
      { label: "ติดต่อเรา", href: "/contact" },
      { label: "ขอใบเสนอราคา", href: "/get-quote" },
    ],
  },
];

const socials = [
  { brand: "facebook", href: "#" },
  { brand: "instagram", href: "#" },
  { brand: "youtube", href: "#" },
  { brand: "tiktok", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #0A1120 0%, #060B14 100%)" }}>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <img src="/logo/WNFS_Logo.svg" alt="Wongnai FoodStory POS" className="h-7 w-auto mb-4" />
            <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-xs">
              ระบบ POS ครบวงจรสำหรับร้านอาหารทุกประเภท<br />บริษัทในกลุ่ม LINE MAN Wongnai
            </p>

            {/* App download */}
            <div className="flex flex-col gap-2 mb-6">
              <a href="#" aria-label="Download on the App Store">
                <img src="/logo/apple_btn-new.svg" alt="App Store" className="h-9 w-auto" />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img src="/logo/googleplay_btn-color-new.svg" alt="Google Play" className="h-9 w-auto" />
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.brand}
                  href={s.href}
                  aria-label={s.brand}
                  className="w-8 h-8 rounded-lg bg-[#1A2535] hover:bg-[#FF6231] flex items-center justify-center transition-colors group"
                >
                  <BrandIcon brand={s.brand} variant="default" className="h-3.5 w-3.5 object-contain" alt={s.brand} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#475569] hover:text-[#FF6231] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A2535]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#334155]">
            © 2025 Wongnai Media Co., Ltd. (LINE MAN Wongnai) · สงวนลิขสิทธิ์
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {[
              { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
              { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
              { label: "Cookie Policy", href: "#" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-[#334155] hover:text-[#64748B] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
