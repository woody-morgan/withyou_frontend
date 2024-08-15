import React, { FC, memo } from 'react'
import { BsApple, BsCamera, BsGoogle, BsHouseDoor, BsPlus } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { IoAlbumsOutline } from 'react-icons/io5'
import { RiKakaoTalkFill } from 'react-icons/ri'

export type SVGTypes =
  | 'house'
  | 'plus'
  | 'plusCircle'
  | 'profile'
  | 'album'
  | 'camera'
  | 'google'
  | 'apple'
  | 'kakao'

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
  google: BsGoogle,
  apple: BsApple,
  kakao: RiKakaoTalkFill,
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name]
  return <IconComponent name={name} {...props} />
}

export default memo(Icon)
