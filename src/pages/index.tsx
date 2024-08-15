import { addPosts } from '@src/atom/posts';
import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton, FullWidthOverflowWrapper } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import HomeMainSection from '@src/components/template/HomePage/HomeMainSection';
import MainPostsSection from '@src/components/template/HomePage/MainPostsSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { samplePostData } from '@src/core/data/sample-post-data';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(addPosts);

  useEffect(() => {
    setPosts({ posts: samplePostData });
  }, []);

  return (
    <PageLayout fullWidth fixedHeight className="bg-gray-50">
      <PageSEO
        title={siteMetadata.title + ' 메인 페이지'}
        description={'유아 로그를 시작해보세요'}
      />
      <FullWidthOverflowWrapper>
        {posts.posts.length > 0 ? <MainPostsSection posts={posts.posts} /> : <HomeMainSection />}
      </FullWidthOverflowWrapper>
      <FloatingButton />
    </PageLayout>
  );
};

export default HomePage;
