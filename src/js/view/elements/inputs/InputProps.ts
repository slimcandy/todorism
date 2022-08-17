import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value: string | number | undefined | null;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  isIconLeft?: boolean;
  onChange?: (value?: string) => void;
}
