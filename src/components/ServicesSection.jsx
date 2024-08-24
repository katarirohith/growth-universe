// src/components/ServicesSection.jsx
import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine, FaRocket, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: FaBriefcase,
    title: "Business Consultation",
    description:
      "Expert advice to help you navigate the complexities of business.",
  },
  {
    icon: FaChartLine,
    title: "Market Analysis",
    description: "In-depth market research to give you a competitive edge.",
  },
  {
    icon: FaRocket,
    title: "Growth Strategy Planning",
    description: "Strategic planning to ensure sustainable growth.",
  },
  {
    icon: FaUsers,
    title: "Customer Engagement Solutions",
    description: "Tools and strategies to engage and retain your customers.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
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
            >
              <service.icon className="text-5xl mb-6 text-accent" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
