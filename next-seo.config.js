export default {
  openGraph: {
    type: 'website',
    locale: process.env.APP_LANG,
    url: process.env.APP_URL,
    site_name: process.env.APP_NAME,
    title: process.env.APP_SLOGAN + ' - ' + process.env.APP_NAME,
  },
  defaultTitle: process.env.APP_SLOGAN + ' - ' + process.env.APP_NAME,
  twitter: {
    handle: '@naweby',
    site: '@naweby',
    cardType: 'summary_large_image',
  },
  facebook:{
    appId: '872647112866921',
  },
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'none',
    maxVideoPreview: -1,
  }
};
