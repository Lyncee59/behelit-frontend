import React from 'react'
import { assocPath, concat, keys, map } from 'ramda'
import { config } from 'services/config'
import { localizeUrl } from 'services/url'

export const injectGlobalStyle = (nonce) => (
  <style nonce={nonce}>
    {`
      html {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
      }

      body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 100%;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
      }

      #__next {
          height: 100%;
          width: 100%;
      }
    `}
  </style>
)

export const injectMetadata = () => (
  <React.Fragment>
    <meta content="behelit" name="keywords" />
    <meta content="I am a full stack developer with over 10 years of experience working in .NET, HTML5, CSS3, Javascript (React & Node.js).
        I love programming, playing videogames and learning new things !" name="description"
    />
  </React.Fragment>
)

export const injectFacebookOpenGraph = () => (
  <React.Fragment>
    <meta content={`${config.PATHS_BASE}`} property="og:url" />
    <meta content="website" property="og:type" />
    <meta content="Behelit Software Limited" property="og:title" />
    <meta content="r" property="og:description" />
    <meta content={`${config.PATHS_BASE}${config.SERVER_PREFIX}/static/img/logo.png`} property="og:image" />
    <meta content="Behelit Software Limited" property="og:image:alt" />
    <meta content="image/png" property="og:image:type" />
    <meta content="1200" property="og:image:width" />
    <meta content="630" property="og:image:height" />
  </React.Fragment>
)

export const injectTwitterCard = () => (
  <React.Fragment>
    <meta content="Behelit Software Limited" name="twitter:card" />
    <meta content={`${config.PATHS_BASE}${config.SERVER_PREFIX}/static/img/logo.png`} name="twitter:image" />
    <meta content="Behelit Software Limited" name="twitter:image:alt" />
    <meta content="" name="twitter:description" />
  </React.Fragment>
)

export const injectFonts = (nonce) => (
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700"
    nonce={nonce}
    rel="stylesheet"
  />
)

export const injectLanguageLinks = (page, locale, nonce) => {
  const alternateLinks = keys(config.supportedLanguages).map(language => (
    <link href={localizeUrl(`${config.PATHS_BASE}${page}`, language)} hrefLang={language} key={language} nonce={nonce} rel="alternate" />
  ))
  const otherLinks = [
    <link href={`${config.PATHS_BASE}${page}`} hrefLang="x-default" key="alternate" nonce={nonce} rel="alternate" />,
    <link href={localizeUrl(`${config.PATHS_BASE}${page}`, locale)} key="canonical" nonce={nonce} rel="canonical" />
  ]
  return concat(alternateLinks, otherLinks)
}

export const injectGoogleAnalytics = (nonce) => (
  <script dangerouslySetInnerHTML={{
    __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', '${config.SETTINGS_GOOGLE_ANALYTICS_ID}', 'auto');
            var page = document.location.pathname;
            ga('send', 'pageview', page, { anonymizeIp: true });
        `
  }} nonce={nonce}
  />
)

export const injectLocaleData = (localeDataScript, nonce) => (
  <script dangerouslySetInnerHTML={{
    __html: localeDataScript
  }} nonce={nonce}
  />
)

export const injectStyleTags = (styleTags, nonce) => config.CONFIG_SET === 'local'
  ? styleTags
  : map(assocPath(['props', 'nonce'], nonce), styleTags)

export const injectNonce = (nonce) => (
  <script dangerouslySetInnerHTML={{ __html: `window.NONCE_ID = "${nonce}";` }} nonce={nonce} />
)
