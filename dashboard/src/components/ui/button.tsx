// PATH: dashboard/src/components/ui/button.tsx
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`button button--${variant} ${className}`.trim()}
    {...props}
  >
    {children}
  </button>
);
