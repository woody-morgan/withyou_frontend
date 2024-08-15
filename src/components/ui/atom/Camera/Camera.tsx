import React, { FC } from 'react';
import Webcam, { WebcamProps } from 'react-webcam';

// const WebCameraComponent = dynamic(() => import('react-webcam'), {
//   ssr: false,
// })

// screenshotQuality={100}

const Camera: FC<Partial<WebcamProps>> = ({
  forceScreenshotSourceSize = true,
  imageSmoothing = true,
  mirrored = true,
  onUserMedia = () => {},
  onUserMediaError = () => {},
  screenshotFormat = 'image/png',
  screenshotQuality = 100,
  ...props
}) => {
  return (
    <Webcam
      forceScreenshotSourceSize={forceScreenshotSourceSize}
      imageSmoothing={imageSmoothing}
      mirrored={mirrored}
      onUserMedia={onUserMedia}
      onUserMediaError={onUserMediaError}
      screenshotFormat={screenshotFormat}
      {...props}
    />
  );
};

export default Camera;
