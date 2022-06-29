import {
  ChangeEventHandler,
  FormEventHandler,
  InputHTMLAttributes,
} from "react";

export interface SearchBarProps {
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: InputHTMLAttributes<HTMLInputElement>["className"];
}
