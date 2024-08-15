import { apiValidate } from '@src/core/api/apiAuth';
import { clearAuthToken } from '@src/utils/authUtil';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export default function useValidateUser() {
  const router = useRouter();

  const validateUser = useCallback(async () => {
    try {
      await apiValidate();
    } catch (error) {
      clearAuthToken();
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    validateUser();
  }, []);
}
