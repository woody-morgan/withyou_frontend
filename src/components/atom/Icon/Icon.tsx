import React, { FC } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiVideo } from 'react-icons/bi'
import { BsCamera, BsHouseDoor, BsPlus } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FaBabyCarriage, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoAlbumsOutline, IoEllipsisVertical, IoPeopleOutline } from 'react-icons/io5'

import AppleLogo from './assets/AppleLogo'
import GoogleLogo from './assets/GoogleLogo'
import KakaoLogo from './assets/KakaoLogo'

export type SVGTypes =
  | 'house'
  | 'plus'
  | 'plusCircle'
  | 'profile'
  | 'album'
  | 'camera'
  | 'video'
  | 'hamburger'
  | 'search'
  | 'leftArrow'
  | 'rightArrow'
  | 'ellipsisVertical'
  | 'babyCarriage'
  | 'people'
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
  video: BiVideo,
  hamburger: GiHamburgerMenu,
  search: FaSearch,
  leftArrow: IoIosArrowBack,
  rightArrow: IoIosArrowForward,
  ellipsisVertical: IoEllipsisVertical,
  babyCarriage: FaBabyCarriage,
  people: IoPeopleOutline,
  google: GoogleLogo,
  apple: AppleLogo,
  kakao: KakaoLogo,
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name]
  return <IconComponent className="pointer-events-none" name={name} {...props} />
}

export default Icon
