import { SignInResult, ValidateResult } from '@src/core/types/auth-type';
import { CommonApiError, isAxiosError } from '@src/core/types/axios-error';
import { setAuthToken } from '@src/utils/authUtil';
import { ToastError, ToastWarn } from '@src/utils/toast';
import axios from 'axios';

export const apiValidate = async () => {
  try {
    const { data } = await axios.get<ValidateResult>('/auth/validate');
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
    setAuthToken(data.jwtToken);
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
