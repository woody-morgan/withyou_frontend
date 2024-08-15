import { ModalContentType } from '@src/core/types/modal-type';
import React, { FunctionComponent } from 'react';

const PostCreateModalContent: FunctionComponent<ModalContentType> = ({ option }) => {
  const handleSubmit = async (title, description) => {};

  return <div className="w-full flex flex-col items-center">post create</div>;
};

export default PostCreateModalContent;
