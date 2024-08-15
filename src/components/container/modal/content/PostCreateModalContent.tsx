import { Button, IconButton, ToggleButton } from '@src/components/atom';
import DropZone from '@src/components/atom/Dropzone';
import { ModalContentType } from '@src/core/types/modal-type';
import { useRootDispatch, useRootState } from '@src/hooks';
import { RootDispatchType } from '@src/store/modules';
import { closeModal } from '@src/store/modules/modal';
import { addPost } from '@src/store/modules/posts';
import cx from 'classnames';
import React, { FunctionComponent, useState } from 'react';

const PostCreateModalContentHeader: FunctionComponent<{
  dispatch: RootDispatchType;
}> = ({ dispatch }) => {
  return (
    <div
      className={cx(
        'relative top-0 w-full h-gb-header',
        'flex items-center justify-between',
        'bg-primary-bg text-black'
      )}
    >
      <IconButton
        type="button"
        name="close"
        size={28}
        onClick={() => {
          dispatch(closeModal());
        }}
      />
      <h2>새 로그</h2>
      <Button type="submit" styles="transparent" className="text-wy-blue-500 py-0 px-0">
        완료
      </Button>
    </div>
  );
};

const PostCreateModalContent: FunctionComponent<ModalContentType> = ({ option }) => {
  const dispatch = useRootDispatch();
  const authState = useRootState((state) => state.auth);
  const [imageFiles, setImageFiles] = useState([]);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (imageFiles.length === 0) {
      alert('이미지를 업로드해주세요');
      return;
    }
    dispatch(
      addPost({
        author: '힘찬엄마',
        author_profile_image: '/static/sample_profile.png',
        text: description,
        images: URL.createObjectURL(imageFiles[0]),
      })
    );
    dispatch(closeModal());
  };

  return (
    <div className="w-full flex flex-col">
      <form onSubmit={handleSubmit}>
        <PostCreateModalContentHeader dispatch={dispatch} />
        <div className="pt-4 divide-y-2 divide-gray-100 children:py-5">
          <div className="flex space-x-2 justify-center">
            <div className="relative flex-shrink-0 w-20 h-20">
              <DropZone imageFiles={imageFiles} setImageFiles={setImageFiles} />
            </div>
            <textarea
              className="w-full h-20 border-none outline-none resize-none bg-white"
              placeholder="이 사진에 대해 설명해주세요"
              maxLength={200}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
      </form>
    </div>
  );
};

export default PostCreateModalContent;
