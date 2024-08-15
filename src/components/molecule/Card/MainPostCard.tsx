import { Icon, ImageWrapper } from '@src/components/atom';
import { PostInfoType } from '@src/core/types/posts-type';
import React, { forwardRef, ForwardRefRenderFunction, memo } from 'react';

const MainPostCard: ForwardRefRenderFunction<
  HTMLDivElement,
  {
    postInfo: PostInfoType;
  }
> = ({ postInfo }, ref) => {
  const { author, author_profile_image, images, text } = postInfo;
  return (
    <div ref={ref} className="space-y-2 bg-primary-bg px-side-padding py-4 cursor-pointer">
      <div className="flex space-x-2">
        <div className="relative w-10 h-10 rounded-full">
          <ImageWrapper src={author_profile_image} layout="fill" />
        </div>
        <div className="flex flex-col">
          <h4>{author}</h4>
          <h5 className="text-gray-400">오늘</h5>
        </div>
      </div>
      <div className="relative w-full h-48">
        <ImageWrapper
          src={typeof images === 'string' ? images : images[0]}
          className="rounded-xl pointer-events-none"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full">
        <p className="hide-text-overflow">{text}</p>
        <div className="text-link-700">..더보기</div>
      </div>
      <div className="flex space-x-2">
        <div className="flex text-gray-500">
          <Icon name="comment" />
          <span>댓글 0개</span>
        </div>
        <div className="flex text-gray-500">
          <Icon name="share" />
          <span>공유하기</span>
        </div>
      </div>
    </div>
  );
};

export default memo(forwardRef(MainPostCard));
