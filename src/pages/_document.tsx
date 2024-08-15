import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteMetadata from '@src/config/siteMetadata'

export default class MyDocument extends Document {
  render() {
    const { notchColor } = siteMetadata
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" href="logo.ico" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          {/* <!-- Chrome, Firefox, Opera --> */}
          <meta content={notchColor} name="theme-color" />
          {/* <!-- Windows Phone --> */}
          <meta content={notchColor} name="msapplication-navbutton-color" />
          {/* <!-- iOS Safari --> */}
          <meta content={notchColor} name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
        </Head>
        <body className="bg-primary-500 text-black antialiased">
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
