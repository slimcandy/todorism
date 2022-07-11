import React from "react";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonPrimary = (props: BtnProps) => {
  const {children, type, className = "" } = props;
  return(
    <button className={`btn btn-primary ${className}`}
    type={type}>
      <TextBodyMedium>
        {children}
      </TextBodyMedium>
    </button>
  )
}