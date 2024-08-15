import { IconButton } from '@src/components/common'
import React, { FC, Fragment } from 'react'
import cx from 'classnames'
import { navRouter } from '@src/config/navRouter'
import Link from 'next/link'

const BottomNavigation: FC<{
  fixed?: boolean
}> = ({ fixed = false }) => {
  return (
    <Fragment>
      <div
        className={cx('z-50 fixed bottom-0 w-full bg-primary-500', fixed ? 'fixed' : 'relative')}
      >
        <div className={cx('w-full px-side-padding pb-2 flex justify-between ', 'h-bt-nav')}>
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
        <div />
      </div>
      {/* to give padding for bottom sheet */}
      {fixed && <div className="h-bt-nav" />}
    </Fragment>
  )
}

export default BottomNavigation
