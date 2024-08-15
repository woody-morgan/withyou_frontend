import cx from 'classnames'
import { motion } from 'framer-motion'
import React, { forwardRef, MutableRefObject } from 'react'

type Props = {
  className?: string
  fixed?: boolean
  transparent?: boolean
  content: React.ReactNode
}

const Header = (
  { className, fixed = false, transparent = false, content }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  return (
    <header className="relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate="enter"
        exit="exit"
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          false ? 'fixed' : 'absolute',
          transparent && 'bg-transparent',
          className
        )}
      >
        {content}
      </motion.div>
    </header>
  )
}

export default forwardRef(Header)
