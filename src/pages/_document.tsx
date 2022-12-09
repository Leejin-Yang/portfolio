import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='keywords' content='양이진, Leejin Yang, 프론트엔드, 개발자, 포트폴리오' />
          <meta property='og:image' content='/og-image.png' />
          <link rel='apple-touch-icon' href='/icon/apple-icon.png' />
          <link rel='apple-touch-icon' sizes='57x57' href='/icon/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/icon/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/icon/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/icon/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/icon/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/icon/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/icon/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icon/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icon/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/icon/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/icon/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icon/favicon-16x16.png' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/icon/ms-icon-144x144.png' />
          <link rel='manifest' href='/manifest.json' />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            strategy='afterInteractive'
            src='https://www.googletagmanager.com/gtag/js?id=G-D000ZTXPS5'
          />
          <Script
            id='gtag-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: String.raw`
                window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new
                Date()); gtag('config', 'G-D000ZTXPS5', { page_path: window.location.pathname });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
