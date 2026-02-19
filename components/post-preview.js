import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="rounded-t-lg overflow-hidden">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 leading-snug">
          <Link href={`/blog/posts/${slug}`} className="hover:text-coral transition-colors">{title}</Link>
        </h3>
        <p className="text-sm text-gray-mid mb-3">
          <DateFormatter dateString={date} />
        </p>
        <p className="text-gray-mid leading-relaxed">{excerpt}</p>
      </div>
    </div>
  )
}
