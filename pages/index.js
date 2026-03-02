import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Experiences from '../components/Experiences'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'

export default function Index({ allPosts }) {
  const recentPosts = allPosts.slice(0, 3)
  return (
    <>
      <Layout showDotNav>
        <Head>
          <title>Tobias Becker — SRE</title>
        </Head>
        <Container>
          <Intro />
        </Container>
        <Container>
          <Experiences />
        </Container>
        <Container>
          <section id="blog" className="py-16 md:py-24">
            <h1 className="mb-8 glow-text text-phosphor">Blog</h1>
            {recentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {recentPosts.map((post) => (
                    <HeroPost
                      key={post.slug}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      author={post.author}
                      slug={post.slug}
                      excerpt={post.excerpt}
                    />
                  ))}
                </div>
                <Link
                  href="/blog"
                  className="inline-block border-2 border-phosphor text-phosphor font-mono font-semibold px-6 py-3 text-sm hover:bg-phosphor hover:text-midnight hover:shadow-glow-green transition-all"
                >
                  See all posts &rarr;
                </Link>
              </>
            ) : (
              <p className="text-ghost">No posts yet. Check back soon.</p>
            )}
          </section>
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
