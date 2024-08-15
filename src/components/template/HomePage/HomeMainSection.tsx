import { ButtonWithIcon, ImageWrapper } from '@src/components/atom';
import { RootDispatchType } from '@src/store/modules';
import { openPostCreateModal } from '@src/store/modules/modal';
import React, { FunctionComponent, memo } from 'react';

const HomeMainSection: FunctionComponent<{
  dispatch: RootDispatchType;
}> = ({ dispatch }) => {
  return (
    <div className="w-full h-full space-y-2 flex flex-col justify-center items-center text-center">
      <div className="relative w-80 md:w-80">
        <div className="relative w-full">
          <ImageWrapper
            src="/static/mandu.png"
            layout="responsive"
            width="500px"
            height="300px"
            alt="notebook"
            priority
          />
          <h2 className="absolute w-full translate-center-x bottom-14">
            <span className="text-wy-blue-500">오늘</span>을 기록해보세요
          </h2>
        </div>
        <ButtonWithIcon
          nameChange="star"
          sizeChange={28}
          fullWidth
          className="relative -top-8 text-xl font-bold"
          styles="wy-blue"
          size="large"
          onClick={() => {
            dispatch(openPostCreateModal({ fullScreen: true }));
          }}
        >
          기록 시작하기
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default memo(HomeMainSection);
