import PostCardWrapper, {
  CommonPostCardWrapperProps,
} from '@src/components/molecule/Card/Wrapper/PostCardWrapper';
import React, { FunctionComponent } from 'react';

const ProfilePostCardWrapper: FunctionComponent<CommonPostCardWrapperProps> = ({
  postInfo,
  children,
}) => {
  const { text } = postInfo;

  return (
    <PostCardWrapper>
      {children}
      <div className="w-full">
        <p className="hide-text-overflow">{text}</p>
        <div className="text-link-700">..더보기</div>
      </div>
      <div className="w-full">
        <p className="text-gray-400">2022.08.01</p>
      </div>
    </PostCardWrapper>
  );
};

export default ProfilePostCardWrapper;
