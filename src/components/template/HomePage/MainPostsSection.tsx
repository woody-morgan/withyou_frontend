import { IntersectWrapper } from '@src/components/ui/atom';
import { MainPostCard, ReviewCard } from '@src/components/ui/molecule';
import PostsSectionWrapper from '@src/components/ui/molecule/DiariesSectionWrapper';
import { ApiCommonDiaryProps } from '@src/core/api/interface/api-diary-interface';
import React, { Fragment, FunctionComponent } from 'react';

interface MainPostsSectionProps {
  diaries: ApiCommonDiaryProps[];
  onScrollReachBottom: () => void;
}

const MainPostsSection: FunctionComponent<MainPostsSectionProps> = ({
  diaries,
  onScrollReachBottom,
}) => {
  return (
    <Fragment>
      {diaries.length > 0 && (
        <Fragment>
          <PostsSectionWrapper>
            {diaries.slice(0).map((post, index) => {
              return (
                <Fragment key={`main-post-${index}`}>
                  {index !== 0 && index % 7 === 0 && <ReviewCard />}
                  <MainPostCard postInfo={post} />
                </Fragment>
              );
            })}
            <IntersectWrapper keepObserve onIntersect={onScrollReachBottom} />
          </PostsSectionWrapper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MainPostsSection;
