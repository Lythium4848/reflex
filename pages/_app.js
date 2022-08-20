import '../styles/globals.css'
import Script from 'next/script'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {NextSeo} from 'next-seo';
import React from 'react'
import Head from "next/head";
import {ThemeProvider} from 'next-themes'
import getConfig from "next/config";
import router from "../lib/router";

const { publicRuntimeConfig } = getConfig()

function MyApp({ Component, pageProps: { session, user, ...pageProps }}) {
  return (
      <>
          <Script src="https://kit.fontawesome.com/74de4910c5.js" />
          <Head>
            <link rel="icon" href={publicRuntimeConfig.logo}/>
            <NextSeo
                title={publicRuntimeConfig.name}
                description={publicRuntimeConfig.description}
            />
            <title>{publicRuntimeConfig.name}</title>
          </Head>
          <ThemeProvider attribute="class">
              <Navbar user={user}/>
              <Component {...pageProps} />
              <Footer/>
          </ThemeProvider>
      </>
  )
}
export default MyApp

export async function getInitialProps({req, res}) {
    await router.run(req, res);
    return { props: { user: req.user || null } };
}
