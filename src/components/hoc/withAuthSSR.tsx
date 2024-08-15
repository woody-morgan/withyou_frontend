import { apiValidate } from '@src/core/api/apiAuth';
import { clearAuthToken, setAuthToken } from '@src/utils/authUtil';
import axios from 'axios';
import { GetServerSideProps } from 'next';

const withAuthSSR = (getServerSidePropsFunc?: GetServerSideProps) => {
  return async (ctx) => {
    const token = ctx.req.cookies.jwt;
    console.log(token);

    if (!token) {
      clearAuthToken();
      return {
        props: {},
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    setAuthToken(token);

    console.log(axios.defaults.headers);

    try {
      const {
        user: { isNew },
      } = await apiValidate();
      console.log('isNew', isNew);
      if (isNew) {
        return {
          props: {},
          redirect: {
            destination: '/enroll',
            permanent: false,
          },
        };
      }
      return await getServerSidePropsFunc?.(ctx);
    } catch (error) {
      clearAuthToken();
      return {
        props: {},
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  };
};

export default withAuthSSR;
