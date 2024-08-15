import { pageVars } from '@src/animations/page';
import CommonHeader from '@src/components/molecule/PageHeader/CommonHeader';
import useWindowResize from '@src/hooks/useWindowResize';
import cx from 'classnames';
import { motion } from 'framer-motion';
import React, { FC, useRef } from 'react';

import Header from './PageLayout/Header';

const PageLayout: FC<{
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  fixedHeight?: boolean;
  disableTransition?: boolean;
  headerFixed?: boolean;
  headerTransparent?: boolean;
  headerBackgroundColor?: string;
  headerContent?: React.ReactNode;
}> = ({
  children,
  className,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
  headerFixed = false,
  headerTransparent = false,
  headerBackgroundColor,
  headerContent = <CommonHeader />,
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  // to recalculate height when mobile browser search bar appeared and disappeared
  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty('height', `${window.innerHeight}px`);
      document.body.style.overflow = 'hidden';
    } else {
      mainRef.current.style.setProperty('height', 'h-full');
      document.body.style.overflow = 'auto';
    }
  }, 0);

  // do not remove pt-gb-header pb-bt-nav on motion.main
  // it is for showing content on the top of bottom nav
  // it should be pb-0 on desktop size because bottom nav will not be shown
  return (
    <motion.div
      className="relative"
      variants={disableTransition ? {} : pageVars}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Header fixed={headerFixed} transparent={headerTransparent} className={headerBackgroundColor}>
        {headerContent}
      </Header>
      <main
        ref={mainRef}
        className={cx(
          'relative m-center w-full pt-gb-header pb-bt-nav',
          fullWidth ? null : `max-w-mobile-app px-side-padding`,
          fixedHeight ? 'overflow-hidden h-screen' : 'min-h-screen',
          className
        )}
      >
        {children}
      </main>
    </motion.div>
  );
};

export default PageLayout;
