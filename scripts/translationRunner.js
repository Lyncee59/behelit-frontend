const manageTranslations = require('react-intl-translations-manager').default
const bcManageTranslations = require('react-intl-translations-manager-bc').default

// react-intl-translations-manager sets the defaultMessage as the value
// for translations that are not yet set. one hour needs only the en.json
// and the translation file with the same keys but the values empty or null

manageTranslations({
  messagesDirectory: 'lang/.messages',
  translationsDirectory: 'lang/locales',
  whitelistsDirectory: 'lang/whitelists',
  singleMessagesFile: true,
  detectDuplicateIds: true,
  sortKeys: true,
  jsonOptions: {
    space: 4,
    trailingNewline: true,
  },
  languages: ['en'],
  overridePrinters: {
    printDuplicateIds: (duplicateIds) => {
      console.log(`You have ${duplicateIds.length} duplicate IDs`)
      duplicateIds.map((id) => {
        console.log(id + '\n')
      })
    },
    printLanguageReport: (report) => {
      // console.log('Log report for a language')
    },
    printNoLanguageFile: (lang) => {
      console.log(
        `No existing ${lang} translation file found. A new one is created.`,
      )
    },
    printNoLanguageWhitelistFile: (lang) => {
      console.log(`No existing ${lang} file found. A new one is created.`)
    },
  }
})

bcManageTranslations({
  messagesDirectory: 'lang/.messages',
  translationsDirectory: 'lang/locales',
  whitelistsDirectory: 'lang/whitelists',
  singleMessagesFile: true,
  detectDuplicateIds: true,
  sortKeys: true,
  jsonOptions: {
    space: 4,
    trailingNewline: true,
  },
  languages: ['ru', 'es', 'pt', 'vi', 'zh', 'de', 'fr', 'nl', 'it', 'ja', 'th', 'id', 'uk', 'tr', 'ko', 'ms', 'sv', 'ro', 'pl', 'cs'],
  overridePrinters: {
    printDuplicateIds: (duplicateIds) => {
      console.log(`You have ${duplicateIds.length} duplicate IDs`)
      duplicateIds.map((id) => {
        console.log(id + '\n')
      })
    },
    printLanguageReport: (report) => {
      // console.log('Log report for a language')
    },
    printNoLanguageFile: (lang) => {
      console.log(
        `No existing ${lang} translation file found. A new one is created.`,
      )
    },
    printNoLanguageWhitelistFile: (lang) => {
      console.log(`No existing ${lang} file found. A new one is created.`)
    },
  }
})