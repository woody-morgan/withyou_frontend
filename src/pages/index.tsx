import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton, FullWidthOverflowWrapper } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import HomeMainSection from '@src/components/template/HomePage/HomeMainSection';
import MainPostsSection from '@src/components/template/HomePage/MainPostsSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { samplePostData } from '@src/core/data/sample-post-data';
import { useRootDispatch, useRootState } from '@src/hooks';
import { addPosts } from '@src/store/modules/posts';
import React, { useEffect } from 'react';

// Todo: enable ssr
// export const getServerSideProps = withAuthSSR();

const HomePage = () => {
  const dispatch = useRootDispatch();
  const postsState = useRootState((state) => state.posts);

  // Todo: fetch data from server
  useEffect(() => {
    dispatch(addPosts({ posts: samplePostData }));
  }, []);

  return (
    <PageLayout fullWidth fixedHeight className="bg-gray-50">
      <PageSEO
        title={siteMetadata.title + ' 메인 페이지'}
        description={'유아 로그를 시작해보세요'}
      />
      <FullWidthOverflowWrapper>
        {postsState.posts.length > 0 ? (
          <MainPostsSection posts={postsState.posts} />
        ) : (
          <HomeMainSection dispatch={dispatch} />
        )}
      </FullWidthOverflowWrapper>
      <FloatingButton />
    </PageLayout>
  );
};

export default HomePage;
