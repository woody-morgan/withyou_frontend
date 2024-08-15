import React, { FC, useRef } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
import appConfig from '@src/config/appConfig'
import useWindowResize from '@src/hooks/useWindowResize'
import Header from '@src/components/layout/PageLayout/Header'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
  headerFixed?: boolean
  headerTransparent?: boolean
  headerBackgroundColor?: string
  headerContent?: React.ReactNode
}> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
  headerFixed = false,
  headerTransparent = false,
  headerBackgroundColor,
  headerContent = (
    <h2 className="uppercase text-center w-full">{process.env.NEXT_PUBLIC_APP_NAME}</h2>
  ),
}) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty(
        'height',
        `calc(${window.innerHeight}px - ${appConfig.headerHeight})`
      )
    } else {
      mainRef.current.style.setProperty('height', 'h-full')
    }
  }, 0)

  // do not remove pb-bt-nav on motion.main
  // it is for showing content on the top of bottom nav
  // it should be pb-0 on desktop size because bottom nav will not be shown
  return (
    <>
      <Header
        fixed={headerFixed}
        transparent={headerTransparent}
        className={cx(headerBackgroundColor)}
        content={headerContent}
      />
      <div className="relative px-side-padding bg-primary-500 h-full">
        <motion.main
          ref={mainRef}
          variants={disableTransition ? {} : pageVars}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}
          className={cx(
            'relative m-center w-full h-screen pb-bt-nav',
            fullWidth ? null : `max-w-mobile-app`,
            fixedHeight ? 'overflow-hidden' : 'min-h-screen'
          )}
        >
          {children}
        </motion.main>
      </div>
    </>
  )
}

export default PageLayout
