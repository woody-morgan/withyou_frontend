import { Button } from '@src/components/atom'
import Link from 'next/link'
import React, { memo } from 'react'

const PostsStartSection = () => {
  return (
    <div className="flex flex-col w-full items-center pb-4">
      <Link href={'/create'}>
        <Button styles="secondary" size="large" fullWidth>
          <h3 className="text-white">Create A Note</h3>
        </Button>
      </Link>
    </div>
  )
}

export default memo(PostsStartSection)
