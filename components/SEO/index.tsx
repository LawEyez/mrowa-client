import Head from "next/head"

import { metadata } from "@utils/config"


export type SEOProps = {
  title?: string,
  desc?: string
}

const SEO = ({
  title,
  desc
}: SEOProps) => {
  // Get page title.
  const pageTitle = title ? (
    `${title} :: ${metadata.siteName}`
  ) : metadata.siteName

  // Get page description.
  const pageDesc = desc ? desc : metadata.description

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="app" />
      <meta property="twitter:site" content={metadata.author.twitter} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDesc} />
    </Head>
  )
}

export default SEO