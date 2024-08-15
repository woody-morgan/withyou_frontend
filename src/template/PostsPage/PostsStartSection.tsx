import { Button } from '@src/components/common'
import Link from 'next/link'
import React, { memo } from 'react'

const PostsStartSection = () => {
  return (
    <div className="flex flex-col w-full items-center space-y-4">
      <Link href={'/posts/create'}>
        <Button styles="secondary" size="large" fullWidth>
          <h3 className="text-white">Create A Note</h3>
        </Button>
      </Link>
      <Link href={'/import'}>
        <Button fullWidth size="small">
          <h3 className="text-secondary-500">Import Notes</h3>
        </Button>
      </Link>
    </div>
  )
}

export default memo(PostsStartSection)
