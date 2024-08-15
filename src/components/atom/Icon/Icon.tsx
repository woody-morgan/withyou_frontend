import React, { FC } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiVideo } from 'react-icons/bi'
import { BsCamera, BsHouseDoor, BsPlus } from 'react-icons/bs'
import { FaBabyCarriage, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoEllipsisVertical, IoPeopleOutline } from 'react-icons/io5'

import AlbumSvg from './assets/Album'
import AlbumSelectedSvg from './assets/AlbumSelected'
import AppleLogo from './assets/AppleLogo'
import GoogleLogo from './assets/GoogleLogo'
import KakaoLogo from './assets/KakaoLogo'
import ProfileSvg from './assets/Profile'
import ProfileSelectedSvg from './assets/ProfileSelected'
import StarSvg from './assets/Star'

export type SVGTypes =
  | 'album'
  | 'album-selected'
  | 'profile'
  | 'profile-selected'
  | 'star'
  | 'house'
  | 'plus'
  | 'plusCircle'
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

export type IconProps = {
  name: SVGTypes
  size?: number
  className?: string
}

const _Selector: { [key in SVGTypes]: FC<IconProps> } = {
  album: AlbumSvg,
  'album-selected': AlbumSelectedSvg,
  profile: ProfileSvg,
  'profile-selected': ProfileSelectedSvg,
  star: StarSvg,
  house: BsHouseDoor,
  plus: BsPlus,
  plusCircle: AiOutlinePlusCircle,
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
