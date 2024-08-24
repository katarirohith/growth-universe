// src/pages/Home.jsx
import PropTypes from "prop-types"; // Import PropTypes
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import BenefitsSection from "../components/BenefitsSection";

const Home = ({ servicesRef }) => {
  return (
    <div>
      <HeroSection />
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <BenefitsSection />
      <TestimonialSection />
    </div>
  );
};

// Add propTypes validation
Home.propTypes = {
  servicesRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element), // Expecting a ref object
  }).isRequired,
};

export default Home;
