import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      width={width}
      height={height}
      style={{ width: '100%', height: 'auto' }}
      sizes="100vw"
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/posts/${slug}`} aria-label={title}>{image}</Link>
      ) : (
        image
      )}
    </div>
  )
}
