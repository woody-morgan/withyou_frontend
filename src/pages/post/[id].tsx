import { PageLayout } from '@src/components/layout';
import CommonBackwardHeader from '@src/components/molecule/PageHeader/CommonBackwardHeader';
import DetailPostCard from '@src/components/molecule/PostCard/DetailPostCard';
import PostCommentTemplate from '@src/components/template/PostPage/PostCommentTemplate';
import { samplePostData } from '@src/core/data/sample-post-data';
import { withAuthCSR } from '@src/hocnf';
import { useRouter } from 'next/router';
import React from 'react';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleBackward = () => {
    router.back();
  };

  return (
    <PageLayout
      fullWidth
      fixedHeight
      className="bg-gray-50"
      headerContent={<CommonBackwardHeader onBack={handleBackward} />}
    >
      <div className="w-full h-full space-y-2 overflow-y-scroll">
        <DetailPostCard postInfo={samplePostData[0]} />
        <PostCommentTemplate />
      </div>
    </PageLayout>
  );
};

export default withAuthCSR(PostPage);
