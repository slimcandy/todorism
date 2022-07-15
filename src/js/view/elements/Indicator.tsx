import React from "react";
import classnames from "classnames";

type IndicatorProps = {
  isActive?: boolean;
};

export const Indicator = (props: IndicatorProps) => {
  const { isActive = false } = props;

  const classes = classnames({
    "indicator rounded-full w-2 h-2": true,
    "dark:bg-green-4 bg-green-3": isActive,
    "bg-light-1 dark:bg-dark-2": !isActive,
  });

  return <div className={classes} />;
};
