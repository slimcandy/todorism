import { FormEventHandler, InputHTMLAttributes } from "react";

export interface SearchBarProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  onChange?: (value?: string) => void;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: InputHTMLAttributes<HTMLInputElement>["className"];
  disabled?: InputHTMLAttributes<HTMLInputElement>["disabled"];
}
