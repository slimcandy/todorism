import { InputHTMLAttributes } from "react";

export interface TextAreaProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: string | null;
  className?: string;
  disabled?: boolean;
  rows?: number;
  onChange?: (value?: any) => void;
}
