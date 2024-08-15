import React from 'react'
import { ImageWrapper } from '@src/components/common'

const PostsMainSection = () => {
  return (
    <div className="w-full h-full space-y-2 flex flex-col justify-center items-center text-center">
      <div className="w-60 md:w-80">
        <ImageWrapper
          src="/static/shelf.png"
          layout="responsive"
          width="500px"
          height="400px"
          alt="notebook"
          priority
        />
      </div>
      <h1>{'Create Your First Note'}</h1>
      <p>
        {
          "Add a note about your baby's progress and see how it's doing. And you can share the logs to Internet, Blog, Our Community"
        }
      </p>
    </div>
  )
}

export default PostsMainSection
