import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value: string | number;
  readonly?: InputHTMLAttributes<HTMLInputElement>["readOnly"];
  title?: InputHTMLAttributes<HTMLInputElement>["title"];
  label?: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  type?: "date" | "email" | "number" | "time";
  icon?: React.ReactNode;
  isIconLeft?: boolean;
  min?: string;
  onChange: (value: string) => void;
  onEnter?: (value?: any) => void;
  isFocused?: boolean;
  onClick?: (value: string) => void;
}
