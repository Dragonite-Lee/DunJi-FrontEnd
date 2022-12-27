import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/FontAwesome';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/layout';
import { wrapper } from 'store/index';
// import { persistor } from 'store/index';
// import {PersistGate} from 'redux-persist/integration/react';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <PersistGate persistor={persistor} loading={<div>loading</div>}> */}
        <Layout>
          <Component {...pageProps} />
          <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        </Layout>
        {/* </PersistGate> */}
      </QueryClientProvider>
    </>
  );
}

export default wrapper.withRedux(App);
