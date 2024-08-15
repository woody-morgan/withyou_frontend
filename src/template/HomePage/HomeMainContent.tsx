import { ImageWrapper } from '@src/components/common'
import React from 'react'

const HomeMainContent = () => {
  return (
    <div className="w-full h-full space-y-2 flex flex-col justify-center items-center text-center">
      <div className="w-40 md:w-60">
        <ImageWrapper
          src="/static/notebook.png"
          layout="responsive"
          width="400px"
          height="300px"
          alt="notebook"
          priority
        />
      </div>
      <h1>{"World's Best Baby Logger"}</h1>
      <p>
        <strong>{process.env.NEXT_PUBLIC_APP_NAME}</strong>
        {" is world's best baby growth logging app for parents family, relatives"}
      </p>
      <div className="flex justify-center space-x-1">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={`pagination-${i}`} className="w-3 h-3 bg-secondary-500" />
          ))}
      </div>
    </div>
  )
}

export default HomeMainContent
