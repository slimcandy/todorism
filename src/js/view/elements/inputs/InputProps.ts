import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  isIconLeft?: boolean;
  onChange?: (value?: any) => void;
}
