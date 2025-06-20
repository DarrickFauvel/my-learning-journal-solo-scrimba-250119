import PostCard from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { posts } from "@/data/posts"

export default function Home() {
  const renderPosts = posts.map((post) => (
    <PostCard {...post} key={post.id} />
  ))

  return (
    <div className="grid font-[family-name:var(--font-source-sans-3)]">

      <main>
        {renderPosts}

        <Button className="flex justify-self-center my-4 underline font-bold" variant="link">View More</Button>
      </main>

    </div>
  )
}
