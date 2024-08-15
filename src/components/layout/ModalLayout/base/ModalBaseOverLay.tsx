import { modalOverlayVariants } from '@src/animations/modal';
import { ModalBaseShape } from '@src/components/layout/ModalLayout/ModalLayout';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

const ModalBaseOverLay: FC<Pick<ModalBaseShape, 'onClose'>> = ({ onClose }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-black/30"
      variants={modalOverlayVariants}
      onClick={onClose}
    />
  );
};

export default ModalBaseOverLay;
