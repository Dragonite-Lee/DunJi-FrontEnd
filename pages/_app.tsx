import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/FontAwesome';
import Head from 'next/head';
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
        <Head>
          <title>단칸 | 대학생 집 찾아주기</title>
          <meta name="description" content="대학생 집 찾아주기" />
          <meta property="og:title" content="단칸 | 대학생 집 찾아주기" />
          <meta property="og:description" content="대학생 집 찾아주기" />
          <meta property="og:image" content="/og.png" />
          <meta name="twitter:title" content="단칸" />
          <meta name="twitter:description" content="대학생 집 찾아주기" />
          <meta name="twitter:creator" content="nestsoft" />
          <meta name="twitter:site" content="nestsoft" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content="/og.png" />
        </Head>
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
