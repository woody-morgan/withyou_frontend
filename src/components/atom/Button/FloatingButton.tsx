import { FloatingButtonVariant } from '@src/animations/button';
import { overLayVariants } from '@src/animations/common';
import { Icon, IconButton } from '@src/components/atom';
import { SVGTypes } from '@src/components/atom/Icon/Icon';
import { toBeImplement } from '@src/utils/implUtil';
import cx from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { FC, FunctionComponent, useState } from 'react';

export type FloatingButtonProps = {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};

const positionSelector: { [key in FloatingButtonProps['position']]: string } = {
  topLeft: 'top-[calc(0.5rem+theme(space.gb-header))] left-[calc(theme(space.side-padding))]',
  topRight: 'top-[calc(0.5rem+theme(space.gb-header))] right-[calc(theme(space.side-padding))]',
  bottomLeft: 'bottom-[calc(0.5rem+theme(space.bt-nav))] left-[calc(theme(space.side-padding))]',
  bottomRight: 'bottom-[calc(0.5rem+theme(space.bt-nav))] right-[calc(theme(space.side-padding))]',
};

const FloatingSmallButtonWrapper: FC<{
  custom: number;
  variants: Variants;
  iconName: SVGTypes;
  children?: React.ReactNode;
  onClick: () => void;
}> = ({ custom, variants, iconName, children, onClick }) => (
  <motion.button
    custom={custom}
    variants={variants}
    className={cx(
      '-z-10 absolute top-[-70%] left-[-70%]',
      'flex items-center justify-center',
      'w-28 h-10',
      'rounded-xl border-2 border-solid border-gray-500',
      'bg-white text-gray-800'
    )}
    initial="enter"
    animate="center"
    exit="exit"
    onClick={onClick}
  >
    <Icon className="text-wy-blue-500" name={iconName} size={28} />
    <p className="px-2 select-none text-wy-blue-500 font-PyeongChangPeace-Bold">{children}</p>
  </motion.button>
);

const FloatingButton: FunctionComponent<FloatingButtonProps> = ({ position = 'bottomRight' }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  const handlePostCreate = () => {
    setActive(false);
    // dispatch(openPostCreateModal({ fullScreen: true }));
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute z-30 w-full h-full inset-0 bg-black/30"
            variants={overLayVariants}
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>
      <div className={cx('absolute z-40', positionSelector[position])}>
        <div>
          <IconButton
            className="w-16 h-16 rounded-full bg-wy-blue-500"
            name="star"
            size={32}
            onClick={handleToggle}
          />
        </div>
        <AnimatePresence exitBeforeEnter>
          {active && (
            <>
              <FloatingSmallButtonWrapper
                custom={0}
                iconName="plus"
                variants={FloatingButtonVariant}
                onClick={handlePostCreate}
              >
                글쓰기
              </FloatingSmallButtonWrapper>
              <FloatingSmallButtonWrapper
                custom={4.5}
                iconName="album-selected"
                variants={FloatingButtonVariant}
                onClick={toBeImplement}
              >
                앨범
              </FloatingSmallButtonWrapper>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingButton;
