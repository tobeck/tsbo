export default function Container({ children }) {
  return (
    <div className="container lg:max-w-4xl sm:max-w-lg px-5">
      {children}
    </div>
  )
}
