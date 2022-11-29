import React, { KeyboardEvent, useState } from "react";
import { ICounterProps } from "./CounterProps";
import { TextBodyStandard } from "../typography";
import { PlusIcon } from "../../icons";

export const Counter = (props: ICounterProps) => {
  const { label, value, positive, onChange } = props;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const regex = /[0-9]|\./;

    if (!regex.test(key)) {
      e.preventDefault();
    }
  };

  const [currValue, setCurrValue] = useState("0");

  const decrease = () => {
    const newValue = parseInt(currValue, 10) - 1;
    setCurrValue(newValue.toString());
    onChange(currValue);
  };

  const increase = () => {
    const newValue = parseInt(currValue, 10) + 1;
    setCurrValue(newValue.toString());
    onChange(currValue);
  };

  return (
    <div>
      <div>
        {label && (
          <TextBodyStandard className="block dark:text-dark-3 mb-2">
            {label}
          </TextBodyStandard>
        )}
        <div className="flex flex-row items-center w-full">
          <button
            className="btn btn-secondary btn-square
                      rounded-xl
                      dark:focus:bg-black-4 dark:focus-visible:bg-black-4
                      hover:bg-black-3 dark:hover:bg-black-3
                      focus:bg-dark-1 focus-visible:bg-dark-4
                      normal-case mr-2"
            onClick={() => decrease()}
          >
            &#8212;
          </button>

          <input
            value={value}
            className="flex h-[55px] text-center w-full rounded-lg bg-dark-2 text-light-4 focus:outline-none"
            type="number"
            min={positive ? 0 : undefined}
            // onChange={(e) => setCurrValue(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />

          <button
            className="btn btn-secondary btn-square
                        rounded-xl
                        dark:focus:bg-black-4 dark:focus-visible:bg-black-4
                        hover:bg-black-3 dark:hover:bg-black-3
                        focus:bg-dark-1 focus-visible:bg-dark-4
                        normal-case ml-2"
            onClick={() => increase()}
          >
            <PlusIcon size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
