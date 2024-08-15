import { RootDispatchType } from '@src/store/modules';
import { NextRouter } from 'next/router';

export type CommonUserAuthInfoType = {
  user: {
    id: number;
    familyId: number | null;
    gender: 'male' | 'female' | null;
    nickname: string | null;
    role: string | null;
    roles: string[];
    thumbnail: string | null;
    vendor: 'kakao' | 'google' | 'apple';
    isNew: boolean;
  };
};

export type ValidateResult = CommonUserAuthInfoType;

export type SignInResult = {
  accessToken: string;
};

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
