import { Variants } from 'framer-motion';

export const pageVars: Variants = {
  hidden: {
    opacity: 0,
  },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,
  },
};

export const appLikePageVars: Variants = {
  hidden: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    };
  },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      y: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    };
  },
};
