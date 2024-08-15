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
    path: '/menu',
    name: 'Drink Menu',
    icon: 'house',
  },
  {
    path: '/order',
    name: 'Your Order',
    icon: 'house',
  },
  {
    path: '/favorite',
    name: 'Favorites',
    icon: 'house',
  },
]
