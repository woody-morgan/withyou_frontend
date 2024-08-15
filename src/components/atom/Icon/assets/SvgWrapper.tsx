import { SvgComponentType } from '@src/core/types/svg-type'
import React, { FC } from 'react'

const SvgWrapper: FC<
  SvgComponentType & {
    children: React.ReactNode
  }
> = ({ size = 24, viewBox = 24, className, children }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default SvgWrapper
