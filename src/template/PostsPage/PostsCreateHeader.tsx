import React, { memo } from 'react'
import { IconButton } from '@src/components/common'
import { useRouter } from 'next/router'

const PostsCommonHeader = () => {
  const router = useRouter()
  // handle click when backward button click
  const handleBackwardClick = async () => {
    await router.push('/posts')
  }

  return (
    <div className="relative w-full flex justify-between items-center">
      <div>
        <IconButton name={'leftArrow'} size={20} onClick={handleBackwardClick} />
      </div>
      <div className="absolute translate-center-xy">New Notes</div>
      <div className="flex justify-between items-center space-x-2">
        <IconButton name={'ellipsisVertical'} size={20} onClick={() => {}} />
      </div>
    </div>
  )
}

export default memo(PostsCommonHeader)
