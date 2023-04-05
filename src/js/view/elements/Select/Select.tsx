import React from "react";
import { useTranslation } from "react-i18next";
import { ISelectProps } from "./SelectProps";
import { TextBodyStandard } from "../typography";

export const Select = (props: ISelectProps) => {
  const { value, options = [], label, localizationPath, onChange } = props;

  const { t } = useTranslation();

  return (
    <label>
      {label && (
        <TextBodyStandard className="block dark:text-dark-3 mb-2">
          {label}
        </TextBodyStandard>
      )}
      <select
        className="select w-full bg-black-2 font-normal text-light-0 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {localizationPath ? t(`${localizationPath}.${option}`) : option}
          </option>
        ))}
      </select>
    </label>
  );
};
