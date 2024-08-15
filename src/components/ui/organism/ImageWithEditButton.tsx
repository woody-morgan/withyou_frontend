import { FileInputBox, Icon, ImageWrapper } from '@src/components/ui/atom';
import { usePreviewImage } from '@src/hooks';
import cx from 'classnames';
import React, { FunctionComponent } from 'react';

const ImageWithEditButton: FunctionComponent<{
  inputId: string;
  src: string;
  imageFiles: File[];
  setImageFiles: (files: File[]) => void;
}> = ({ inputId, src, imageFiles, setImageFiles }) => {
  const [images, handleChange] = usePreviewImage({ imageFiles, setImageFiles });

  return (
    <div className="relative w-36 h-36 rounded-full bg-primary-700">
      <ImageWrapper
        className="select-none rounded-full object-cover"
        src={images.length > 0 ? images[0] : src}
        layout="fill"
        objectFit="cover"
        alt="profile"
      />
      <label
        htmlFor={inputId}
        className={cx(
          'absolute bottom-0 right-0',
          'w-9 h-9',
          'rounded-full cursor-pointer',
          'bg-wy-blue-500',
          'flex justify-center items-center'
        )}
      >
        <FileInputBox inputId={inputId} onChange={handleChange} />
        <Icon className="text-white" name="camera" size={24} />
      </label>
    </div>
  );
};

export default ImageWithEditButton;
