import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
      <div className="mb-6 md:mb-0 rounded-lg overflow-hidden">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
          <Link href={`/blog/posts/${slug}`} className="hover:text-coral transition-colors">{title}</Link>
        </h3>
        <p className="text-sm text-gray-mid mb-3">
          <DateFormatter dateString={date} />
        </p>
        <p className="text-gray-mid leading-relaxed mb-4">{excerpt}</p>
        <Link href={`/blog/posts/${slug}`} className="text-coral font-semibold text-sm hover:underline">
            Read more &rarr;
        </Link>
      </div>
    </div>
  )
}
