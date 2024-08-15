import { Icon } from '@src/components/ui/atom';
import CommonProfile from '@src/components/ui/atom/CommonProfile';
import PostCardWrapper, {
  CommonPostCardWrapperProps,
} from '@src/components/ui/molecule/PostCard/Wrapper/PostCardWrapper';
import React, { FunctionComponent } from 'react';

const MainPostCardWrapper: FunctionComponent<CommonPostCardWrapperProps> = ({
  postInfo,
  children,
}) => {
  const { author, author_profile_image, images, text } = postInfo;

  return (
    <PostCardWrapper>
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
    </PostCardWrapper>
  );
};

export default MainPostCardWrapper;
