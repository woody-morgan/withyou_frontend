import { useDimension } from '@src/hooks';
import React, { FC } from 'react';
import { WebcamProps } from 'react-webcam';

import Camera from './Camera';

type FullScreenCameraProps = WebcamProps & {
  facingMode?: 'user' | 'environment' | 'left' | 'right';
};

const FullScreenCamera: FC<Partial<FullScreenCameraProps>> = ({
  facingMode = 'user',
  ...props
}) => {
  const [fullRef, { width, height }] = useDimension(0);

  return (
    <div ref={fullRef} className="w-full h-full">
      <Camera
        height={height}
        width={width}
        videoConstraints={{
          facingMode: facingMode,
          aspectRatio: height <= width ? width / height : height / width,
        }}
        {...props}
      />
    </div>
  );
};

export default FullScreenCamera;
