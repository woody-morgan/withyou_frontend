import React, { forwardRef, MutableRefObject } from 'react'
import cx from 'classnames'
import { motion, Variants } from 'framer-motion'

type Props = {
  className?: string
  custom?: number
  variants?: Variants
  fixed?: boolean
  transparent?: boolean
  content: React.ReactNode
}

const Header = (
  { className, custom, variants, fixed = false, transparent = false, content }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  return (
    <header className="relative">
      <motion.div
        ref={ref}
        custom={custom}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          false ? 'fixed' : 'absolute',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        {content}
      </motion.div>
    </header>
  )
}

export default forwardRef(Header)
