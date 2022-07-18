import React, { memo } from "react";

type InputProps = {
  type: string;
  title?: string;
  placeholder?: string;
  state?: "focus" | "active" | "disabled" | "error"
  className?: string
};

export const Input = memo((props: InputProps) => {
  const { type, title = "", placeholder = "", state, className = "" } = props;

  const disabled = state === "disabled" || undefined

  return (
    <label className={`block ${className}`}>
      {title && (
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {title}
        </span>
      )}
      <input
        type={type}
        name={type}
        className="mt-1 px-4 py-3
                 bg-light-2 dark:bg-black-2
                 focus:outline-none focus:border-none shadow-none
                 block w-full rounded-lg
                 border-none
                 placeholder-dark-4 dark:placeholder-dark-2
                 hover:placeholder-dark-3 dark:hover:placeholder-black-2
                 disabled:placeholder-dark-4 dark:disabled:placeholder-black-3"
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
});
