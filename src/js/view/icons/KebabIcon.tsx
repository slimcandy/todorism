import React, { FunctionComponent } from "react";

export interface SVGprops {
  size: number
  color?: string
  fill?: string
}

// eslint-disable-next-line react/function-component-definition
export const KebabIcon: FunctionComponent<SVGprops> = (props) => {
  const {size, color, fill} = props
  return (
    <svg width={size.toString()} height={size.toString()} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <rect x="12" width="8" height="8" rx="4" fill="white"/>
      <rect x="12" y="12" width="8" height="8" rx="4" fill={color}/>
      <rect x="12" y="24" width="8" height="8" rx="4" fill={color}/>
    </svg>
  )
}

KebabIcon.defaultProps = {
  color: "white",
  fill: "none"
}