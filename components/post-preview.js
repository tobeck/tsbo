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
    <div className="bg-terminal border-2 border-ghost hover:border-phosphor hover:shadow-glow-green transition-all duration-200 overflow-hidden">
      <div className="overflow-hidden">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <div className="p-5">
        <h3 className="font-pixel text-xs mb-2 leading-relaxed">
          <Link href={`/blog/posts/${slug}`} className="text-white hover:text-phosphor transition-colors">{title}</Link>
        </h3>
        <p className="text-xs text-ghost mb-3 font-mono">
          <DateFormatter dateString={date} />
        </p>
        <p className="text-ghost text-sm leading-relaxed">{excerpt}</p>
      </div>
    </div>
  )
}
