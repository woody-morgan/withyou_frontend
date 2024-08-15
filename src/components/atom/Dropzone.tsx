import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

const DropZone: FunctionComponent<{
  imageFiles: File[];
  setImageFiles: (files: File[]) => void;
}> = ({ imageFiles, setImageFiles }) => {
  const [images, setImages] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const validImageFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert('png, jpg, jpeg 파일만 업로드 가능합니다.');
  };

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }

    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="relative flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
        </div>
        <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleChange} />
        {images.length > 0 ? (
          <div className="absolute w-full h-full">
            <p className="w-full h-full">
              <img className="w-full h-full rounded-md" src={images[0]} alt="" />
            </p>
          </div>
        ) : null}
      </label>
    </div>
  );
};

export default DropZone;
