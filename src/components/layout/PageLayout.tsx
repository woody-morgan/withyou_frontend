import React, { FC, useEffect, useRef } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
import appMetaData from '@src/config/appMetadata'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}> = ({ children, fullWidth = false, fixedHeight = false, disableTransition = false }) => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty(
        'height',
        `calc(${window.innerHeight}px - ${appMetaData.headerHeight} - ${appMetaData.bottomNavigationHeight})`
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fixedHeight])

  return (
    <div className="relative px-side-padding bg-primary-500">
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
