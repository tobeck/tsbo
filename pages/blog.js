import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'

export default function Blog({posts}) {
  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
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