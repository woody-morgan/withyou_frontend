import { Icon, ImageWrapper } from '@src/components/atom';
import { PostInfoType } from '@src/core/types/posts-type';
import React, { Fragment, FunctionComponent } from 'react';

const PostImageLessThanThree: FunctionComponent<Pick<PostInfoType, 'images'>> = ({ images }) => (
  <Fragment>
    {images.map((image, index) => (
      <div
        key={`post-image-${index}`}
        className="relative flex flex-shrink flex-nowrap w-full h-full"
      >
        <ImageWrapper src={image} className="" layout="fill" objectFit="cover" />
      </div>
    ))}
  </Fragment>
);

const PostImageMoreThanThree: FunctionComponent<Pick<PostInfoType, 'images'>> = ({ images }) => (
  <Fragment>
    <div className="relative flex flex-shrink basis-3/5 mr-1">
      <ImageWrapper src={images[0]} className="" layout="fill" objectFit="cover" />
    </div>
    <div className="relative flex flex-col flex-shrink basis-2/5 space-y-1">
      <div className="relative flex basis-1/2">
        <ImageWrapper src={images[1]} className="" layout="fill" objectFit="cover" />
      </div>
      <div className="relative flex basis-1/2">
        <ImageWrapper
          src={images[2]}
          className=""
          layout="fill"
          objectFit="cover"
          {...(images.length > 3 && {
            bgFilter: 'bg-black/50',
          })}
        />
        {images.length > 3 && (
          <div className="absolute translate-center-xy text-white z-10 flex items-center text-2xl">
            <Icon name="plus" />
            <span>{images.length - 3}</span>
          </div>
        )}
      </div>
    </div>
  </Fragment>
);

const PostImageWrapper: FunctionComponent<Pick<PostInfoType, 'images'>> = ({ images }) => {
  return (
    <div className="relative flex w-full h-48 pointer-events-none rounded-xl overflow-hidden">
      {images.length <= 2 ? (
        <PostImageLessThanThree images={images} />
      ) : (
        <PostImageMoreThanThree images={images} />
      )}
    </div>
  );
};

export default PostImageWrapper;
