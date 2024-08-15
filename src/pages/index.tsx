import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import HomeMainSection from '@src/components/template/HomePage/HomeMainSection';
import siteMetadata from '@src/core/config/siteMetadata';
import React from 'react';

// export const getServerSideProps = withAuthSSR()

const HomePage = () => {
  return (
    <PageLayout fixedHeight>
      <PageSEO
        title={siteMetadata.title + ' 메인 페이지'}
        description={'유아 로그를 시작해보세요'}
      />
      <HomeMainSection />
      <FloatingButton />
    </PageLayout>
  );
};

export default HomePage;
