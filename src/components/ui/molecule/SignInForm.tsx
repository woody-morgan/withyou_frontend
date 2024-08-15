import { AppleLoginButton, GoogleLoginButton, KakaoLoginButton } from '@src/components/ui/atom';
import { SocialAuthHookType } from '@src/core/types/auth-type';
import React, { FC, memo } from 'react';

const SignInForm: FC<SocialAuthHookType> = ({ ...props }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <AppleLoginButton {...props} />
        <GoogleLoginButton {...props} />
        <KakaoLoginButton {...props} />
      </div>
    </div>
  );
};

export default memo(SignInForm);
