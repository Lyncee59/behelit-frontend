import App, { Container } from 'next/app'
import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import ThemeProvider from 'providers/ThemeProvider'

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

class ExplorerApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req, res } = ctx
    const { locals: { nonce } } = res
    const { locale, messages } = req || window.__NEXT_DATA__.props.pageProps

    return { pageProps, locale, messages, nonce }
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props
    const now = Date.now()

    return (
      <Container>
        <ThemeProvider>
          <IntlProvider locale={locale} messages={messages} initialNow={now} textComponent={React.Fragment}>
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default ExplorerApp