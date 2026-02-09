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
        title="Join Our Team"
        desc="We believe people are the foundation of long-term success. Explore career opportunities with MEET."
        image="/about/hero.jpg"
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
