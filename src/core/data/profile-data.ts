import { SVGTypes } from '@src/components/atom/Icon/Icon';

export type ProfileOptionItemType = {
  icon: SVGTypes;
  title: string;
  url: string;
};

export const profileOptionItemData: ProfileOptionItemType[] = [
  {
    icon: 'camera',
    title: 'Buy Premium',
    url: '/profile/premium',
  },
  {
    icon: 'camera',
    title: 'Edit Profile',
    url: '/profile/edit',
  },
  {
    icon: 'camera',
    title: 'App Theme',
    url: '/profile/theme',
  },
  {
    icon: 'camera',
    title: 'Notifications',
    url: '/profile/notifications',
  },
  {
    icon: 'camera',
    title: 'Security',
    url: '/profile/security',
  },
  {
    icon: 'camera',
    title: 'Log Out',
    url: '/profile/logout',
  },
];
