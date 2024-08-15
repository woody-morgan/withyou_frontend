import React, { FC, Fragment, memo } from 'react'

import Navigation from './PageLayout/Navigation'

const CommonLayout: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div id="common-layout" className="overflow-hidden w-full max-w-mobile-app m-center">
      <Navigation />
      <Fragment>{children}</Fragment>
    </div>
  )
}

export default memo(CommonLayout)
