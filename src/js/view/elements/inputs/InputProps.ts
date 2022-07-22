import { InputHTMLAttributes } from "react";

export interface InputProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  className?: string,
  disabled?: boolean
  onChange?: (value?: string) => void;
}
