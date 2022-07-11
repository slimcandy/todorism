import React, { PropsWithChildren } from "react";

type TitleHProps = {
  hLevel: number;
  children: PropsWithChildren<string>;
  // eslint-disable-next-line react/require-default-props
  className?: string | undefined;
};

export const TitleH = (props: TitleHProps) => {
  const { hLevel, children, className = "" } = props;

  return (
    // TODO: remove "as string"
    <h1 className={`text-h${hLevel.toString()} font-bold ${className}`}>
      {children}
    </h1>
  );
};
