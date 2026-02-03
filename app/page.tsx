import Hero from "./sections/home/hero";
import Products from "./sections/home/products";
import WhyChoose from "./sections/home/why-choose";
import Contact from "./sections/home/contact";
import CTA from "./sections/cta";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <WhyChoose />
      <Contact />
      <CTA />
    </main>
  );
}
