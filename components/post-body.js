export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-lg prose-headings:text-bistre prose-a:text-coral"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
