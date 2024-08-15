import ProfilePostCard from '@src/components/molecule/Card/ProfilePostCard';
import PostsSectionWrapper from '@src/components/molecule/Posts/PostsSectionWrapper';
import { PostsInfoType } from '@src/core/types/posts-type';
import React, { Fragment, FunctionComponent } from 'react';

const ProfilePostsSection: FunctionComponent<PostsInfoType> = ({ posts }) => {
  return (
    <Fragment>
      {posts.length > 0 && (
        <PostsSectionWrapper>
          {posts.map((post, index) => {
            return (
              <Fragment key={`profile-post-${index}`}>
                <ProfilePostCard postInfo={post} />
              </Fragment>
            );
          })}
        </PostsSectionWrapper>
      )}
    </Fragment>
  );
};

export default ProfilePostsSection;
