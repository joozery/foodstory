"use client";
import CurvedLoop from "@/components/ui/CurvedLoop";

export default function HomeCurvedDivider() {
  return (
    <div className="bg-[#080D17] w-full">
      <CurvedLoop
        marqueeText="Wongnai POS ✦ ระบบ POS ร้านอาหาร ✦ จัดการร้านครบวงจร ✦ รับออเดอร์ง่าย ✦ ชำระเงินทุกช่องทาง ✦"
        speed={2}
        curveAmount={280}
        direction="left"
        interactive={false}
        className="fill-white"
      />
    </div>
  );
}
