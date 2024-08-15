import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import { MainPostCard, ReviewCard } from '@src/components/molecule';
import siteMetadata from '@src/core/config/siteMetadata';
import { withAuthSSR } from '@src/hocnf';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

// fetch data at ssr & if there is data show shimmering page
export const getServerSideProps = withAuthSSR();

const HomePage = () => {
  return (
    <PageLayout fullWidth fixedHeight className="bg-gray-50">
      <PageSEO
        title={siteMetadata.title + ' 메인 페이지'}
        description={'유아 로그를 시작해보세요'}
      />
      <AnimatePresence initial={false}>
        <div className="relative w-full h-full overflow-y-scroll overflow-x-hidden">
          <motion.div
            key="main-post"
            className="absolute top-0 left-0 flex flex-col w-full h-full overflow-scroll space-y-8"
          >
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Link href={`/post/${index}`} key={`main-post-${index}`}>
                  <a>
                    <MainPostCard author="힘찬엄마" />
                  </a>
                </Link>
              ))}
            <ReviewCard />
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Link href={`/post/${index}`} key={`main-post-${index + 10}`}>
                  <a>
                    <MainPostCard author="힘찬엄마" />
                  </a>
                </Link>
              ))}
          </motion.div>
          {/*<HomeMainSection />*/}
        </div>
      </AnimatePresence>
      <FloatingButton />
    </PageLayout>
  );
};

export default HomePage;
