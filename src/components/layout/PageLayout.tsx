import React, { FC, Fragment } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'

const PageLayout: FC<{
  children: React.ReactNode
  fullWidth?: boolean
  fixedHeight?: boolean
  disableTransition?: boolean
  enableYPadding?: boolean
}> = ({
  children,
  fullWidth = false,
  fixedHeight = false,
  disableTransition = false,
  enableYPadding = false,
}) => {
  return (
    <Fragment>
      <motion.main
        variants={disableTransition ? {} : pageVars}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        className={cx(
          'z-0 m-center px-side-padding w-full',
          fullWidth ? null : `max-w-screen-sm`,
          `${fixedHeight ? 'overflow-hidden' : 'min-h-screen'}`,
          enableYPadding ? 'py-4' : 'py-0'
        )}
      >
        {children}
      </motion.main>
    </Fragment>
  )
}

export default PageLayout
