import { InputHTMLAttributes } from "react";

export interface TextAreaProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: string | null;
  label?: string;
  className?: string;
  disabled?: boolean;
  rows?: number;
  onChange?: (value?: any) => void;
}
