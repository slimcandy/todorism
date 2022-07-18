import React from "react";

type InputProps = {
  type: string
  title?: string
  placeholder?: string
}

export const Input = (props: InputProps) => {
  const { type, title = "", placeholder = "" } = props;
  return (
    <label className="block">
      {title &&
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {title}
        </span>}
      <input type={type} name={type}
             className="mt-1 px-3 py-2 bg-white border shadow-sm
                 border-slate-300 placeholder-slate-400
                 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                 block w-full rounded-md sm:text-sm focus:ring-1
                 dark:bg-black-2 border-none outline-none"
             placeholder={placeholder} />
    </label>
  );
};