import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const variantClasses = {
  primary: "btn-orange text-white",
  secondary: "bg-[#0F1824] hover:bg-[#1A2535] text-white shadow-sm",
  ghost: "text-[#FF6231] hover:bg-[#FFF0EB]",
  outline: "border border-[#E2E8F0] text-[#334155] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-base rounded-xl gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center font-semibold transition-all duration-150 cursor-pointer select-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

/* Link-style button */
interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export function ButtonLink({ variant = "primary", size = "md", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center font-semibold transition-all duration-150 cursor-pointer select-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
