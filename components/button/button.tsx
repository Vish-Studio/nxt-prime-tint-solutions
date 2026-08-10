import { ArrowRight, Phone } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: "arrow" | "phone";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-saffron text-black shadow-[0_18px_60px_rgba(0,0,0,0.14)] hover:brightness-95",
  secondary:
    "bg-white text-black shadow-[0_14px_50px_rgba(0,0,0,0.08)] hover:bg-zinc-100",
  ghost: "bg-transparent text-zinc-600 hover:text-black",
};

export const Button = ({
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
  ...props
}: ButtonProps) => {
  const Icon = icon === "phone" ? Phone : ArrowRight;

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
    </a>
  );
};
