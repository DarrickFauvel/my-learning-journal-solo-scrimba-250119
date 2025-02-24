import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"
import { posts } from "@/data/posts"

export default function Home() {
  return (
    <div className="grid font-[family-name:var(--font-source-sans-3)]">
      <Header />

      <main>
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
