import { SVGTypes } from '@src/components/common/Icon/Icon'

export type NavRouterType = {
  path: string
  name: string
  icon: SVGTypes
}

export const navRouter: NavRouterType[] = [
  {
    path: '/',
    name: 'Home',
    icon: 'house',
  },
  {
    path: '/camera',
    name: 'Camera',
    icon: 'camera',
  },
  {
    path: '/posts',
    name: 'write',
    icon: 'plusCircle',
  },
  {
    path: '/album',
    name: 'Album',
    icon: 'album',
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'profile',
  },
]
