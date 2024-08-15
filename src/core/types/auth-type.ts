import { RootDispatchType } from '@src/store/modules';
import { NextRouter } from 'next/router';

export type CommonUserAuthInfoType = {
  userId: number;
  userName: string;
  userProfile: string;
  userType: 'kakao' | 'google' | 'apple';
  isNew: boolean;
};

export type ValidateResult = CommonUserAuthInfoType;

export type UserAuthInfoType = CommonUserAuthInfoType & {
  isLogin: boolean;
};

export type SocialAuthHookType = {
  router: NextRouter;
  dispatch: RootDispatchType;
  onSuccess?: () => void;
};

export type KakaoAuthHookType = SocialAuthHookType & {
  onFailure?: (e?: Error | Kakao.Auth.AuthError) => void;
};

export type NaverAuthHookType = SocialAuthHookType & {
  onFailure?: (e?: Error) => void;
};

export type GoogleAuthHookType = SocialAuthHookType & {
  onFailure?: (e?: Error) => void;
};

export type AppleAuthHookType = SocialAuthHookType & {
  onFailure?: (e?: Error) => void;
};
