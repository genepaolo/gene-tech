const siteMetadata = require("./src/utils/siteMetaData")

module.exports = {
    siteUrl: siteMetadata.siteUrl,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ]
    },
  }