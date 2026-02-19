import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Experiences from '../components/Experiences'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  return (
    <>
      <Layout>
        <Head>
          <title>Tobias Becker — SRE</title>
        </Head>
        <section className="bg-sand">
          <Container>
            <Intro />
          </Container>
        </section>
        <Container>
          {heroPost && (
            <section className="py-16">
              <h2 className="text-3xl font-bold mb-8">Latest from the blog</h2>
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            </section>
          )}
          <Experiences />
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
