import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PullQuote from "@/components/PullQuote";
import Structure from "@/components/Structure";
import ForWhom from "@/components/ForWhom";
import Author from "@/components/Author";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PullQuote />
        <Structure />
        <ForWhom />
        <Author />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
