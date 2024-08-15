import Navigation from '@src/components/layout/PageLayout/Navigation';
import React, { FC, Fragment, memo } from 'react';

const CommonLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div id="common-layout" className="overflow-hidden w-full max-w-mobile-app m-center">
      <Fragment>{children}</Fragment>
      <Navigation />
    </div>
  );
};

export default memo(CommonLayout);
