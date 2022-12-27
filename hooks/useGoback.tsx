import Router from 'next/router';

const useGoBack = () => {
  const goBack = () => Router.back();

  return goBack;
};

export default useGoBack;
