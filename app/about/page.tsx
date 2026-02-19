"use client";
import Hero from "../sections/about.tsx/hero";
import ImageGrid from "../sections/about.tsx/image-grid";
import OurPurpose from "../sections/about.tsx/our-purpose";
import Vision from "../sections/about.tsx/vision";
import Quality from "../sections/about.tsx/quality";
import Sustainability from "../sections/about.tsx/sustainability";
const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with leaf image */}
      <Hero
        mode="dark"
        title="About Us"
        desc="Middle East Engineering Technologies is a global B2B trading company.
We work with trusted international partners to supply practical products that support business growth while encouraging responsible use of resources."
        image="/about/banner.jpg"
      />
      {/* Four Image Grid Section */}
      <ImageGrid />
      {/* Our Purpose Section */}
      <OurPurpose />
      {/* Our Values Section */}
      {/* Our Vision Section */}
      <Vision />
      {/* Quality Sources Section */}
      <Quality />
      {/* Sustainability Section */}
      <Sustainability />
    </div>
  );
};

export default AboutPage;
