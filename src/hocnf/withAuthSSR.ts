// Todo clear jwt token on client
import { apiValidate } from '@src/core/api/apiAuth';
import { wrapper } from '@src/store';
import { clearUserInfo, setUserInfo } from '@src/store/modules/auth';
import { showBottomNav } from '@src/store/modules/layout';
import { setServerAuthToken } from '@src/utils/authUtil';
import { GetServerSideProps } from 'next';

const withAuthSSR = (getServerSidePropsFunc?: GetServerSideProps): GetServerSideProps => {
  return wrapper.getServerSideProps((store) => {
    return async (ctx) => {
      const token = ctx.req.cookies.jwt;
      setServerAuthToken(token);
      try {
        // Todo get user info and set to store
        const result = await apiValidate();
        store.dispatch(
          setUserInfo({
            id: result.id,
            familyId: result.familyId,
            gender: result.gender,
            nickname: result.nickname,
            role: result.role,
            roles: result.roles,
            thumbnail: result.thumbnail,
            vendor: result.vendor,
            isNew: result.isNew,
          })
        );
        store.dispatch(showBottomNav());
        return await getServerSidePropsFunc?.(ctx);
      } catch (error) {
        // should clear jwt token on client
        store.dispatch(clearUserInfo());
        const { resolvedUrl } = ctx;
        return {
          props: {},
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
    };
  });
};

export default withAuthSSR;
