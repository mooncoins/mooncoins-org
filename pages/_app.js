import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@styles/createEmotionCache";

import "@styles/globals.css";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { attributes as metadata } from "@content/metadata.md";
import { themeFactory } from "@styles/themeUtils";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const theme = themeFactory(
  metadata?.theme?.mode,
  metadata?.theme?.palette?.primary,
  metadata?.theme?.palette?.secondary
);

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const { title } = metadata || {};

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />

        <link rel="shortcut icon" href={`/img/${metadata.favicon}`} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
