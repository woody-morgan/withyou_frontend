import { IconButton } from '@src/components/atom'
import React, { FC, memo } from 'react'

const PostsCommonHeader: FC<{
  onBack: () => void
}> = ({ onBack }) => {
  return (
    <div className="relative w-full flex justify-between items-center">
      <div>
        <IconButton name={'leftArrow'} size={20} onClick={onBack} />
      </div>
      <div className="absolute translate-center-xy">New Notes</div>
      <div className="flex justify-between items-center space-x-2">
        <IconButton name={'ellipsisVertical'} size={20} onClick={() => {}} />
      </div>
    </div>
  )
}

export default memo(PostsCommonHeader)
