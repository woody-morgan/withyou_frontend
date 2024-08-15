import { Icon, ImageWrapper } from '@src/components/atom';
import Link from 'next/link';
import React, { memo } from 'react';

const MainPostCard = () => {
  return (
    <div className="space-y-2 bg-primary-bg px-side-padding py-4">
      <div className="flex space-x-2">
        <div className="relative w-10 h-10 rounded-full">
          <ImageWrapper src={'/static/sample_profile.png'} layout="fill" />
        </div>
        <div className="flex flex-col">
          <h4>힘찬엄마</h4>
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
        <Link href="/">
          <a className="text-link-700">..더보기</a>
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link href="/">
          <a className="flex text-gray-500">
            <Icon name="comment" />
            <span>댓글 1개</span>
          </a>
        </Link>
        <Link href="/">
          <a className="flex text-gray-500">
            <Icon name="share" />
            <span>공유하기</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default memo(MainPostCard);
