import { ImageWrapper } from '@src/components/common'
import React from 'react'

const ProfileIntroSection = () => {
  return (
    <div className="w-[200px] h-[280px] flex flex-col m-center select-none">
      <div className="relative w-full h-full rounded-full bg-primary-700">
        <ImageWrapper
          src="/static/sample_profile.png"
          layout="fill"
          objectFit="cover"
          alt="profile"
        />
      </div>
      <div className="text-center space-y-2">
        <h1>Lee Yuna</h1>
        <p>Be a fan of Brave Girls</p>
      </div>
    </div>
  )
}

export default ProfileIntroSection
