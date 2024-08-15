import React, { FC, useEffect, useMemo, useRef } from 'react'
import useWindowResize from '@src/hooks/useWindowResize'
import { useHandleOnRoutingStart, useRootDispatch, useRootState } from '@src/hooks'

import cx from 'classnames'
import { motion } from 'framer-motion'
import { pageVars } from '@src/animations/page'

import Header from './PageLayout/Header'
import { addHistory, modTransDirection } from '@src/store/modules/history'
import { useRouter } from 'next/router'

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
  const mainRef = useRef<HTMLDivElement>(null)
  const dispatch = useRootDispatch()
  const history = useRootState((state) => state.history)

  // enroll
  useHandleOnRoutingStart(() => {
    dispatch(addHistory({ history: router.asPath }))
  })

  // make transition direction forward when layout component mounted on react-tree
  useEffect(() => {
    dispatch(modTransDirection('forward'))
  }, [])

  // to recalculate height when mobile browser search bar appeared and disappeared
  useWindowResize(() => {
    if (fixedHeight) {
      mainRef.current.style.setProperty('height', `${window.innerHeight}px`)
    } else {
      mainRef.current.style.setProperty('height', 'h-full')
    }
  }, 0)

  // pageDirection is used to determine the direction of the page transition
  const pageDirectionCustom = useMemo(
    () => (history.transDirection === 'forward' ? 1 : -1),
    [history.transDirection]
  )

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
