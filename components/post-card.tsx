import formatDate from "@/helpers/formatDate"
import { Card, CardContent } from "./ui/card"
import { PostCardProps } from "@/types/post"
import Link from "next/link"

export default function PostCard({
  id,
  date,
  heading,
  text,
  image,
  imageAlt,
  isHero = false,
}: PostCardProps) {
const formattedDate = formatDate(date)

  if (isHero) {
    return (
      <Link href={`/blog/${id}`}>
        <Card className="w-full overflow-hidden rounded-none border-0 shadow-none">
          <CardContent className="p-0 relative h-[293px]">
            <img
              src={image || "/images/placeholder.svg"}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 flex flex-col justify-end p-6 text-white">
              <time className="text-xs sm:text-sm md:text-base uppercase text-white/80">{formattedDate}</time>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-3">
                {heading}
              </h2>
              <p className="text-base sm:text-base text-white/90 max-w-prose">
                {text}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Card className="w-full overflow-hidden border-0 shadow-none pb-6">
      <CardContent className="p-0">
        <div className="aspect-[16/9] px-6 pt-6 pb-3">
          <img
            src={image || "/images/placeholder.svg"}
            alt={imageAlt}
            className="w-full object-cover"
          />
        </div>
        <div className="px-6">
          <time className="text-sm uppercase">{formattedDate}</time>
          <h2 className="text-2xl font-bold mt-2 mb-3">{heading}</h2>
          <p className="text-base text-muted-foreground">{text}</p>
        </div>
      </CardContent>
    </Card>
  )
}
