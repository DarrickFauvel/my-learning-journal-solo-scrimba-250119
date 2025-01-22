export interface Post {
  date: string
  heading: string
  text: string
  image: string
  imageAlt: string
}

export interface PostCardProps extends Post {
  isHero?: boolean
}
