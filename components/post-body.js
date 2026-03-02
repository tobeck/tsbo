export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-lg prose-invert font-mono
          prose-headings:text-white prose-headings:font-pixel prose-headings:text-sm
          prose-p:text-smoke prose-p:font-mono
          prose-a:text-phosphor prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-code:text-phosphor prose-code:bg-terminal prose-code:px-1 prose-code:py-0.5 prose-code:border prose-code:border-phosphor/30 prose-code:rounded-none prose-code:font-mono
          prose-pre:bg-terminal prose-pre:border-2 prose-pre:border-ghost prose-pre:rounded-none
          prose-blockquote:border-phosphor prose-blockquote:text-ghost
          prose-li:text-smoke
          prose-img:border-2 prose-img:border-ghost"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
