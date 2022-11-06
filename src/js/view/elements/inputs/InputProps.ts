import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value: string | number;
  label?: string;
  className?: string;
  disabled?: boolean;
  type?: "date" | "email" | "number" | "time";
  icon?: React.ReactNode;
  isIconLeft?: boolean;
  onChange: (value: string) => void;
  onEnter?: (value?: any) => void;
  isFocused?: boolean;
}
