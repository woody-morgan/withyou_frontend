import { ModalInfoType } from '@src/core/types/modal-type';
import { atom, DefaultValue, selector } from 'recoil';

const defaultState: ModalInfoType = {
  type: null,
  title: null,
  fullScreen: true,
  option: null,
};

const modalStateAtom = atom<ModalInfoType>({
  key: 'modalStateAtom',
  default: defaultState,
});

const openPostCreateModal = selector<Pick<ModalInfoType, 'fullScreen'>>({
  key: 'modalStateAtom/open/postCreate',
  get: ({ get }) => {
    return get(modalStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(modalStateAtom, defaultState);
    } else {
      set(modalStateAtom, {
        type: 'POSTCREATE',
        title: '게시글 작성',
        fullScreen: newValue.fullScreen,
        option: null,
      });
    }
  },
});

const closeModal = selector<void>({
  key: 'modalStateAtom/close',
  get: ({ get }) => {
    return;
  },
  set: ({ set }) => {
    set(modalStateAtom, defaultState);
  },
});

export { closeModal, modalStateAtom, openPostCreateModal };
