import {
  FloatingButtonVariantOne,
  FloatingButtonVariantThree,
  FloatingButtonVariantTwo,
} from '@src/animations/button';
import { overLayVariants } from '@src/animations/common';
import { IconButton } from '@src/components/atom';
import { SVGTypes } from '@src/components/atom/Icon/Icon';
import cx from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { FunctionComponent, useState } from 'react';

export type FloatingButtonProps = {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};

const positionSelector: { [key in FloatingButtonProps['position']]: string } = {
  topLeft: 'top-gb-header left-side-padding',
  topRight: 'top-gb-header right-side-padding',
  bottomLeft: 'bottom-bt-nav left-side-padding',
  bottomRight: 'bottom-bt-nav right-side-padding',
};

const FloatingSmallButtonWrapper: FunctionComponent<{
  custom: number;
  variants: Variants;
  iconName: SVGTypes;
  onClick: () => void;
}> = ({ custom, variants, iconName, onClick }) => (
  <motion.div
    custom={custom}
    variants={variants}
    className="-z-10 absolute top-0 left-0"
    initial="enter"
    animate="center"
    exit="exit"
  >
    <IconButton
      className="w-10 h-10 p-2 rounded-full bg-white text-gray-800"
      name={iconName}
      size={32}
      onClick={onClick}
    />
  </motion.div>
);

const FloatingButton: FunctionComponent<FloatingButtonProps> = ({ position = 'bottomRight' }) => {
  const [active, setActive] = useState(false);
  const divRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            className="fixed z-30 top-0 left-0 w-full h-full bg-black/30"
            variants={overLayVariants}
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>
      <div className={cx('fixed z-40', positionSelector[position])}>
        <div>
          <IconButton
            className="w-16 h-16 rounded-full bg-wy-blue-500"
            name="star"
            size={32}
            onClick={() => setActive((prev) => !prev)}
          />
        </div>
        <AnimatePresence exitBeforeEnter>
          {active && (
            <>
              <FloatingSmallButtonWrapper
                custom={0.2}
                iconName="house"
                variants={FloatingButtonVariantOne}
                onClick={() => setActive((prev) => !prev)}
              />
              <FloatingSmallButtonWrapper
                custom={0.3}
                iconName="search"
                variants={FloatingButtonVariantTwo}
                onClick={() => setActive((prev) => !prev)}
              />
              <FloatingSmallButtonWrapper
                custom={0.4}
                iconName="people"
                variants={FloatingButtonVariantThree}
                onClick={() => setActive((prev) => !prev)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingButton;
