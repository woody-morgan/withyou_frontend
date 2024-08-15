import { PageSEO } from '@src/components/analytics/SEO';
import { FullWidthOverflowWrapper } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import ProfileIntroSection from '@src/components/template/ProfilePage/ProfileIntroSection';
import ProfilePostsSection from '@src/components/template/ProfilePage/ProfilePostsSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { samplePostData } from '@src/core/data/sample-post-data';
import { useRootDispatch, useRootState } from '@src/hooks';
import { addPosts } from '@src/store/modules/posts';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

// Todo: enable ssr
// export const getServerSideProps = withAuthSSR();

const ProfilePage: NextPage = () => {
  const dispatch = useRootDispatch();
  const postsState = useRootState((state) => state.posts);

  // Todo: fetch data from server
  useEffect(() => {
    dispatch(addPosts({ posts: samplePostData }));
  }, []);

  return (
    <PageLayout fullWidth fixedHeight>
      <PageSEO title={siteMetadata.title + ' Profile'} description={'profile page'} />
      <FullWidthOverflowWrapper>
        <ProfileIntroSection />
        <div className="bg-gray-50">
          <ProfilePostsSection posts={postsState.posts} />
        </div>
      </FullWidthOverflowWrapper>
    </PageLayout>
  );
};

export default ProfilePage;
