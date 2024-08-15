import React, { FC, Fragment } from 'react'
import Header from '@src/components/layout/PageLayout/Header'
import cx from 'classnames'
import BottomNavigation from '@src/components/layout/PageLayout/BottomNavigation'

const CommonLayout: FC<{
  children: React.ReactNode
  headerTransparent?: boolean
  headerFixed?: boolean
  bgColor?: string
}> = ({ children, headerTransparent = false, headerFixed = false, bgColor }) => {
  return (
    <div id="page-layout">
      <Header fixed={headerFixed} transparent={headerTransparent} className={cx(bgColor)} />
      <Fragment>{children}</Fragment>
      <BottomNavigation fixed />
    </div>
  )
}

export default CommonLayout
