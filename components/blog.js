import MoreStories from './more-stories'
import Layout from './layout'
import { getAllPosts } from '../lib/api'
import Container from './container'

export default function Blog({ allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
