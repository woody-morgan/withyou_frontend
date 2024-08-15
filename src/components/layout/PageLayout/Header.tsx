import { forwardRef, MutableRefObject, useState } from 'react'
import cx from 'classnames'
import { IconButton } from '@src/components/common'

type Props = {
  fixed?: boolean
  transparent?: boolean
  className?: string
}

const Header = (
  { fixed = false, transparent = false, className }: Props,
  ref: MutableRefObject<HTMLDivElement>
) => {
  const [show, setShow] = useState(false)

  return (
    <header>
      <div
        ref={ref}
        className={cx(
          'z-20 w-full h-gb-header top-0 px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          fixed ? 'fixed' : 'absolute',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        <div className="flex space-x-2 items-center">
          <IconButton
            name="house"
            animate={show ? 'open' : 'close'}
            size={24}
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
      </div>
      {/*  height when fixed*/}
      <div className="h-gb-header" />
    </header>
  )
}

export default forwardRef(Header)
