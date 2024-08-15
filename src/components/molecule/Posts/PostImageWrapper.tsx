import { ImageWrapper } from '@src/components/atom';
import React, { FunctionComponent } from 'react';

const PostImageWrapper: FunctionComponent<{
  images: string[] | string;
}> = ({ images }) => {
  return (
    <div className="relative w-full h-48">
      <ImageWrapper
        src={typeof images === 'string' ? images : images[0]}
        className="rounded-xl pointer-events-none"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default PostImageWrapper;
