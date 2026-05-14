import {
  getDefaultOgImage,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from '../config/site'

export default function JsonLd() {
  const url = getSiteUrl()
  const ogImage = getDefaultOgImage()

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${url}/#organization`,
      name: SITE_NAME,
      url,
      logo: {
        '@type': 'ImageObject',
        url: `${url}/logo-fav.png`,
      },
      description: SITE_DESCRIPTION,
    },
    {
      '@type': 'WebSite',
      '@id': `${url}/#website`,
      name: SITE_NAME,
      url,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${url}/#organization` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}/#webpage`,
      url: `${url}/`,
      name: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      isPartOf: { '@id': `${url}/#website` },
      about: { '@id': `${url}/#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: ogImage,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ItemList',
      '@id': `${url}/#highlight-content`,
      name: 'Featured insights from vico.net',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'The Future of Remote Work',
          url: `${url}/#webinars`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AI & the Future of Talent Acquisition',
          url: `${url}/#webinars`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Skills-First Hiring Revolution',
          url: `${url}/#webinars`,
        },
      ],
    },
  ]

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
  )
}
