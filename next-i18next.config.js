const path = require("path")

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  localePath: path.resolve("./src/locales"),
  react: {
    useSuspense: false,
  },
  defaultNS: 'common',
  localeSubpaths: {
    en: 'en',
    es: 'es'
  }
};