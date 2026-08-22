interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "dark" | "green" | "blue" | "neutral";
  className?: string;
}

const variants = {
  orange: "bg-[#FFF0EB] text-[#FF6231]",
  dark: "bg-[#0F1824] text-white",
  green: "bg-[#ECFDF5] text-[#10B981]",
  blue: "bg-[#EFF6FF] text-[#3B82F6]",
  neutral: "bg-[#F1F5F9] text-[#475569]",
};

export function Badge({ children, variant = "orange", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-[#FFF0EB] text-[#FF6231] mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6231]" />
      {children}
    </div>
  );
}
