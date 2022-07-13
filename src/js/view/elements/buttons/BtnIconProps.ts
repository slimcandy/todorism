import React from "react";

type BtnType = JSX.IntrinsicElements["button"]["type"];

export interface BtnIconProps {
  icon: React.ReactNode;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
}
