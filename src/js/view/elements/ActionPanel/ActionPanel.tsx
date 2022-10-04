import React from "react";
import { classesOf } from "../../../utils";
import { ButtonPrimary, ButtonTransparent } from "../buttons";
import { IContentWrapperProps } from "./ActionPanelProps";

export const ActionPanel = (props: IContentWrapperProps) => {
  const {
    sticky,
    primaryButtonText,
    primaryButtonIcon,
    primaryButtonType = "button",
    primaryButtonDisabled = false,
    onPrimaryButtonClick,
    secondaryButtonText,
    secondaryButtonIcon,
    onSecondaryButtonClick,
  } = props;

  const classes = classesOf(
    "flex flex-col items-center py-base px-7 bg-light-4 dark:bg-black-0",
    sticky && "sticky bottom-0"
  );

  return (
    <div className={classes}>
      <ButtonPrimary
        type={primaryButtonType}
        icon={primaryButtonIcon}
        disabled={primaryButtonDisabled}
        onClick={onPrimaryButtonClick}
      >
        {primaryButtonText}
      </ButtonPrimary>

      {secondaryButtonText && (
        <ButtonTransparent
          icon={secondaryButtonIcon}
          type="button"
          onClick={onSecondaryButtonClick}
        >
          {secondaryButtonText}
        </ButtonTransparent>
      )}
    </div>
  );
};
