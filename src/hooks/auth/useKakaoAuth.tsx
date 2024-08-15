import { apiKakaoSignIn } from '@src/core/api/apiAuth';
import { envConfig } from '@src/core/config/envConfig';
import { KakaoAuthHookType } from '@src/core/types/auth-type';
import { useLazyScript } from '@src/hooks';
import { setUserInfo } from '@src/store/modules/auth';

export default function useKakaoAuth({
  router,
  dispatch,
  onSuccess,
  onFailure,
}: KakaoAuthHookType) {
  const [isLoaded] = useLazyScript('https://developers.kakao.com/sdk/js/kakao.min.js');

  const processKakaoLogin = async () => {
    if (!isLoaded) {
      throw new Error('Kakao SDK is not loaded');
    }
    if (!Kakao.isInitialized()) {
      Kakao.init(envConfig.kakaoClientId);
    }
    Kakao.Auth.login({
      success: async function (authObj) {
        const { access_token } = authObj;
        try {
          const result = await apiKakaoSignIn({ accessToken: access_token });
          console.log(result);
          dispatch(
            setUserInfo({
              email: result.email,
              username: result.username,
              profile_image: result.profile_image,
            })
          );
          onSuccess?.();
          await router.push('/');
        } catch (e) {
          onFailure?.(e);
        }
      },
      fail: function (err) {
        // Todo: error handling
        onFailure?.(err);
      },
    });
  };

  return [isLoaded, processKakaoLogin] as const;
}
