import React from "react";
import { classesOf } from "../../../utils";

type IndicatorProps = {
  isActive?: boolean;
};

export const Indicator = (props: IndicatorProps) => {
  const { isActive = false } = props;

  const classes = classesOf(
    "indicator rounded-full w-2 h-2",
    isActive && "dark:bg-green-4 bg-green-3",
    !isActive && "bg-light-1 dark:bg-dark-2"
  );

  return <div className={classes} />;
};
