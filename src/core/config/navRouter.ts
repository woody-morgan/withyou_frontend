import { SVGTypes } from '@src/components/atom/Icon/Icon'

export type NavRouterType = {
  path: string
  name: string
  icon: SVGTypes
}

export const navRouter: NavRouterType[] = [
  {
    path: '/posts',
    name: 'Home',
    icon: 'house',
  },
  {
    path: '/album',
    name: 'Album',
    icon: 'album',
  },
  {
    path: '/parenting',
    name: 'Parenting',
    icon: 'babyCarriage',
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'profile',
  },
]
