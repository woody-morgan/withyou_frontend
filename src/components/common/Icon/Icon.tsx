import React, { FC, memo } from 'react'
import { BsHouseDoor, BsPlus } from 'react-icons/bs'

export type SVGTypes = 'house' | 'plus'

type IconProps = {
  name: SVGTypes
  size?: number
  className?: string
}

const _Selector: { [key in SVGTypes]: FC<IconProps> } = {
  house: BsHouseDoor,
  plus: BsPlus,
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name]
  return <IconComponent name={name} {...props} />
}

export default memo(Icon)
