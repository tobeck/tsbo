import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Container from '../components/container'
import Head from 'next/head'

export default function Blog({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog — Tobias Becker</title>
        </Head>
        <Container>
          <div className="py-16">
            <h1 className="mb-12">Blog</h1>
            {allPosts.length > 0 ? (
              <MoreStories posts={allPosts} />
            ) : (
              <p className="text-gray-mid">No posts yet. Check back soon.</p>
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
