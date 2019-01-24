import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { 
  injectGlobalStyle,
  injectFonts,
  injectGoogleAnalytics,
  injectLanguageLinks,
  injectLocaleData,
  injectNonce,
  injectStyleTags,
  injectMetadata,
  injectFacebookOpenGraph,
  injectTwitterCard
} from 'services/dom'
import { PrismStyle } from 'components/Prism'

class BehelitDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context)
    const {
      renderPage,
      req: { locale, localeDataScript },
      res: { locals: { nonce } }
    } = context

    // Gather style
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      ...props,
      locale,
      localeDataScript,
      nonce,
      styleTags,
    }
  }

  render() {
    const { page } = this.props.__NEXT_DATA__
    const { locale, localeDataScript, nonce, styleTags } = this.props

    return (
      <html>
        <Head>
          {injectNonce(nonce)}
          <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport" />
          <link nonce={nonce} rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          {injectMetadata()}
          {/* {injectFacebookOpenGraph()} */}
          {/* {injectTwitterCard()} */}
          {injectGlobalStyle(nonce)}
          {injectFonts(nonce)}
          {injectLanguageLinks(page, locale, nonce)}
          {injectLocaleData(localeDataScript, nonce)}
          {/* {typeof window !== undefined && injectGoogleAnalytics(nonce)} */}
          {injectStyleTags(styleTags, nonce)}
        </Head>
        <body>
          <PrismStyle />
          <Main />
          <NextScript nonce={nonce} />
          <div id="modal-root"></div>
        </body>
      </html >
    )
  }
}

export default BehelitDocument
