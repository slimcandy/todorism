import React from "react";
import { ZoomIcon } from "../../icons";
import { SearchBarProps } from "./types";

const SearchBar = (props: SearchBarProps) => {
  const { placeholder, value, onChange, onSubmit, className = "" } = props;
  return (
    <form onSubmit={onSubmit}>
      <label
        className={`relative text-dark-2 bg-black-2 hover:text-dark-3 focus-within:text-dark-3 focus-within:placeholder:text-dark-3 ${className}`}
      >
        <ZoomIcon
          className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-4"
          size={20}
        />
        <input
          type="search"
          placeholder={placeholder}
          className="input w-full max-w-xs text-current pl-12 h-9 bg-black-2 text-white placeholder:text-dark-2 hover:placeholder:text-dark-3 focus:placeholder:text-white"
          onChange={onChange}
          value={value}
        />
      </label>
    </form>
  );
};
export default SearchBar;