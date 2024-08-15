import { showBottomBar } from '@src/atom/layout';
import { apiValidate } from '@src/core/api/apiAuth';
import { clearAuthToken } from '@src/utils/authUtil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export default function useValidateUser() {
  const router = useRouter();
  const showBottomCB = useSetRecoilState(showBottomBar);

  useEffect(() => {
    async function checkAuth() {
      try {
        await apiValidate();
        showBottomCB();
      } catch (error) {
        //  need to show toast or alert or anything to user
        clearAuthToken();
        await router.push('/login');
      }
    }

    checkAuth();
  }, []);
}
