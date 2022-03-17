import Post from './post'

export default function Blog() {
  return (
    <>
      <div>
        <title>Blog</title>
        <div className="posts">
          {posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('./_posts'))
  const sortOrder = (a, z) => {
    return new Date(z.frontmatter.published) - new Date(a.frontmatter.published)
  }
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdown = fs.readFileSync(path.join('./_posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdown)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortOrder),
    },
  }
}
