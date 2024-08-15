import ImageWithEditButton from '@src/components/ui/organism/ImageWithEditButton';
import React, { useEffect, useState } from 'react';

const ProfileIntroSection = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
    //Todo: call profile change api on every imageFiles change
    // check if imageFile is same with current profile image
  }, [imageFiles]);

  return (
    <div className="w-full h-52 flex flex-col justify-center items-center space-y-2">
      <ImageWithEditButton
        imageFiles={imageFiles}
        setImageFiles={setImageFiles}
        inputId="modify_profile"
        src={'/static/sample_profile.png'}
      />
      <div className="text-center space-y-0.5">
        <h1>힘찬 엄마</h1>
        <p className="text-wy-blue-500">엄마</p>
      </div>
    </div>
  );
};

export default ProfileIntroSection;
