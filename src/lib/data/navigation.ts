export const productsLeftPanel = [
  { key: "pos", name: "POS", desc: "Wongnai POS — ระบบขายหน้าร้าน", href: "/products/pos" },
  { key: "delivery", name: "Food Delivery", desc: "รับออเดอร์เดลิเวอรีเข้า POS", href: "/products/delivery" },
  { key: "payment", name: "Payment Solution", desc: "รับชำระเงินทุกช่องทาง", href: "/products/payment" },
];

export const productsColumns = [
  {
    group: "ฟีเจอร์พื้นฐาน",
    badge: null,
    items: [
      { name: "รับออเดอร์หน้าร้าน (สั่ง–พักบิล–ปิดบิล)", href: "/features/pos" },
      { name: "ระบบจัดการโต๊ะ (ย้าย/รวมโต๊ะ)", href: "/features/table-management" },
      { name: "จัดการเมนูไม่จำกัด (TH/EN)", href: "/features/menu" },
      { name: "รายงานยอดขาย Real-time (POS Manager App)", href: "/features/report" },
      { name: "เชื่อมต่อ LINE MAN — ออเดอร์เข้า POS อัตโนมัติ", href: "/features/integration" },
      { name: "การสร้างโปรโมชั่น", href: "/features/promotion" },
      { name: "ระบบจัดการสต๊อกและวัตถุดิบ", href: "/features/inventory" },
      { name: "ออกใบกำกับภาษี (เต็ม + ย่อ)", href: "/features/tax-invoice" },
      { name: "QR PromptPay (ล็อกยอด)", href: "/features/payment" },
      { name: "กำหนดสิทธิ์พนักงาน", href: "/features/staff" },
    ],
  },
  {
    group: "Advanced · จัดการหน้าร้าน (Front of House)",
    badge: null,
    items: [
      { name: "Wongnai POS Pay", href: "/products/pos-pay" },
      { name: "LINE Pay EDC / LINE Pay miniEDC", href: "/products/line-pay" },
      { name: "Wongnai POS CRM", href: "/products/crm" },
      { name: "Mobile Order", href: "/features/mobile-order" },
      { name: "Wongnai POS Order & Pay", href: "/products/order-pay" },
      { name: "Wongnai POS Staff", href: "/products/staff" },
      { name: "Wongnai Reservations", href: "/products/reservations" },
      { name: "Queue Display", href: "/products/queue" },
      { name: "LINE MINI Eats", href: "/products/line-mini" },
    ],
  },
  {
    group: "Multi-Location Management",
    badge: "เฉพาะ iPad",
    items: [
      { name: "Master Catalog", href: "/products/master-catalog" },
      { name: "Business Intelligence", href: "/products/bi" },
      { name: "Standard Integration", href: "/products/integration" },
    ],
  },
];

type PanelItem = { name: string; href: string; sub?: boolean; desc?: string };
type PanelColumn = { group: string; badge?: string | null; items: PanelItem[]; note?: string; display?: "card" };

export const productsPanels: Record<string, PanelColumn[]> = {
  pos: productsColumns,
  delivery: [
    {
      group: "LINE MAN",
      badge: null,
      items: [
        { name: "Wongnai Merchant App — รับออเดอร์บนแอปเดียว", href: "/products/merchant-app", sub: true },
      ],
    },
    {
      group: "Sync POS (Wongnai POS)",
      badge: null,
      items: [
        { name: "LINE MAN — ออเดอร์เข้า POS อัตโนมัติ", href: "/products/line-man-sync", sub: true },
        { name: "Other (Multi-Channel) — เชื่อมหลายแพลตฟอร์ม", href: "/products/multi-channel", sub: true },
      ],
    },
  ],
  payment: [
    {
      group: "รับชำระผ่านบัตร & e-Wallet",
      badge: null,
      display: "card",
      items: [
        { name: "Wongnai POS Pay", href: "/products/pos-pay", desc: "รับบัตร พร้อมเพย์ และ e-Wallet ในเครื่องเดียว" },
        { name: "EDC", href: "/products/edc", desc: "เครื่องรูดบัตรเต็มรูปแบบ เชื่อมยอดกับ POS" },
      ],
      note: "สินค้ากลุ่มนี้เป็นตัวเดียวกับที่อยู่ในเมนู ฮาร์ดแวร์ — ที่นั่นดูสเปกเครื่องและราคา ที่นี่ดูวิธีรับชำระเงิน",
    },
    {
      group: "QR & อุปกรณ์พกพา",
      badge: null,
      display: "card",
      items: [
        { name: "miniEDC", href: "/products/mini-edc", desc: "เครื่องพกพา เหมาะกับร้านเล็กและหน้าร้านเคลื่อนที่" },
        { name: "QR Box", href: "/products/qr-box", desc: "กล่อง QR พร้อมเสียงแจ้งยอด ล็อกยอดอัตโนมัติ" },
      ],
    },
  ],
};

export const solutionsStartCards = [
  {
    badge: "แนะนำ",
    title: "ร้านเปิดใหม่",
    desc: "เริ่มต้นร้านอาหารของคุณให้ถูกตั้งแต่วันแรก",
    href: "/solutions/new-restaurant",
    image: "/pic/01.png",
  },
  {
    badge: "แนะนำ",
    title: "ย้ายมาใช้ Wongnai POS",
    desc: "ใช้ระบบเดิมอยู่? เราช่วยย้ายข้อมูลให้ครบ",
    href: "/solutions/migration",
    image: "/pic/03.png",
  },
];

export const solutionsTypeList = [
  { name: "Quick Service", href: "/solutions/qsr" },
  { name: "Full Service", href: "/solutions/full-service" },
  { name: "Cafe / Coffee", href: "/solutions/cafe" },
  { name: "Casual Restaurant", href: "/solutions/casual" },
  { name: "Street Food", href: "/solutions/street-food" },
  { name: "Bar", href: "/solutions/bar" },
  { name: "Buffet", href: "/solutions/buffet" },
];

export const solutionsOtherBiz = [
  { name: "JERA Cloud", desc: "คลินิกความงาม / คลินิกทั่วไป", href: "#" },
  { name: "JERA Dent", desc: "คลินิกทันตกรรม", href: "#" },
  { name: "Sherwe POS", desc: "ธุรกิจบริการ", href: "#" },
];

export const solutionsNav = [
  {
    group: "บริการด่วน",
    items: [
      { slug: "qsr", name: "QSR (Quick Service)", icon: "qsr", shortDesc: "รับออเดอร์เร็ว คิวลูกค้า Kiosk" },
      { slug: "food-truck", name: "Food Truck", icon: "truck", shortDesc: "เคลื่อนที่ง่าย ไม่ต้องมีไฟฟ้า" },
      { slug: "made-to-order", name: "ร้านตามสั่ง", icon: "forkknife", shortDesc: "จัดการออเดอร์หลายโต๊ะพร้อมกัน" },
      { slug: "noodle", name: "ร้านก๋วยเตี๋ยว", icon: "bowl", shortDesc: "ระบบเร็ว รองรับ Top-up" },
    ],
  },
  {
    group: "นั่งทานในร้าน",
    items: [
      { slug: "full-service", name: "Full Service", icon: "forkknife", shortDesc: "จัดการโต๊ะ Mobile Order ครบ" },
      { slug: "buffet", name: "บุฟเฟต์", icon: "buffet", shortDesc: "นับเวลา คิดราคาต่อหัว" },
      { slug: "japanese", name: "ร้านอาหารญี่ปุ่น", icon: "chopsticks", shortDesc: "สายพาน Kaiten รองรับ" },
      { slug: "bar", name: "บาร์ & ไนท์คลับ", icon: "wineglass", shortDesc: "แท็บเปิด Happy Hour" },
    ],
  },
  {
    group: "เครื่องดื่ม & ขนม",
    items: [
      { slug: "cafe", name: "คาเฟ่", icon: "coffee", shortDesc: "ระบบคิว สูตรกาแฟ Modifiers" },
      { slug: "bubble-tea", name: "ชานม & เครื่องดื่ม", icon: "drink", shortDesc: "ตัวเลือกเครื่องดื่ม หลายสาขา" },
      { slug: "bakery", name: "เบเกอรี่", icon: "bread", shortDesc: "สต็อกวัตถุดิบ พิมพ์ฉลาก" },
    ],
  },
  {
    group: "เชนและแฟรนไชส์",
    items: [
      { slug: "chain", name: "ร้านเชน & แฟรนไชส์", icon: "building", shortDesc: "บริหารหลายสาขาจากที่เดียว" },
    ],
  },
];

export const featuresNav = [
  {
    group: "การรับออเดอร์",
    items: [
      { slug: "pos", name: "POS ณ จุดขาย", icon: "pos", shortDesc: "ยืนยันออเดอร์ รับชำระเงิน" },
      { slug: "table-management", name: "จัดการโต๊ะ", icon: "table", shortDesc: "แผนผัง Drag & Drop" },
      { slug: "menu", name: "จัดการเมนู", icon: "menu", shortDesc: "หมวดหมู่ ราคา ตัวเลือก" },
      { slug: "mobile-order", name: "Mobile Order", icon: "mobile", shortDesc: "QR Code สั่งอาหารเอง" },
      { slug: "order-pay", name: "Order & Pay", icon: "orderpay", shortDesc: "สั่งและจ่ายในขั้นตอนเดียว" },
    ],
  },
  {
    group: "ลูกค้าสัมพันธ์",
    items: [
      { slug: "crm", name: "CRM & สมาชิก", icon: "users", shortDesc: "สะสมแต้ม บัตรสมาชิก" },
      { slug: "reservation", name: "จองโต๊ะ", icon: "calendar", shortDesc: "รับจองออนไลน์ จัดการรอบ" },
      { slug: "queue", name: "ระบบคิว", icon: "queue", shortDesc: "แจ้งเตือน SMS/LINE" },
      { slug: "promotion", name: "โปรโมชั่น", icon: "tag", shortDesc: "ส่วนลด คูปอง แฟลชดีล" },
    ],
  },
  {
    group: "การจัดการหลังบ้าน",
    items: [
      { slug: "inventory", name: "จัดการสต็อก", icon: "box", shortDesc: "วัตถุดิบ ต้นทุน แจ้งเตือน" },
      { slug: "report", name: "รายงานธุรกิจ", icon: "chart", shortDesc: "Dashboard Real-time" },
      { slug: "multi-branch", name: "หลายสาขา", icon: "branch", shortDesc: "บริหารทุกสาขาจากที่เดียว" },
      { slug: "integration", name: "การเชื่อมต่อ", icon: "plug", shortDesc: "Delivery Accounting API" },
    ],
  },
];

export const hardwareNav = {
  pos: {
    ipad: {
      name: "Wongnai POS iPad",
      desc: "รองรับ Multi-Location Management",
      href: "/hardware/ipad",
      image: "/pic/01.png",
    },
    android: {
      label: "Wongnai POS Android",
      items: [
        { name: "Pro Dual Screen", href: "/hardware/pro-dual", image: "/pic/02.png" },
        { name: "Pro Single Screen", href: "/hardware/pro-single", image: "/pic/03.png" },
        { name: "Standard Dual Screen", href: "/hardware/std-dual", image: "/pic/04.png" },
        { name: "Standard Single Screen", href: "/hardware/std-single", image: "/pic/05.png" },
        { name: "Flex", href: "/hardware/flex", image: "/pic/06.png" },
      ],
    },
  },
  payment: [
    { name: "EDC", href: "/hardware/edc", image: "/pic/02.png" },
    { name: "miniEDC", href: "/hardware/mini-edc", image: "/pic/04.png" },
    { name: "QR Box", href: "/hardware/qr-box", image: "/pic/06.png" },
  ],
  accessories: [
    { name: "Printer", href: "/hardware/printer" },
    { name: "Drawer", href: "/hardware/drawer" },
    { name: "Switch Hub", href: "/hardware/switch-hub" },
    { name: "Dongle", href: "/hardware/dongle" },
    { name: "Router", href: "/hardware/router" },
  ],
};

export const resourcesNav = {
  compare: [
    { name: "Wongnai POS vs POS ทั่วไป", href: "/compare/general" },
    { name: "Wongnai POS vs Ocha vs Super POS vs GPOS vs Feedme", href: "/compare/competitors" },
  ],
  knowledge: [
    { name: "Blog", href: "/articles" },
    { name: "Customer Stories", href: "/customer-stories" },
    { name: "Data Hub", href: "/data-hub" },
  ],
};
