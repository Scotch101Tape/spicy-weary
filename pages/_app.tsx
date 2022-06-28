import '../styles.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function({ Component, pageProps }) {
  return <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
}