import Navigation from '@src/components/layout/PageLayout/Navigation';
import { AnimatePresence } from 'framer-motion';
import React, { FC, memo } from 'react';

const CommonLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div id="common-layout" className="overflow-hidden w-full max-w-mobile-app m-center">
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      <Navigation />
    </div>
  );
};

export default memo(CommonLayout);
