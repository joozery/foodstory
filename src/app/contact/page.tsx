"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const provinces = [
  "กรุงเทพมหานคร","กระบี่","กาญจนบุรี","กาฬสินธุ์","กำแพงเพชร","ขอนแก่น","จันทบุรี",
  "ฉะเชิงเทรา","ชลบุรี","ชัยนาท","ชัยภูมิ","ชุมพร","เชียงราย","เชียงใหม่","ตรัง","ตราด",
  "ตาก","นครนายก","นครปฐม","นครพนม","นครราชสีมา","นครศรีธรรมราช","นครสวรรค์","นนทบุรี",
  "นราธิวาส","น่าน","บึงกาฬ","บุรีรัมย์","ปทุมธานี","ประจวบคีรีขันธ์","ปราจีนบุรี","ปัตตานี",
  "พระนครศรีอยุธยา","พะเยา","พังงา","พัทลุง","พิจิตร","พิษณุโลก","เพชรบุรี","เพชรบูรณ์",
  "แพร่","ภูเก็ต","มหาสารคาม","มุกดาหาร","แม่ฮ่องสอน","ยโสธร","ยะลา","ร้อยเอ็ด","ระนอง",
  "ระยอง","ราชบุรี","ลพบุรี","ลำปาง","ลำพูน","เลย","ศรีสะเกษ","สกลนคร","สงขลา","สตูล",
  "สมุทรปราการ","สมุทรสงคราม","สมุทรสาคร","สระแก้ว","สระบุรี","สิงห์บุรี","สุโขทัย",
  "สุพรรณบุรี","สุราษฎร์ธานี","สุรินทร์","หนองคาย","หนองบัวลำภู","อ่างทอง","อำนาจเจริญ",
  "อุดรธานี","อุตรดิตถ์","อุทัยธานี","อุบลราชธานี",
];

const extraFeatures = [
  "Mobile Order (สแกนสั่ง)",
  "CRM (ระบบสมาชิก)",
  "รับบัตรเครดิต/E-wallet",
  "รับ QR พร้อมเพย์",
  "ระบบจองโต๊ะ (Reservation)",
];

const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm bg-white focus:outline-none focus:border-[#FF6231] focus:ring-1 focus:ring-[#FF6231] transition-all placeholder-[#CBD5E1]";
const labelClass = "block text-sm font-semibold text-[#334155] mb-1.5";

export default function ContactPage() {
  const [features, setFeatures] = useState<string[]>([]);

  function toggleFeature(f: string) {
    setFeatures((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 lg:pt-32">

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FFF8F5] to-white py-10 lg:py-14 border-b border-[#FFE4D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block text-xs font-bold text-[#FF6231] uppercase tracking-widest bg-[#FFF0EB] px-3 py-1.5 rounded-full mb-4">
              ลงทะเบียนรับการติดต่อจากพนักงานขาย
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3">
              เริ่มต้นกับ FoodStory POS
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] max-w-xl mx-auto">
              กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </section>

        {/* Main */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

              {/* ── Form ── */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8">
                  <h2 className="text-lg font-bold text-[#0F172A] mb-6 pb-4 border-b border-[#F1F5F9]">
                    แบบฟอร์มลงทะเบียนติดต่อพนักงานขาย
                  </h2>

                  <form className="space-y-5">
                    {/* ชื่อ */}
                    <div>
                      <label className={labelClass}>ชื่อ-นามสกุล ผู้ติดต่อ <span className="text-[#FF6231]">*</span></label>
                      <input type="text" placeholder="ชื่อ-นามสกุล" className={inputClass} required />
                    </div>

                    {/* เบอร์โทร */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>เบอร์โทรศัพท์ <span className="text-[#FF6231]">*</span></label>
                        <input type="tel" placeholder="เบอร์โทรติดต่อ" className={inputClass} required />
                      </div>
                      <div>
                        <label className={labelClass}>เบอร์โทรศัพท์สำรอง</label>
                        <input type="tel" placeholder="เบอร์ติดต่อสำรอง (ถ้ามี)" className={inputClass} />
                      </div>
                    </div>

                    {/* LINE ID */}
                    <div>
                      <label className={labelClass}>LINE ID (ไลน์ไอดี)</label>
                      <input type="text" placeholder="ไลน์ไอดี" className={inputClass} />
                    </div>

                    {/* จังหวัด / อำเภอ */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>จังหวัด <span className="text-[#FF6231]">*</span></label>
                        <select className={inputClass} required defaultValue="">
                          <option value="" disabled>เลือกจังหวัด</option>
                          {provinces.map((p) => <option key={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>อำเภอ <span className="text-[#FF6231]">*</span></label>
                        <input type="text" placeholder="ระบุอำเภอ/เขต" className={inputClass} required />
                      </div>
                    </div>

                    {/* จำนวนสาขา */}
                    <div>
                      <label className={labelClass}>จำนวนสาขา</label>
                      <select className={inputClass} defaultValue="1-5 สาขา">
                        <option>1-5 สาขา</option>
                        <option>6-10 สาขา</option>
                        <option>11-20 สาขา</option>
                        <option>มากกว่า 20 สาขา</option>
                      </select>
                    </div>

                    {/* ต้องการติดต่อเรื่องใด */}
                    <div>
                      <label className={labelClass}>ท่านต้องการติดต่อเรื่องใด <span className="text-[#FF6231]">*</span></label>
                      <select className={inputClass} required defaultValue="">
                        <option value="" disabled>กรุณาเลือก</option>
                        <option>สนใจสมัครใช้งาน</option>
                        <option>ขอใบเสนอราคา</option>
                        <option>ต้องการสาธิตระบบ</option>
                        <option>อัปเกรดแพ็กเกจ</option>
                        <option>สั่งซื้ออุปกรณ์ (Hardware)</option>
                        <option>อื่นๆ</option>
                      </select>
                    </div>

                    {/* POS ระบบใด */}
                    <div>
                      <label className={labelClass}>ท่านใช้ POS ระบบใดอยู่ <span className="text-[#FF6231]">*</span></label>
                      <select className={inputClass} required defaultValue="">
                        <option value="" disabled>กรุณาเลือก</option>
                        <option>ยังไม่มีระบบ POS</option>
                        <option>FoodStory (เวอร์ชันเก่า)</option>
                        <option>ระบบ POS อื่น</option>
                        <option>ไม่ทราบ</option>
                      </select>
                    </div>

                    {/* ระยะเวลาเปิดร้าน */}
                    <div>
                      <label className={labelClass}>ระยะเวลาในการเปิดร้าน <span className="text-[#FF6231]">*</span></label>
                      <select className={inputClass} required defaultValue="">
                        <option value="" disabled>กรุณาเลือก</option>
                        <option>กำลังจะเปิดร้าน</option>
                        <option>น้อยกว่า 1 ปี</option>
                        <option>1–3 ปี</option>
                        <option>3–5 ปี</option>
                        <option>มากกว่า 5 ปี</option>
                      </select>
                    </div>

                    {/* ฟีเจอร์เสริม */}
                    <div>
                      <label className={labelClass}>ฟีเจอร์เสริมที่ท่านสนใจ</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                        {extraFeatures.map((f) => {
                          const checked = features.includes(f);
                          return (
                            <button
                              key={f}
                              type="button"
                              onClick={() => toggleFeature(f)}
                              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-sm font-medium text-left transition-all"
                              style={{
                                borderColor: checked ? "#FF6231" : "#E2E8F0",
                                background: checked ? "#FFF0EB" : "#F8FAFC",
                                color: checked ? "#FF6231" : "#475569",
                              }}
                            >
                              <span
                                className="w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all"
                                style={{
                                  borderColor: checked ? "#FF6231" : "#CBD5E1",
                                  background: checked ? "#FF6231" : "white",
                                }}
                              >
                                {checked && (
                                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                              {f}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-orange text-white font-semibold py-3.5 rounded-xl text-sm shadow-sm mt-2"
                    >
                      ส่งข้อมูลเพื่อให้พนักงานติดต่อกลับ
                    </button>
                    <p className="text-center text-xs text-[#94A3B8]">
                      ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง · ข้อมูลของคุณปลอดภัยและเป็นความลับ
                    </p>
                  </form>
                </div>
              </div>

              {/* ── Contact info ── */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-lg font-bold text-[#0F172A]">ช่องทางติดต่อ</h2>
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    title: "โทรศัพท์", detail: "02-038-7444", sub: "จ–ศ 9:00–18:00 น.",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
                    title: "LINE Official", detail: "@wongnaipos", sub: "ตอบกลับภายใน 2 นาที",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    title: "อีเมล", detail: "pos@wongnai.com", sub: "ตอบกลับภายใน 24 ชม.",
                  },
                  {
                    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                    title: "ที่อยู่", detail: "บริษัท วงใน มีเดีย จำกัด", sub: "กรุงเทพมหานคร ประเทศไทย",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <div className="w-9 h-9 rounded-lg bg-[#FFF0EB] flex items-center justify-center shrink-0 text-[#FF6231]">
                      <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">{item.title}</div>
                      <div className="text-sm font-semibold text-[#0F172A] mt-0.5">{item.detail}</div>
                      <div className="text-xs text-[#64748B]">{item.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Login CTA */}
                <div className="mt-6 p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <p className="text-sm font-semibold text-[#0F172A] mb-1">มีบัญชีอยู่แล้ว?</p>
                  <p className="text-xs text-[#64748B] mb-3">เข้าสู่ระบบ FoodStory Owner เพื่อจัดการร้านของคุณ</p>
                  <a
                    href="https://owner.foodstory.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6231] hover:text-[#E54E1F] transition-colors"
                  >
                    เข้าสู่ระบบ Owner Portal
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
