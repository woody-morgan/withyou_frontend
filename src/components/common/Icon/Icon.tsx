import React, { FC, memo } from 'react'
import { BsCamera, BsHouseDoor, BsPlus } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { IoAlbumsOutline } from 'react-icons/io5'

export type SVGTypes = 'house' | 'plus' | 'plusCircle' | 'profile' | 'album' | 'camera'

type IconProps = {
  name: SVGTypes
  size?: number
  className?: string
}

const _Selector: { [key in SVGTypes]: FC<IconProps> } = {
  house: BsHouseDoor,
  plus: BsPlus,
  plusCircle: AiOutlinePlusCircle,
  profile: CgProfile,
  album: IoAlbumsOutline,
  camera: BsCamera,
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name]
  return <IconComponent name={name} {...props} />
}

export default memo(Icon)
