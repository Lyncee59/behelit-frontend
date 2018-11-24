import React from 'react'
import { normalize } from 'polished'
import getConfig from 'next/config'
import { assocPath, concat, keys, map } from 'ramda'
import { localizeUrl } from 'services/url'

const { publicRuntimeConfig: { CONFIG_SET, PATHS_BASE, SERVER_PREFIX, supportedLanguages } } = getConfig()

export const injectGlobalStyle = (nonce) => (
    <style nonce={nonce}>
        {`
            ${normalize()}
        
            html {
                height: 100%;
                min-height: 100%;
                max-width: 100%;
                margin: 0;
                padding: 0;
            }

            body {
                height: 100%;
                min-height: 100%;
                max-width: 100%;
                margin: 0;
                padding: 0;
                font-size: 100%;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
            }

            #__next {
                height: 100%;
            }

            hi, h2, h3, h4, h5 {
                margin: 0px 0px 0.5em;
            }
        `}
    </style>
)

export const injectMetadata = () => (
    <React.Fragment>
        <meta name="keywords" content="behelit" />
        <meta name="description" content="" />
    </React.Fragment>
)

export const injectFacebookOpenGraph = () => (
    <React.Fragment>
        <meta property="og:url" content={`${PATHS_BASE}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Behelit" />
        <meta property="og:description" content="r" />
        <meta property="og:image" content={`${PATHS_BASE}${SERVER_PREFIX}`} />
        <meta property="og:image:alt" content="Behelit homepage" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </React.Fragment>
)

export const injectTwitterCard = () => (
    <React.Fragment>
        <meta name="twitter:card" content="Behelit" />
        <meta name="twitter:image" content={`${PATHS_BASE}${SERVER_PREFIX}`} />
        <meta name="twitter:image:alt" content="Behelit homepage" />
        <meta name="twitter:description" content="" />
    </React.Fragment>
)

export const injectFonts = (nonce) => (
    <link nonce={nonce}
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
    />
)

export const injectLanguageLinks = (page, locale, nonce) => {
    const alternateLinks = keys(supportedLanguages).map(language => (
        <link nonce={nonce} key={language} rel="alternate" hrefLang={language} href={localizeUrl(`${PATHS_BASE}${page}`, language)} />
    ))
    const otherLinks = [
        <link nonce={nonce} key={"alternate"} rel="alternate" hrefLang="x-default" href={`${PATHS_BASE}${page}`} />,
        <link nonce={nonce} key="canonical" rel="canonical" href={localizeUrl(`${PATHS_BASE}${page}`, locale)} />
    ]
    return concat(alternateLinks, otherLinks)
}

export const injectGoogleAnalytics = (nonce) => (
    <script nonce={nonce}
        dangerouslySetInnerHTML={{
            __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', '${SETTINGS_GOOGLE_ANALYTICS_ID}', 'auto');
                var page = document.location.pathname;
                // Strip language path
                page = page.replace(/^(\\/[a-z]{2}|\\/zh-cn)?\\/(.*)$/, "/$2")
                // Strip hashes, addresses, etc
                page = page.replace(/^\\/([a-z]{3})\\/block\\/.*$/, "/$1/block");
                page = page.replace(/^\\/([a-z]{3})\\/tx\\/.*$/, "/$1/tx");
                page = page.replace(/^\\/([a-z]{3})\\/address\\/.*$/, "/$1/address");
                ga('send', 'pageview', page, { anonymizeIp: true });
            `
        }}
    />
)

export const injectLocaleData = (localeDataScript, nonce) => (
    <script nonce={nonce}
        dangerouslySetInnerHTML={{
            __html: localeDataScript
        }}
    />
)

export const injectStyleTags = (styleTags, nonce) => CONFIG_SET === 'local'
    ? styleTags
    : map(assocPath(['props', 'nonce'], nonce), styleTags)

export const injectNonce = (nonce) => (
    <script nonce={nonce} dangerouslySetInnerHTML={{ __html: `window.NONCE_ID = "${nonce}";` }} />
)