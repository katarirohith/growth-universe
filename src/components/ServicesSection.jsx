// src/components/ServicesSection.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChartLine,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaCog,
} from "react-icons/fa";

const services = [
  {
    icon: FaBriefcase,
    title: "Business Consultation",
    description: "Expert advice to navigate business complexities",
    videoId: "tWte3qH_DoE",
  },
  {
    icon: FaChartLine,
    title: "Market Analysis",
    description: "In-depth research for competitive edge",
  },
  {
    icon: FaRocket,
    title: "Growth Strategies",
    description: "Tailored plans for sustainable growth",
  },
  {
    icon: FaUsers,
    title: "Customer Engagement",
    description: "Innovative tools to retain customers",
  },
  {
    icon: FaLightbulb,
    title: "Innovation Lab",
    description: "Cutting-edge solutions for future challenges",
  },
  {
    icon: FaCog,
    title: "Process Optimization",
    description: "Streamline operations for peak efficiency",
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg 
        transition-all duration-300 flex flex-col justify-between 
        group overflow-hidden relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#541400]/10 to-[#541400]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 h-full">
        {isHovered && service.videoId ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${service.videoId}`}
              title={service.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col">
            <service.icon className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#541400] group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#541400] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 flex-grow">
              {service.description}
            </p>
            <div className="mt-3 sm:mt-4">
              <a href="#" className="text-[#541400] hover:underline text-sm">
                Learn more →
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    videoId: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we can help elevate your business growth with our
            comprehensive suite of services.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
