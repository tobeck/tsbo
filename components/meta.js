import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="theme-color" content="#0D1117" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Tobias Becker — Site Reliability Engineer based in Stockholm. Portfolio, CV, and blog about infrastructure, cloud, and DevOps."
      />
    </Head>
  )
}
