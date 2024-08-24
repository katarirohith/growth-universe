// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      {/* Add other sections here */}
    </div>
  );
};

export default Home;
