import React, { FC, useRef } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
import appMetaData from '@src/config/appConfig'
import useWindowResize from '@src/hooks/useWindowResize'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}> = ({ children, fullWidth = false, fixedHeight = false, disableTransition = false }) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty(
        'height',
        `calc(${window.innerHeight}px - ${appMetaData.headerHeight} - ${appMetaData.bottomNavigationHeight})`
      )
    } else {
      mainRef.current.style.setProperty('height', 'auto')
    }
  }, 100)

  return (
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
  )
}

export default PageLayout
