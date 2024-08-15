import { Button, IconButton, ImageWrapper, ToggleButton } from '@src/components/atom';
import { ModalContentType } from '@src/core/types/modal-type';
import { useRootDispatch } from '@src/hooks';
import { RootDispatchType } from '@src/store/modules';
import { closeModal } from '@src/store/modules/modal';
import cx from 'classnames';
import React, { FunctionComponent } from 'react';

const PostCreateModalContentHeader: FunctionComponent<{
  dispatch: RootDispatchType;
  onComplete: () => void;
}> = ({ dispatch, onComplete }) => {
  return (
    <div
      className={cx(
        'relative top-0 w-full h-gb-header',
        'flex items-center justify-between',
        'bg-primary-bg text-black'
      )}
    >
      <IconButton
        name="close"
        size={28}
        onClick={() => {
          dispatch(closeModal());
        }}
      />
      <h2>새 로그</h2>
      <Button
        size="xsmall"
        styles="transparent"
        className="text-wy-blue-500 py-0 px-0"
        onClick={onComplete}
      >
        완료
      </Button>
    </div>
  );
};

const PostCreateModalContent: FunctionComponent<ModalContentType> = ({ option }) => {
  const dispatch = useRootDispatch();

  const handleOnComplete = () => {
    dispatch(closeModal());
  };

  return (
    <div className="w-full flex flex-col">
      <PostCreateModalContentHeader dispatch={dispatch} onComplete={handleOnComplete} />
      <div className="pt-4 divide-y-2 divide-gray-100 children:py-5">
        <div className="flex space-x-2 justify-center">
          <div className="relative flex-shrink-0 w-20 h-20">
            <ImageWrapper
              className="rounded-xl"
              src="/static/banner.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <textarea
            className="w-full h-20 border-none outline-none resize-none"
            placeholder="이 사진에 대해 설명해주세요"
            maxLength={200}
          />
        </div>
        <div className="flex w-full justify-between">
          <p>오픈 여부</p>
          <ToggleButton />
        </div>
        <div className="flex w-full justify-between">
          <p>오픈 기간</p>
          <IconButton name="rightArrow" size={24} className="text-gray-200" />
        </div>
        <div className="flex w-full justify-between">
          <p>태그 입력</p>
          <IconButton name="rightArrow" size={24} className="text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default PostCreateModalContent;
