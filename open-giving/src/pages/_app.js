import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createContext } from 'react';
import '../../utils/styles/globals.css';
import themeSettings from '../../utils/themeSettings';

export const GlobalContext = createContext({});
const theme = createTheme(themeSettings);

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="shortcut icon" href="/chimoney-logo.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#8A2BE2" />
        <link rel="canonical" href="https://donations.chimoney.io/" />

        <meta name="author" content="Chimoney" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        <meta
          name="apple-mobile-web-app-title"
          content="Open Giving - Donate to Verified Non-Profits"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="keywords"
          content="non-profit, donations, charity, philanthropy, giving, social impact, global payments, Chimoney, cryptocurrency, mobile money"
        />
        <meta name="author" content="Chimoney" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="application-name"
          content="Open Giving - Donate to Verified Non-Profits"
        />
        <meta name="msapplication-TileColor" content="#8A2BE2" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          href="/opensearch.xml"
          title="Search Non-Profit Donations"
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      global: {
        defaultSeo: {
          metaTitle: 'Non-Profit Donations - Support Global Causes',
          // shareImage: `/api/og?text=${metaTitle}`,
          metaDescription:
            'Donate to verified non-profits worldwide using various payment methods including cryptocurrency, mobile money, and more. Make a global impact with ease and security.',
        },
      },
    },
  };
};

export default MyApp;
