import React, { PropsWithChildren } from "react";

type TextBodyProps = {
  textLevel: number
  children: PropsWithChildren<string>
  // eslint-disable-next-line react/require-default-props
  className?: string | undefined
}

export const TextBodyMedium = (props: TextBodyProps) => {
  const { textLevel, children, className } = props;

  return (
    // TODO: remove "as string"
    <span className={`text-h${textLevel.toString()} font-medium ${className as string || ""}`}>
      {children}
    </span>
  )
}
