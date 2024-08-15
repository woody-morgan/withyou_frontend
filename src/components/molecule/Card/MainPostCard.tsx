import { ImageWrapper, PostCardWrapper } from '@src/components/atom';
import { PostInfoType } from '@src/core/types/posts-type';
import Link from 'next/link';
import React, { FC } from 'react';

const MainPostCard: FC<{
  postInfo: PostInfoType;
}> = ({ postInfo }) => {
  const { text, images } = postInfo;
  return (
    <PostCardWrapper postInfo={postInfo}>
      <Link href={'/post/1'}>
        <div className="relative w-full h-48">
          <ImageWrapper
            src={typeof images === 'string' ? images : images[0]}
            className="rounded-xl pointer-events-none"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>

      <div className="w-full">
        <p className="hide-text-overflow">{text}</p>
        <div className="text-link-700">..더보기</div>
      </div>
    </PostCardWrapper>
  );
};

export default MainPostCard;
