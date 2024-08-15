import { ImageWrapper } from '@src/components/atom/index';
import React, { FunctionComponent } from 'react';

export type CommonProfileProps = {
  profileImage: string;
  profileName: string;
  timeStamp: string;
};

const CommonProfile: FunctionComponent<CommonProfileProps> = ({
  profileImage,
  profileName,
  timeStamp,
}) => {
  return (
    <div className="flex space-x-2">
      <div className="relative w-10 h-10 rounded-full">
        <ImageWrapper src={profileImage} layout="fill" />
      </div>
      <div className="flex flex-col">
        <h4>{profileName}</h4>
        <h5 className="text-gray-400">{timeStamp}</h5>
      </div>
    </div>
  );
};

export default CommonProfile;
