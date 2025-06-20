import PostCard from "@/components/post-card"
import { posts } from "@/data/posts"

export default function Home() {
const renderPosts = posts.map((post) => (
  <PostCard {...post} key={post.id} />
))

  return (
    <div className="grid font-[family-name:var(--font-source-sans-3)]">

      <main>
        {renderPosts}
      </main>

    </div>
  )
}
