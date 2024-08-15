import { PageSEO } from '@src/components/analytics/SEO';
import { FloatingButton } from '@src/components/atom';
import { PageLayout } from '@src/components/layout';
import { MainPostCard, ReviewCard } from '@src/components/molecule';
import HomeMainSection from '@src/components/template/HomePage/HomeMainSection';
import siteMetadata from '@src/core/config/siteMetadata';
import { withAuthSSR } from '@src/hocnf';
import { useRootDispatch, useRootState } from '@src/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Fragment } from 'react';

// fetch data at ssr & if there is data show shimmering page
export const getServerSideProps = withAuthSSR();

const HomePage = () => {
  const dispatch = useRootDispatch();
  const postsState = useRootState((state) => state.posts);

  // useEffect(() => {
  //   dispatch(
  //     addPosts({
  //       posts: [
  //         {
  //           author: '힘찬 아빠',
  //           author_profile_image: '/static/sample_profile_02.png',
  //           text: '기저귀 잘 갈았어요~ ㅎ 오늘따라 얌전히 잘 갈아줘서 감동감동.. ㅋㅋ',
  //           images: '/static/sample_family_01.png',
  //         },
  //         {
  //           author: '힘찬 엄마',
  //           author_profile_image: '/static/sample_profile.png',
  //           text: '오늘 처음으로 마마 라고 불러줬음 ㅎㅎ 마마 = 엄마 맞지?',
  //           images: '/static/sample_family_02.png',
  //         },
  //         {
  //           author: '힘찬 아빠',
  //           author_profile_image: '/static/sample_profile_02.png',
  //           text: '기저귀 잘 갈았어요~ ㅎ 오늘따라 얌전히 잘 갈아줘서 감동감동.. ㅋㅋ',
  //           images: '/static/sample_family_01.png',
  //         },
  //       ],
  //     })
  //   );
  // }, []);

  return (
    <PageLayout fullWidth fixedHeight className="bg-gray-50">
      <PageSEO
        title={siteMetadata.title + ' 메인 페이지'}
        description={'유아 로그를 시작해보세요'}
      />
      <AnimatePresence initial={false}>
        <div className="relative w-full h-full overflow-y-scroll overflow-x-hidden">
          {postsState.posts.length > 0 ? (
            <motion.div
              key="main-post"
              className="absolute top-0 left-0 flex flex-col w-full h-full overflow-scroll space-y-8"
            >
              {postsState.posts
                .slice(0)
                .reverse()
                .map((post, index) => {
                  return (
                    <Fragment key={`main-post-${index + 10}`}>
                      {index !== 0 && index % 2 === 0 && <ReviewCard />}
                      {/*<Link href={`/`}>*/}
                      {/*  <a>*/}
                      <MainPostCard postInfo={post} />
                      {/*</a>*/}
                      {/*</Link>*/}
                    </Fragment>
                  );
                })}
            </motion.div>
          ) : (
            <HomeMainSection dispatch={dispatch} />
          )}
        </div>
      </AnimatePresence>
      <FloatingButton />
    </PageLayout>
  );
};

export default HomePage;
