import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import { MainPostCard, ReviewCard } from '@src/components/molecule';
import HomeMainSection from '@src/components/template/HomePage/HomeMainSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { useTimeout } from '@src/hooks';
import React, { useState } from 'react';

// SSR 에서 미리 불러와서 데이터가 있으면 shimmering 아니면 빈 페이지로 보여줘야함
// export const getServerSideProps = withAuthSSR()

const HomePage = () => {
  const [show, setShow] = useState(false);

  useTimeout(() => {
    setShow(true);
  }, 1000);

  return (
    <PageLayout fullWidth fixedHeight>
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
