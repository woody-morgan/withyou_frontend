import { ImageWrapper } from '@src/components/atom';
import MainPostCardWrapper from '@src/components/molecule/Card/Wrapper/MainPostCardWrapper';
import { PostInfoType } from '@src/core/types/posts-type';
import React, { FC } from 'react';

const DetailPostCard: FC<{
  postInfo: PostInfoType;
}> = ({ postInfo }) => {
  const { text, images } = postInfo;
  return (
    <MainPostCardWrapper postInfo={postInfo}>
      <div className="w-full">
        <p className="hide-text-overflow">{text}</p>
      </div>
      {typeof images === 'string' ? (
        <div className="relative w-full h-48">
          <ImageWrapper
            src={images}
            className="rounded-xl pointer-events-none"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        images.map((image, index) => {
          return (
            <div key={`detail-post-image-${index}`} className="relative w-full h-48">
              <ImageWrapper
                src={image}
                className="rounded-xl pointer-events-none"
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })
      )}
    </MainPostCardWrapper>
  );
};

export default DetailPostCard;
