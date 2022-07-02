import '../styles.css'
import Head from 'next/head'
import Logo from '../components/logo'
import React from 'react'
import { SocketWrapper } from "../context/socket-context"

export default function({ Component, pageProps }) {
  return <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>🥵😬</title>
      </Head>
      <Logo/>
      <SocketWrapper>
        <Component {...pageProps} />
      </SocketWrapper>
    </>
}
