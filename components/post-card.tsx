import { Card, CardContent } from "./ui/card"
import { PostCardProps } from "@/types/post"

export default function PostCard({
  id,
  date,
  heading,
  text,
  image,
  imageAlt,
  isHero = false,
}: PostCardProps) {
  if (isHero) {
    return (
      <Card className="w-full overflow-hidden">
        <CardContent className="p-0 relative aspect-[21/9]">
          <img
            src={image || "/images/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 flex flex-col justify-end p-6 text-white">
            <span>{id}</span>
            <time className="text-sm text-white/80">{date}</time>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-prose">
              {text}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[16/9]">
          <img
            src={image || "/images/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-muted-foreground">{date}</time>
          <h2 className="text-xl font-bold mt-2 mb-3">{heading}</h2>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
