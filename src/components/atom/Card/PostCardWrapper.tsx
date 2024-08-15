import { Icon } from '@src/components/atom';
import CommonProfile from '@src/components/atom/CommonProfile';
import { PostInfoType } from '@src/core/types/posts-type';
import cx from 'classnames';
import React, { FC } from 'react';

const PostCardWrapper: FC<{
  postInfo: PostInfoType;
  removeSidePadding?: boolean;
  children: React.ReactNode;
}> = ({ postInfo, removeSidePadding, children }) => {
  const { author, author_profile_image, images, text } = postInfo;
  return (
    <div
      className={cx(
        'space-y-2 bg-primary-bg px-side-padding py-4 cursor-pointer',
        removeSidePadding ? 'px-0' : 'px-side-padding'
      )}
    >
      <CommonProfile profileImage={author_profile_image} profileName={author} timeStamp="오늘" />
      {children}
      <div className="flex space-x-2 py-2">
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

export default PostCardWrapper;
