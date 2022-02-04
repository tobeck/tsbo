import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/blog">
        <a>Go Back</a>
      </Link>
      <div>
        <h1 className="text-4xl">{title}</h1>
        <div className="text-sm text-gray-500">Posted on {date}</div>
        <img src={cover_image} alt=""></img>
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  )
}

// Generate a list of paths to files in the posts directory.
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('_posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  // Return an object with paths.
  return {
    paths,
    // Fallback returns 404 not found.
    fallback: false,
  }
}

// Retrieve the content of the files found in getStaticPaths.
export async function getStaticProps({ params: { slug } }) {
  // Fetch file data based on slug.
  const markdownWithMeta = fs.readFileSync(
    path.join('_posts', slug + '.md'),
    'utf-8'
  )

  // Get data from frontmatter
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
