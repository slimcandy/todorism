import React from "react";
import { IRadioProps } from "./RadioProps";
import { classesOf } from "../../../../utils";

export const Radio = (props: IRadioProps) => {
  const { name, value, onChange } = props;

  const radioClasses = classesOf(
    "radio radio-primary border-dark-2 transition-[background_box-shadow_0.2s_ease-in-out]",
    "checked:animate-[box-shadow-inset-pulse_0.2s_ease-in-out] checked:shadow-[inset_0_0_0_4px] checked:shadow-black-0 checked:bg-green-1 checked:border-green-1"
  );

  return (
    <input
      type="radio"
      name={name}
      className={radioClasses}
      checked={value}
      onChange={onChange}
    />
  );
};
