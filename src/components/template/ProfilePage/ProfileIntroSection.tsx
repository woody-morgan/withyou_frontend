import { ImageWrapper } from '@src/components/atom';
import React from 'react';

const ProfileIntroSection = () => {
  return (
    <div className="w-full h-52 flex flex-col justify-center items-center space-y-2">
      <div className="relative w-36 h-36 rounded-full bg-primary-700">
        <ImageWrapper
          src="/static/sample_profile.png"
          layout="fill"
          objectFit="cover"
          alt="profile"
        />
      </div>
      <div className="text-center space-y-0.5">
        <h1>힘찬 엄마</h1>
        <p className="text-wy-blue-500">엄마</p>
      </div>
    </div>
  );
};

export default ProfileIntroSection;
