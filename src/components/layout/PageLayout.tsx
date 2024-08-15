import React, { FC } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
}> = ({ children, fullWidth = false, fixedHeight = false, disableTransition = false }) => {
  return (
    <div className="relative px-side-padding bg-primary-500">
      <motion.main
        variants={disableTransition ? {} : pageVars}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className={cx(
          'm-center w-full',
          fullWidth ? null : `max-w-mobile-app`,
          `${fixedHeight ? 'overflow-hidden' : 'min-h-screen'}`
        )}
      >
        {children}
      </motion.main>
    </div>
  )
}

export default PageLayout
