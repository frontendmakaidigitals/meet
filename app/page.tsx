import Hero from "./sections/home/hero";
import Products from "./sections/home/products";
import WhyChoose from "./sections/home/why-choose";
import Contact from "./sections/home/contact";
import CTA from "./sections/cta";
import InfiniteMarquee from "./sections/home/marquee";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <WhyChoose />
      <InfiniteMarquee />
      <Contact />
      <CTA />
    </main>
  );
}
