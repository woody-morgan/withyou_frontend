import CommonProfile from '@src/components/ui/atom/CommonProfile';
import { twcDivide } from '@src/utils/twcUtil';
import cx from 'classnames';
import React from 'react';

const PostCommentTemplate = () => {
  return (
    <div className={cx('bg-primary-bg', 'px-side-padding', twcDivide)}>
      <div className="py-4 space-y-2">
        <CommonProfile
          profileImage="/static/sample_profile_02.png"
          profileName="아빠"
          timeStamp="방금 전"
        />
        <p>빨리 들어오삼 ~ ㅋㅋ</p>
      </div>
      <div className="py-4 space-y-2">
        <CommonProfile
          profileImage="/static/sample_profile.png"
          profileName="힘찬엄마"
          timeStamp="방금 전"
        />
        <p>얼른 보고싶다 ~ ^^</p>
      </div>
      <div className="py-4 space-y-2">
        <CommonProfile
          profileImage="/static/sample_profile.png"
          profileName="힘찬엄마"
          timeStamp="방금 전"
        />
        <p>너무 기여워~~</p>
      </div>
    </div>
  );
};

export default PostCommentTemplate;
