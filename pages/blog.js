import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Container from '../components/container'
import Head from 'next/head'
import Link from 'next/link'

export default function Blog({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog — Tobias Becker</title>
        </Head>
        <Container>
          <div className="py-16">
            <Link
              href="/"
              className="inline-block text-phosphor font-mono text-sm mb-8 hover:underline"
            >
              &larr; Home
            </Link>
            <h1 className="mb-12 glow-text text-phosphor">Blog</h1>
            {allPosts.length > 0 ? (
              <MoreStories posts={allPosts} />
            ) : (
              <p className="text-ghost">No posts yet. Check back soon.</p>
            )}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
