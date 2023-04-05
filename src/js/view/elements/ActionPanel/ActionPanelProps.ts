import React from "react";

enum ButtonType {
  "button",
  "submit",
  "reset",
}

export interface IContentWrapperProps {
  sticky?: boolean;
  primaryButtonText: string;
  primaryButtonIcon?: React.ReactNode;
  primaryButtonType?: keyof typeof ButtonType;
  primaryButtonDisabled?: boolean;
  onPrimaryButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  secondaryButtonText?: string;
  secondaryButtonIcon?: React.ReactNode;
  onSecondaryButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}
