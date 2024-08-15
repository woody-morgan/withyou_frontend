import { IconButton } from '@src/components/molecule'
import { navRouter } from '@src/core/config/navRouter'
import { useRootState } from '@src/hooks'
import cx from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'

const Navigation: FC<{
  transparent?: boolean
  className?: string
}> = ({ className, transparent = false }) => {
  const layoutState = useRootState((state) => state.layout)

  return (
    layoutState.isShowBottomNav && (
      <div className="relative">
        <motion.div
          className={cx(
            'z-20 w-full max-w-mobile-app h-bt-nav bottom-0',
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
        </motion.div>
      </div>
    )
  )
}

export default Navigation
