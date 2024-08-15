import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import { MainPostCard, ReviewCard } from '@src/components/molecule';
import HomeMainSection from '@src/components/template/HomePage/HomeMainSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { withAuthSSR } from '@src/hocnf';
import { useTimeout } from '@src/hooks';
import React, { useState } from 'react';

// fetch data at ssr & if there is data show shimmering page
export const getServerSideProps = withAuthSSR();

const HomePage = () => {
  const [show, setShow] = useState(false);

  useTimeout(() => {
    setShow(true);
  }, 1000);

  return (
    <PageLayout fullWidth fixedHeight className="bg-gray-50">
      <PageSEO
        title={siteMetadata.title + ' 메인 페이지'}
        description={'유아 로그를 시작해보세요'}
      />
      {show ? (
        <div className="w-full h-full overflow-scroll space-y-8">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <MainPostCard key={`main-post-${index}`} />
            ))}
          <ReviewCard />
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <MainPostCard key={`main-post-${index}`} />
            ))}
        </div>
      ) : (
        <HomeMainSection />
      )}
      <FloatingButton />
    </PageLayout>
  );
};

export default HomePage;
