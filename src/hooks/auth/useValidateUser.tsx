import { apiValidate } from '@src/core/api/apiAuth';
import { clearAuthToken } from '@src/utils/authUtil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useValidateUser() {
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const {
          user: { isNew },
        } = await apiValidate();
        // if (isNew) {
        //   router.push('/enroll');
        // } else {
        //   // need router path array for redirect
        // }
      } catch (error) {
        //  need to show toast or alert or anything to user
        clearAuthToken();
        router.push('/login');
      }
    }

    checkAuth();
  }, []);
}
