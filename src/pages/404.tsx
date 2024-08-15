import { PageLayout } from '@src/components/layout';
import { Button } from '@src/components/ui/atom';
import Link from 'next/link';
import React from 'react';

const FourZeroFourPage = () => {
  return (
    <PageLayout fixedHeight>
      <div className="h-full flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
        <Link href="/">
          <Button styles="wy-blue" className="text-white font-bold">
            메인으로 돌아가기
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default FourZeroFourPage;
