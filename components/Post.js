import Link from "next/link"

export default function Post({post}) {
    return (
        <div>
            <img className='rounded' src={post.frontmatter.cover_image} alt='' />
            <div className='text-sm text-gray-500'>Posted on {post.frontmatter.date}</div>
            <h3 className='text-xl'>{post.frontmatter.title}</h3>
            <p className='text-sm'>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a>Read More</a>
            </Link>
        </div>
    )
}