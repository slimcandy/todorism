import React from "react";

export interface IBtnIconProps {
  icon: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
