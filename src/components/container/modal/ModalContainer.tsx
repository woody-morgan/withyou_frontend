import { closeModal, modalStateAtom } from '@src/atom/modal';
import { PostCreateModalContent } from '@src/components/container/modal/content';
import { ModalLayout } from '@src/components/layout';
import Portal from '@src/components/ui/atom/Portal';
import { ModalContentType, ModalType } from '@src/core/types/modal-type';
import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const _selectModal: { [key in ModalType]: FC<ModalContentType> } = {
  POSTCREATE: PostCreateModalContent,
};

const ModalContainer: FC = () => {
  const modal = useRecoilValue(modalStateAtom);
  const closeModalCB = useSetRecoilState(closeModal);

  const ModalComponent = modal.type ? _selectModal[modal.type] : null;

  return (
    <Portal selectorId="modal">
      <AnimatePresence exitBeforeEnter>
        {modal.type && (
          <ModalLayout
            fullScreen={modal.fullScreen}
            key={`modal-base-${Math.floor(Math.random() * 1000)}`}
            onClose={() => closeModalCB()}
          >
            {ModalComponent && <ModalComponent option={modal.option} />}
          </ModalLayout>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default ModalContainer;
