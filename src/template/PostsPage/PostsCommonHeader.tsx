import React from 'react'
import { IconButton } from '@src/components/common'

const PostsCommonHeader = () => {
  return (
    <div className="relative w-full flex justify-between items-center">
      <div>
        <IconButton name={'hamburger'} size={20} onClick={() => {}} />
      </div>
      <div className="absolute translate-center-xy">All Notes</div>
      <div className="flex justify-between items-center space-x-2">
        <IconButton name={'search'} size={20} onClick={() => {}} />
        <IconButton name={'video'} size={28} onClick={() => {}} />
      </div>
    </div>
  )
}

export default PostsCommonHeader
