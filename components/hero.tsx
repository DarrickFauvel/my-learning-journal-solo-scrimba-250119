import Image from 'next/image'
import heroImage from '../public/images/blog-image-hero.png'

export default function Hero() {
    return <Image src={heroImage} alt='' />
}