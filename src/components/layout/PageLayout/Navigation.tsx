import { IconButton } from '@src/components/common'
import React, { FC } from 'react'
import cx from 'classnames'
import { navRouter } from '@src/config/navRouter'
import Link from 'next/link'

const Navigation: FC<{
  transparent?: boolean
  className?: string
}> = ({ className, transparent = false }) => {
  return (
    <div className="relative">
      <div
        className={cx(
          'z-20 w-full max-w-mobile-app h-bt-nav bottom-0 ',
          'px-side-padding py-2',
          'flex justify-between items-center align-middle',
          'font-bold',
          'fixed',
          transparent ? 'bg-transparent' : 'bg-primary-500',
          className
        )}
      >
        {navRouter.map((info, index) => {
          return (
            <Link href={info.path} key={`bottom-sheet-${info.name}-index`}>
              <div
                key={`bottom-sheet-${index}`}
                className="flex flex-col justify-center items-center text-center h-full"
              >
                <IconButton name={info.icon} size={28} onClick={() => {}} />
                <div className="text-xs">{info.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
      {/* to give padding for bottom sheet */}
      <div className="h-bt-nav" />
    </div>
  )
}

export default Navigation
