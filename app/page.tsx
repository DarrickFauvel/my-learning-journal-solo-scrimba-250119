import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="grid font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
