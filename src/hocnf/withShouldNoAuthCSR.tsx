import useNoValidateUser from '@src/hooks/auth/useNoValidateUser';

const withAuthClientSide = (Component: any) => {
  const HOCComponent = (props) => {
    useNoValidateUser();
    return <Component {...props} />;
  };
  return HOCComponent;
};

export default withAuthClientSide;
