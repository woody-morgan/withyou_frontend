import { SVGTypes } from '@src/components/atom/Icon/Icon'

export type NavRouterType = {
  path: string
  icon: SVGTypes
}

export const navRouter: NavRouterType[] = [
  {
    path: '/',
    icon: 'album',
  },
  {
    path: '/profile',
    icon: 'profile',
  },
]
