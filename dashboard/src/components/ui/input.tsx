// PATH: dashboard/src/components/ui/input.tsx
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({
  className = "",
  ...props
}: InputProps) => (
  <input className={`input ${className}`.trim()} {...props} />
);
