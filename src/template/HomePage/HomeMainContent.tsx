import React from 'react'
import { ImageWrapper } from '@src/components/common'

const HomeMainContent = () => {
  return (
    <div className="w-full h-full space-y-2 flex flex-col justify-center text-center">
      <div className="h-auto">
        <ImageWrapper src="/static/notebook.png" width="400px" height="300px" alt="notebook" />
      </div>
      <div className="text-3xl font-bold">{"World's Best Baby Logger"}</div>
      <div className="text-md">
        {"With you is world's best baby growth logging app for parents, family, relatives"}
      </div>
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
