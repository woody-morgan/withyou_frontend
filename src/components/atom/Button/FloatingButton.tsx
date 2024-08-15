import { overLayVariants } from '@src/animations/common'
import { IconButton } from '@src/components/atom'
import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FunctionComponent, useState } from 'react'

export type FloatingButtonProps = {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}

const positionSelector: { [key in FloatingButtonProps['position']]: string } = {
  topLeft: 'top-gb-header left-side-padding',
  topRight: 'top-gb-header right-side-padding',
  bottomLeft: 'bottom-bt-nav left-side-padding',
  bottomRight: 'bottom-bt-nav right-side-padding',
}

const FloatingButton: FunctionComponent<FloatingButtonProps> = ({ position = 'bottomRight' }) => {
  const [active, setActive] = useState(false)

  return (
    <AnimatePresence exitBeforeEnter>
      {active && (
        <motion.div
          initial="enter"
          animate="center"
          exit="exit"
          className="fixed z-30 top-0 left-0 w-full h-full bg-black/30"
          variants={overLayVariants}
          onClick={() => setActive(false)}
        />
      )}
      <div className={cx('fixed z-40', positionSelector[position])}>
        <IconButton
          className={'w-16 h-16 rounded-full bg-wy-blue-500 transform'}
          name="star"
          size={32}
          onClick={() => setActive((prev) => !prev)}
        />
      </div>
    </AnimatePresence>
  )
}

export default FloatingButton
