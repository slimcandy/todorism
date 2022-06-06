import { InputHTMLAttributes } from "react";

export interface IInputProps {
  readonly type?: InputHTMLAttributes<HTMLInputElement>["type"];
  readonly placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  readonly id?: InputHTMLAttributes<HTMLInputElement>["id"];
  readonly value?: InputHTMLAttributes<HTMLInputElement>["value"];
  readonly onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  readonly autoFocus?: InputHTMLAttributes<HTMLInputElement>["autoFocus"];
  readonly className?: InputHTMLAttributes<HTMLInputElement>["className"];
}

const Input = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  autoFocus,
  className,
}: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      className={`text-slate-600 hover:text-slate-700 rounded-md py-2 px-1 focus:shadow-sm border-2 border-slate-300 hover:border-slate-400 focus:outline-none focus:border-slate-600 ${className}`}
    />
  );
};

export default Input;
