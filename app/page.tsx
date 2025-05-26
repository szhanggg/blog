import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Stephen's Daily Blog
      </h1>
      <p className="mb-4">
        {`I'm a Computer Science student at Carnegie Mellon University, interested in
          trying new things and getting the most out of my life!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
