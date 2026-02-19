import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <h1 className="mb-4">{title}</h1>
      <div className="flex items-center gap-4 mb-8 text-gray-mid">
        <Avatar name={author.name} picture={author.picture} />
        <span className="text-sm">
          <DateFormatter dateString={date} />
        </span>
      </div>
      <div className="mb-12 rounded-lg overflow-hidden">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  )
}
