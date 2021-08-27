import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>TSBO</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

// Fetch data at build time.
// Runs on server side.
export async function getStaticProps() {
  // Look in the root for a folder called posts and import files.
  const files = fs.readdirSync(path.join('posts'))

  // Create an array that includes slugs for the files and front-matter
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename), 
      'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)
    
    return {
      slug,
      frontmatter,
    }
  })

  // Return an object.
  return {
    // Pass in a props object, pass back posts.
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}