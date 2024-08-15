import { LayoutInfoType } from '@src/core/types/layout-type';
import { atom, selector } from 'recoil';

const defaultState: LayoutInfoType = {
  isShowBottomNav: true,
};

const layoutStateAtom = atom<LayoutInfoType>({
  key: 'layoutStateAtom',
  default: defaultState,
});

const showBottomBar = selector<void>({
  key: 'layoutState/showBottomBar',
  get: ({ get }) => {
    return;
  },
  set: ({ set }) => {
    set(layoutStateAtom, {
      ...layoutStateAtom,
      isShowBottomNav: true,
    });
  },
});

const hideBottomBar = selector<void>({
  key: 'layoutState/hideBottomBar',
  get: ({ get }) => {
    return;
  },
  set: ({ set }) => {
    set(layoutStateAtom, {
      ...layoutStateAtom,
      isShowBottomNav: false,
    });
  },
});

export { hideBottomBar, layoutStateAtom, showBottomBar };
