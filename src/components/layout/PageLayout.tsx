import { useRouter } from 'next/router'
import React, { FC, useEffect, useRef } from 'react'
import useWindowResize from '@src/hooks/useWindowResize'
import { useRootDispatch, useRootState } from '@src/hooks'

import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'
import { addHistory } from '@src/store/modules/history'

import Header from './PageLayout/Header'

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
  const router = useRouter()
  const dispatch = useRootDispatch()
  const mainRef = useRef<HTMLDivElement>(null)
  const history = useRootState((state) => state.history)

  // to recalculate height when mobile browser search bar appeared and disappeared
  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty('height', `${window.innerHeight}px`)
    } else {
      mainRef.current.style.setProperty('height', 'h-full')
    }
  }, 0)

  // Add History to Global State Manager(Should be forward when page is changed)
  useEffect(() => {
    dispatch(addHistory({ history: router.asPath, transDirection: 'forward' }))
  }, [])

  // pageDirection is used to determine the direction of the page transition
  const pageDirectionCustom = history.transDirection === 'forward' ? 1 : -1

  // do not remove pt-gb-header pb-bt-nav on motion.main
  // it is for showing content on the top of bottom nav
  // it should be pb-0 on desktop size because bottom nav will not be shown
  return (
    <motion.div
      className="relative h-full"
      variants={disableTransition ? {} : pageVars}
      custom={pageDirectionCustom}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Header
        fixed={headerFixed}
        transparent={headerTransparent}
        className={headerBackgroundColor}
        content={headerContent}
      />
      <main
        ref={mainRef}
        className={cx(
          'relative m-center w-full h-screen pt-gb-header pb-bt-nav',
          fullWidth ? null : `max-w-mobile-app px-side-padding`,
          fixedHeight ? 'overflow-hidden' : 'min-h-screen'
        )}
      >
        {children}
      </main>
    </motion.div>
  )
}

export default PageLayout
