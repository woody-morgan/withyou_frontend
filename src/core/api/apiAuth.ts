import { CommonApiError, isAxiosError } from '@src/core/types/axios-error';
import { setClientAuthToken } from '@src/utils/authUtil';
import { ToastError, ToastWarn } from '@src/utils/toast';
import axios from 'axios';

export type ValidateResult = {
  email: string;
  username: string;
  profile_image: string;
  isNew: boolean;
};

export type SignInResult = ValidateResult & {
  accessToken: string;
};

export const apiValidate = async () => {
  try {
    const { data } = await axios.get<ValidateResult>('/auth');
    return data;
  } catch (err) {
    ToastError('error occured during validation process');
    throw err;
  }
};

export const apiKakaoSignIn = async ({ accessToken }: { accessToken: string }) => {
  try {
    const { data } = await axios.post<SignInResult>('/auth/kakao/callback', {
      accessToken,
    });
    setClientAuthToken(data.accessToken);
    return data;
  } catch (err) {
    if (isAxiosError<CommonApiError>(err)) {
      const { message, error } = err.response.data;
      ToastWarn(message);
      throw new Error(error);
    } else {
      ToastError('error occured during kakao signin process');
      throw err;
    }
  }
};
