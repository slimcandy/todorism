import React, { memo, useId, useRef } from "react";
import { classesOf } from "../../../../utils";
import { TextBodyStandard } from "../../typography";
import { InputProps } from "../InputProps";

export function Input(props: InputProps) {
  const {
    value = "",
    readonly,
    title,
    placeholder,
    label,
    className = "",
    inputClassName = "",
    disabled = false,
    icon,
    isIconLeft = false,
    onChange,
    onClick,
    type,
    isFocused,
  } = props;

  const id = useId();
  const refInput = useRef<HTMLInputElement>(null);

  if (isFocused) {
    refInput?.current?.focus();
  }

  const iconClasses = classesOf(
    "absolute top-1/2 transform -translate-y-1/2",
    !isIconLeft && "right-4",
    isIconLeft && "left-4",
    disabled && "text-dark-4 dark:text-black-3",
    !!value && "text-dark-3"
  );

  const inputClasses = classesOf(
    "input w-full h-11",
    "focus:outline-none bg-light-2 text-black-4 dark:bg-black-2 dark:text-light-0",
    "placeholder:text-dark-4 placeholder:dark:text-dark-2",
    "disabled:placeholder:text-black-3 disabled:placeholder:opacity-20",
    "disabled:dark:text-black-3 disabled:dark:placeholder:text-black-3 disabled:dark:bg-black-2 disabled:text-dark-4 disabled:bg-light-2 disabled:border-none",
    "focus:placeholder:opacity-0",
    "invalid:border-red-1 invalid:dark:border-red-1",
    isIconLeft && "pl-11 pr-3",
    !isIconLeft && type !== "date" && "pr-11 pl-3",
    !disabled &&
      "hover:placeholder:text-dark-3 hover:dark:placeholder:text-dark-3 hover:text-dark-3"
  );

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  function handleInputClick(event: React.MouseEvent<HTMLInputElement>) {
    event.stopPropagation();
    onClick?.(value.toString());
  }

  return (
    <>
      {label && (
        <label className="mb-2 block" htmlFor={id}>
          <TextBodyStandard className="dark:text-dark-3">
            {label}
          </TextBodyStandard>
        </label>
      )}
      <div
        className={`relative rounded-lg    
        text-dark-4 dark:text-dark-2 
        bg-light-2 dark:bg-black-2 
        hover:text-dark-3 hover:dark:text-dark-3
        focus-within:text-dark-3 focus-within:dark:text-dark-3 
        ${className}`}
      >
        {icon && <div className={iconClasses}> {icon} </div>}

        <input
          ref={refInput}
          id={id}
          type={type}
          onChange={handleOnChange}
          onClick={handleInputClick}
          className={`${inputClasses} ${inputClassName}`}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          title={title}
        />
      </div>
    </>
  );
}

export const MemoInput = memo(Input);
