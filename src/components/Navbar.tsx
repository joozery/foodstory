"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FF6B2B" }}>
              <span className="text-white font-bold text-sm">FS</span>
            </div>
            <span className="font-bold text-xl" style={{ color: "#FF6B2B" }}>FoodStory</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">ฟีเจอร์</a>
            <a href="#restaurant-types" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">ประเภทร้านค้า</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">วิธีการใช้งาน</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">ราคา</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">รีวิว</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              เข้าสู่ระบบ
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: "#FF6B2B" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E85A1E")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FF6B2B")}
            >
              ทดลองใช้ฟรี
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#features" className="block text-gray-600 font-medium py-2" onClick={() => setMenuOpen(false)}>ฟีเจอร์</a>
          <a href="#restaurant-types" className="block text-gray-600 font-medium py-2" onClick={() => setMenuOpen(false)}>ประเภทร้านค้า</a>
          <a href="#how-it-works" className="block text-gray-600 font-medium py-2" onClick={() => setMenuOpen(false)}>วิธีการใช้งาน</a>
          <a href="#pricing" className="block text-gray-600 font-medium py-2" onClick={() => setMenuOpen(false)}>ราคา</a>
          <a href="#testimonials" className="block text-gray-600 font-medium py-2" onClick={() => setMenuOpen(false)}>รีวิว</a>
          <div className="pt-3 flex flex-col gap-2">
            <a href="#" className="text-center text-gray-700 font-medium py-2 border border-gray-200 rounded-lg">เข้าสู่ระบบ</a>
            <a
              href="#"
              className="text-center text-white font-semibold py-2 rounded-lg"
              style={{ backgroundColor: "#FF6B2B" }}
            >
              ทดลองใช้ฟรี
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
