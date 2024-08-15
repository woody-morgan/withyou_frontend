// Todo clear jwt token on client
import { apiValidate } from '@src/core/api/apiAuth';
import { withStoreSSR } from '@src/hocnf/index';
import { clearUserInfo, setUserInfo } from '@src/store/modules/auth';
import { showBottomNav } from '@src/store/modules/layout';

const withShouldNoAuthSSR = () => {
  return withStoreSSR((store) => {
    return async (ctx) => {
      const token = ctx.req.cookies.jwt;
      if (!token) {
        return {
          props: {},
        };
      }
      try {
        const result = await apiValidate();
        const { user } = result;
        store.dispatch(
          setUserInfo({
            user,
          })
        );
        store.dispatch(showBottomNav());
        return {
          props: {},
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      } catch (error) {
        store.dispatch(clearUserInfo());
        return {
          props: {},
        };
      }
    };
  });
};

export default withShouldNoAuthSSR;
