import MainPostCardWrapper from '@src/components/molecule/PostCard/Wrapper/MainPostCardWrapper';
import PostImageWrapper from '@src/components/molecule/PostCard/Wrapper/PostImageWrapper';
import { PostInfoType } from '@src/core/types/posts-type';
import Link from 'next/link';
import React, { FC } from 'react';

const MainPostCard: FC<{
  postInfo: PostInfoType;
}> = ({ postInfo }) => {
  const { text, images } = postInfo;
  return (
    <MainPostCardWrapper postInfo={postInfo}>
      <Link href={'/post/1'}>
        <a className="block">
          <PostImageWrapper images={images} />
        </a>
      </Link>
      <div className="w-full">
        <p className="hide-text-overflow">{text}</p>
        <div className="text-link-700">..더보기</div>
      </div>
    </MainPostCardWrapper>
  );
};

export default MainPostCard;
