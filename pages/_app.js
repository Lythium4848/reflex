import '../styles/globals.css'
import Script from 'next/script'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {NextSeo} from 'next-seo';
import React from 'react'
import Head from "next/head";
import {ThemeProvider} from 'next-themes'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
              <Navbar/>
              <Component {...pageProps} />
              <Footer/>
          </ThemeProvider>
      </>
  )
}

export default MyApp
