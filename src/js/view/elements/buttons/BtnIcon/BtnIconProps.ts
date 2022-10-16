import React from "react";

export interface IBtnIconProps {
  icon: JSX.Element;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
