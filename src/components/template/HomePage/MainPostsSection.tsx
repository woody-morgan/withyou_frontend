import { MainPostCard, ReviewCard } from '@src/components/molecule';
import PostsSectionWrapper from '@src/components/molecule/PostsSectionWrapper';
import { PostsInfoType } from '@src/core/types/posts-type';
import React, { Fragment, FunctionComponent } from 'react';

const MainPostsSection: FunctionComponent<PostsInfoType> = ({ posts }) => {
  return (
    <Fragment>
      {posts.length > 0 && (
        <PostsSectionWrapper>
          {posts
            .slice(0)
            .reverse()
            .map((post, index) => {
              return (
                <Fragment key={`main-post-${index}`}>
                  {index !== 0 && index % 2 === 0 && <ReviewCard />}
                  <MainPostCard postInfo={post} />
                </Fragment>
              );
            })}
        </PostsSectionWrapper>
      )}
    </Fragment>
  );
};

export default MainPostsSection;
