import { Icon, ImageWrapper } from '@src/components/atom';
import React, { forwardRef, ForwardRefRenderFunction, memo } from 'react';

const MainPostCard: ForwardRefRenderFunction<
  HTMLDivElement,
  {
    author: string;
  }
> = ({ author }, ref) => {
  return (
    <div ref={ref} className="space-y-2 bg-primary-bg px-side-padding py-4 cursor-pointer">
      <div className="flex space-x-2">
        <div className="relative w-10 h-10 rounded-full">
          <ImageWrapper src={'/static/sample_profile.png'} layout="fill" />
        </div>
        <div className="flex flex-col">
          <h4>{author}</h4>
          <h5 className="text-gray-400">오늘</h5>
        </div>
      </div>
      <div className="relative w-full h-48">
        <ImageWrapper
          src="/static/banner.jpeg"
          className="rounded-xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full">
        <p className="hide-text-overflow">
          오늘 처음으로 마마 라고 불러줬음 ㅎㅎ 마마 = 엄마 맞지? 오늘 처음으로 마마 라고 불러줬음
          ㅎㅎ 마마 = 엄마 맞지?오늘 처음으로 마마 라고 불러줬음 ㅎㅎ 마마 = 엄마 맞지?{' '}
        </p>
        <div className="text-link-700">..더보기</div>
      </div>
      <div className="flex space-x-2">
        <div className="flex text-gray-500">
          <Icon name="comment" />
          <span>댓글 1개</span>
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
