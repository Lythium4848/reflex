import '../styles/globals.css'
import Script from 'next/script'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {NextSeo} from 'next-seo';
import React from 'react'
import Head from "next/head";
import {ThemeProvider} from 'next-themes'
import getConfig from "next/config";
import { SessionProvider } from "next-auth/react"

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
          <SessionProvider session={session}>
              <ThemeProvider attribute="class">
                  <Navbar user={user}/>
                  <Component {...pageProps} />
                  <div className="bottom-0 w-full">
                      <Footer/>
                  </div>
              </ThemeProvider>
          </SessionProvider>
      </>
  )
}
export default MyApp
