import React from "react";

enum ButtonType {
  "button",
  "submit",
  "reset",
}

export interface IContentWrapperProps {
  primaryButtonText: string;
  primaryButtonIcon?: React.ReactNode;
  primaryButtonType?: keyof typeof ButtonType;
  primaryButtonDisabled?: boolean;
  onPrimaryButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  secondaryButtonText?: string;
  secondaryButtonIcon?: React.ReactNode;
  onSecondaryButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}
