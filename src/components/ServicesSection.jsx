import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine, FaRocket, FaUsers } from "react-icons/fa";

const services = [
  {
    id: "business-consultation",
    icon: FaBriefcase,
    title: "Business Consultation",
    description:
      "Expert advice to help you navigate the complexities of business.",
    details: "More detailed information about Business Consultation...",
  },
  {
    id: "market-analysis",
    icon: FaChartLine,
    title: "Market Analysis",
    description: "In-depth market research to give you a competitive edge.",
    details: "More detailed information about Market Analysis...",
  },
  {
    id: "growth-strategy-planning",
    icon: FaRocket,
    title: "Growth Strategy Planning",
    description: "Strategic planning to ensure sustainable growth.",
    details: "More detailed information about Growth Strategy Planning...",
  },
  {
    id: "customer-engagement-solutions",
    icon: FaUsers,
    title: "Customer Engagement Solutions",
    description: "Tools and strategies to engage and retain your customers.",
    details: "More detailed information about Customer Engagement Solutions...",
  },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(service)} // Open the modal on click
            >
              <service.icon className="text-5xl mb-6 text-accent" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-lg mb-6">{selectedService.details}</p>
            <button
              onClick={closeModal}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
