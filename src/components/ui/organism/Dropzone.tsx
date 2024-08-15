import { FileInputBox, Icon } from '@src/components/ui/atom';
import { usePreviewImage } from '@src/hooks';
import { usePreviewImageProps } from '@src/hooks/usePreviewImage';
import React, { FunctionComponent } from 'react';

const DropZone: FunctionComponent<usePreviewImageProps> = ({ imageFiles, setImageFiles }) => {
  const [images, handleChange] = usePreviewImage({ imageFiles, setImageFiles });

  return (
    <div className="flex justify-center items-center w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="relative flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <Icon className="w-10 h-10 text-gray-400" name="upload" size={24} />
        </div>
        <FileInputBox inputId="dropzone-file" multiple onChange={handleChange} />
        {images.length > 0 ? (
          <div className="absolute w-full h-full">
            <p className="w-full h-full">
              <img className="w-full h-full rounded-md object-cover" src={images[0]} alt="" />
            </p>
          </div>
        ) : null}
      </label>
    </div>
  );
};

export default DropZone;
