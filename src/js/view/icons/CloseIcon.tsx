import React, { FunctionComponent } from "react";

export interface SVGprops {
  size: number
  color?: string
  fill?: string
}

// eslint-disable-next-line react/function-component-definition
export const CloseIcon: FunctionComponent<SVGprops> = (props) => {
  const {size, color, fill} = props
  return (
    <svg width={size.toString()} height={size.toString()} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.2496 8.69321C24.6401 8.30269 24.6401 7.66952 24.2496 7.279C23.8591 6.88847 23.2259 6.88847 22.8354 7.279L16 14.1144L9.16464 7.279C8.77411 6.88847 8.14095 6.88847 7.75042 7.279C7.3599 7.66952 7.3599 8.30269 7.75042 8.69321L14.5858 15.5286L7.27902 22.8353C6.88849 23.2259 6.88849 23.859 7.27902 24.2496C7.66954 24.6401 8.30271 24.6401 8.69323 24.2496L16 16.9428L23.3068 24.2496C23.6973 24.6401 24.3305 24.6401 24.721 24.2496C25.1115 23.859 25.1115 23.2259 24.721 22.8353L17.4142 15.5286L24.2496 8.69321Z"
            fill={color}/>
    </svg>
  )
}

CloseIcon.defaultProps = {
  color: "white",
  fill: "none"
}