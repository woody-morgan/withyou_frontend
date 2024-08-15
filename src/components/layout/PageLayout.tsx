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
    <div className="uppercase text-center w-full text-2xl font-bold">
      {process.env.NEXT_PUBLIC_APP_NAME}
    </div>
  ),
}) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty(
        'height',
        `calc(${window.innerHeight}px - ${appConfig.headerHeight} - ${appConfig.bottomNavigationHeight})`
      )
    } else {
      mainRef.current.style.setProperty('height', 'h-full')
    }
  }, 100)

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
            'm-center w-full',
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
