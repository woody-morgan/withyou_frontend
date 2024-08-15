import { ToastError, ToastWarn } from '@src/utils/toast';
import axios from 'axios';

import { CommonApiError, isAxiosError } from '../types/axios-error';
import { apiGetPresignedUrl } from './apiUtil';

interface UploadProfileInfoRequest {
  imageFile: File;
  role: string;
  nickname: string;
}

export const apiUploadProfileInfo = async ({
  imageFile,
  role,
  nickname,
}: UploadProfileInfoRequest) => {
  try {
    const { fileName } = await apiGetPresignedUrl(imageFile);
    await axios.post('/user/profile/upload', {
      fileName,
      role,
      nickname,
      gender: '',
    });
  } catch (err) {
    if (isAxiosError<CommonApiError>(err)) {
      const { message, error } = err.response.data;
      ToastWarn(message);
      throw new Error(error);
    } else {
      ToastError('error occured during upload profile info process');
      throw err;
    }
  }
};
