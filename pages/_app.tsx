import { useEffect } from 'react';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/FontAwesome";
import { wrapper } from "store/index";
import Layout from "components/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Script from 'next/script'

declare global {
    interface Window {
        Kakao: any;
    }
}


function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();

   
    return (
        
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                    <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"
                    ></Script>
                </Layout>
            </QueryClientProvider>
        
    );
}

export default wrapper.withRedux(App);
