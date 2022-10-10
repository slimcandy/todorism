import React from "react";
import { ICounterProps } from "./CounterProps";
import { TextBodyStandard } from "../typography";

export const Counter = (props: ICounterProps) => {
  const { label, value, onChange } = props;

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
          min="0"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};
