import Image from "next/image";
import heroImage from "../public/images/article-image-hero.png";
import PostSummary from "./card/post-summary";

export default function Hero() {
  return (
    <section className="relative pt-16">
      <Image className="object-cover" src={heroImage} alt="" fill priority />
      <PostSummary
        type="hero"
        content={{
          date: "2022-07-23",
          heading: "My new journey as a bootcamp student.",
          text: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
        }}
      />
    </section>
  );
}
