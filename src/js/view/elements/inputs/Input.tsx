import React from "react";
import { InputProps } from "./InputProps";

export const Input = (props: InputProps) => {
  const { placeholder, className = "", disabled = false } = props;

  return (
    <form>
      <label
        className={`relative text-dark-2 bg-black-2 hover:text-dark-3 
        focus-within:text-dark-3 focus-within:placeholder:text-dark-3 
        ${className}`}
      >
        <input
          className={`input w-full
                          py-3 h-11
                          focus:outline-none
                          
                          bg-light-2 text-black-4
                          dark:bg-black-2 dark:text-white
                          
                          placeholder:text-dark-4
                          placeholder:dark:text-dark-2 
                          hover:placeholder:text-dark-3
                          disabled:placeholder:text-black-3 disabled:placeholder:opacity-20
                          focus:dark:placeholder:text-white
                          
                          disabled:dark:text-black-3 disabled:dark:bg-black-2
                          disabled:text-dark-4 disabled:bg-light-2
                          disabled:border-none 
                          ${className}`}
          disabled={disabled}
          placeholder={placeholder}
        />
      </label>
    </form>
  );
};
