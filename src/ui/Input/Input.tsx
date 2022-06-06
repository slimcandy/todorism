import { InputHTMLAttributes } from "react";

export interface IInputProps {
  readonly type?: InputHTMLAttributes<HTMLInputElement>["type"];
  readonly placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  readonly id?: InputHTMLAttributes<HTMLInputElement>["id"];
  readonly value?: InputHTMLAttributes<HTMLInputElement>["value"];
  readonly onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  readonly autoFocus?: InputHTMLAttributes<HTMLInputElement>["autoFocus"];
  readonly className?: InputHTMLAttributes<HTMLInputElement>["className"];
  readonly name?: InputHTMLAttributes<HTMLInputElement>["name"];
  readonly checked?: InputHTMLAttributes<HTMLInputElement>["checked"];
  readonly ref?: React.Ref<HTMLInputElement>;
}

const Input = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  autoFocus,
  className,
  name,
  ref,
  checked,
}: IInputProps) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      name={name}
      checked={checked}
      className={`text-slate-600 hover:text-slate-700 rounded-md py-2 px-1 focus:shadow-sm border-2 border-slate-300 hover:border-slate-400 focus:outline-none focus:border-slate-600 ${
        type === "checkbox"
          ? "appearance-none h-4 w-4 p-2 mx-2 rounded-full checked:bg-blue-400 checked:border-blue-500 focus:border-blue-800"
          : ""
      } ${className}`}
    />
  );
};

export default Input;
