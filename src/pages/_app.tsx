import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

import { pageView } from '@/utils/gtag';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name='title' content='양이진 Leejin Yang' />
        <meta name='description' content='프론트엔드 개발자 양이진' />
        <meta property='og:title' content='양이진 Leejin Yang' />
        <meta property='og:description' content='프론트엔드 개발자 양이진' />
        <meta property='og:url' content='https://leejinyang.com' />
        <meta property='og:site_name' content='양이진 Leejin Yang' />
        <meta property='og:type' content='website' />
        <title>양이진 Leejin Yang</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
