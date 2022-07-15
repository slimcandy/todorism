import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"


type IndicatorProps = {
  // eslint-disable-next-line react/require-default-props
  isActive?: boolean
}

export const Indicator = (props: IndicatorProps) => {
  const {isActive = false} = props

  const classes = classnames({
    "indicator rounded-full w-2 h-2": true,
    "dark:bg-green-4 bg-green-3": isActive,
    "bg-light-1 dark:bg-dark-2": !isActive
  })

  return(
    <div className={classes}/>
  )
}
