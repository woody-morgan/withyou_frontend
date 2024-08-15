import React, { FC, Fragment, memo } from 'react'
import Header from '@src/components/layout/PageLayout/Header'
import cx from 'classnames'
import Navigation from '@src/components/layout/PageLayout/Navigation'

const CommonLayout: FC<{
  children: React.ReactNode
  headerTransparent?: boolean
  headerFixed?: boolean
  bgColor?: string
}> = ({ children, headerTransparent = false, headerFixed = false, bgColor }) => {
  return (
    //  overflow hidden to prevent text on background on transition
    <div id="page-layout" className="overflow-hidden w-full max-w-mobile-app m-center">
      <Header fixed={headerFixed} transparent={headerTransparent} className={cx(bgColor)} />
      <Fragment>{children}</Fragment>
      <Navigation fixed />
    </div>
  )
}

export default memo(CommonLayout)
