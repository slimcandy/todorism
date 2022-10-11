import React, { KeyboardEvent } from "react";
import { ICounterProps } from "./CounterProps";
import { TextBodyStandard } from "../typography";

export const Counter = (props: ICounterProps) => {
  const { label, value, positive, onChange } = props;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const regex = /[0-9]|\./;

    if (!regex.test(key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <label>
        {label && (
          <TextBodyStandard className="block dark:text-dark-3 mb-2">
            {label}
          </TextBodyStandard>
        )}
        <input
          value={value}
          className="flex h-[55px] text-center w-full rounded-lg bg-dark-2 text-light-4 focus:outline-none"
          type="number"
          min={positive ? 0 : undefined}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </label>
    </div>
  );
};
