import { Variants } from 'framer-motion';

export const FloatingButtonVariantOne: Variants = {
  enter: { translateY: 0, translateX: 0 },
  center: (delay) => {
    return { translateY: -60, translateX: 0, transition: { duration: delay } };
  },
  exit: { translateY: 0, translateX: 0, opacity: 0 },
};

export const FloatingButtonVariantTwo: Variants = {
  enter: { translateY: 0, translateX: 0 },
  center: (delay) => {
    return { translateY: -36, translateX: -36, transition: { duration: delay } };
  },
  exit: { translateY: 0, translateX: 0, opacity: 0 },
};

export const FloatingButtonVariantThree: Variants = {
  enter: { translateY: 0, translateX: 0 },
  center: (delay) => {
    return { translateY: 4, translateX: -52, transition: { duration: delay } };
  },
  exit: { translateY: 0, translateX: 0, opacity: 0 },
};
