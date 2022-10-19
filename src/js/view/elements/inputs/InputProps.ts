import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"] | null;
  readonly?: InputHTMLAttributes<HTMLInputElement>["readOnly"];
  title?: InputHTMLAttributes<HTMLInputElement>["title"];
  label?: string;
  inputId: string;
  className?: string;
  disabled?: boolean;
  type?: "date" | "email" | "number" | "time";
  icon?: React.ReactNode;
  isIconLeft?: boolean;
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
}
