import React, { useId } from "react";
import { TextAreaProps } from "./TextAreaProps";
import { TextBodyStandard } from "../../typography";

export const TextArea = (props: TextAreaProps) => {
  const {
    value,
    placeholder,
    label,
    className = "",
    disabled = false,
    onChange,
    rows,
  } = props;

  const id = useId();

  const firstValue =
    String(value) === "undefined" || String(value) === "null"
      ? ""
      : String(value);
  const [localValue, setLocalValue] = React.useState(firstValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <>
      {label && (
        <label className="mb-2 block" htmlFor={id}>
          <TextBodyStandard className="dark:text-dark-3">
            {label}
          </TextBodyStandard>
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        onChange={handleOnChange}
        disabled={disabled}
        placeholder={placeholder}
        value={localValue}
        className={`textarea w-full px-4 py-3
          focus:outline-none bg-light-2 text-black-4
          dark:bg-black-2 dark:text-light-0
          placeholder:text-dark-4 placeholder:dark:text-dark-2
          focus:placeholder:opacity-0
          hover:placeholder:text-dark-3 hover:dark:placeholder:text-dark-3
          hover:text-dark-3 ${className}`}
      />
    </>
  );
};
