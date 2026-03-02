import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <h1 className="mb-4 glow-text text-phosphor">{title}</h1>
      <div className="flex items-center gap-4 mb-8 text-ghost font-mono">
        <Avatar name={author.name} picture={author.picture} />
        <span className="text-sm">
          <DateFormatter dateString={date} />
        </span>
      </div>
      <div className="mb-12 overflow-hidden border-2 border-ghost">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  )
}
