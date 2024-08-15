import React, { forwardRef, MutableRefObject } from 'react'
import cx from 'classnames'

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
      <div
        ref={ref}
        className={cx(
          'z-20 w-full max-w-mobile-app h-gb-header top-0',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          fixed ? 'fixed' : 'absolute',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        {content}
      </div>
      {/* to give padding for header */}
      <div className="h-gb-header" />
    </header>
  )
}

export default forwardRef(Header)
