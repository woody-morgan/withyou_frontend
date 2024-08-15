import PostImageWrapper from '@src/components/molecule/PostCard/Wrapper/PostImageWrapper';
import ProfilePostCardWrapper from '@src/components/molecule/PostCard/Wrapper/ProfilePostCardWrapper';
import { PostInfoType } from '@src/core/types/posts-type';
import Link from 'next/link';
import React, { FC } from 'react';

const ProfilePostCard: FC<{
  postInfo: PostInfoType;
}> = ({ postInfo }) => {
  const { text, images } = postInfo;
  return (
    <ProfilePostCardWrapper postInfo={postInfo}>
      <Link href={'/post/1'}>
        <a className="block">
          <PostImageWrapper images={images} />
        </a>
      </Link>
    </ProfilePostCardWrapper>
  );
};

export default ProfilePostCard;
