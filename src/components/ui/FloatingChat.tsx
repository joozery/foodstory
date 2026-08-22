"use client";
import { useState } from "react";

const channels = [
  {
    label: "LINE OA",
    href: "https://line.me/ti/p/~@wongnaipos",
    color: "#06C755",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>
    ),
  },
  {
    label: "โทร",
    href: "tel:020387444",
    color: "#FF6231",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://m.me/wongnai",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
      </svg>
    ),
  },
];

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">

      {/* Speed dial items */}
      {channels.map((ch, i) => (
        <a
          key={ch.label}
          href={ch.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 group"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
            transition: `opacity 0.25s ease ${(channels.length - 1 - i) * 0.06}s, transform 0.25s ease ${(channels.length - 1 - i) * 0.06}s`,
            pointerEvents: open ? "auto" : "none",
          }}
        >
          {/* Label */}
          <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}>
            {ch.label}
          </span>
          {/* Icon button */}
          <div
            className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
            style={{ background: ch.color }}
          >
            {ch.icon}
          </div>
        </a>
      ))}

      {/* Main toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: open ? "#1E293B" : "linear-gradient(135deg, #FF8040 0%, #FF5C1A 55%, #C83C0A 100%)" }}
        aria-label="ติดต่อเรา"
      >
        <svg
          className="w-6 h-6 text-white transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </button>

    </div>
  );
}
