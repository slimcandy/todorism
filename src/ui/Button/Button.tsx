import { ButtonHTMLAttributes } from "react";

export interface IButtonProps {
  readonly variant?: "primary" | "secondary";
  readonly children: React.ReactNode;
  readonly type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  readonly className?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  readonly onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Button = ({
  variant = "secondary",
  children,
  type = "button",
  className = "",
  onClick,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-slate-600 hover:text-slate-700 rounded-md py-2 px-1 focus:shadow-sm border-2 focus:border-slate-600 border-slate-300 hover:border-slate-400 focus:outline-none  ${
        variant === "primary"
          ? "bg-slate-200 hover:bg-slate-300 focus:bg-gray-400 focus:text-white"
          : "bg-white hover:bg-slate-100 focus:bg-gray-200"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
