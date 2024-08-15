import { PostInfoType } from '@src/core/types/posts-type';
import cx from 'classnames';
import React, { FC } from 'react';

export type CommonPostCardWrapperProps = {
  postInfo: PostInfoType;
  children: React.ReactNode;
};

const PostCardWrapper: FC<Omit<CommonPostCardWrapperProps, 'postInfo'>> = ({ children }) => {
  return (
    <div className={cx('space-y-2 bg-primary-bg px-side-padding py-4 cursor-pointer')}>
      {children}
    </div>
  );
};

export default PostCardWrapper;
