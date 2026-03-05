import Hero from "./sections/home/hero";
import Products from "./sections/home/products";
import WhyChoose from "./sections/home/why-choose";
import Contact from "./sections/home/contact";
import CTA from "./sections/cta";
import Blogs from "@/components/Blogs";
import InfiniteMarquee from "./sections/home/marquee";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <WhyChoose />
      <InfiniteMarquee />
      <div className="container mt-10 mb-20">
        <h2 className="text-4xl text-center lg:text-4xl mb-3 xl:text-5xl">
          <span className="text-primary">Latest</span> News & Articles
        </h2>
        <Blogs />
      </div>
      <Contact />
      <CTA />
    </main>
  );
}
