// src/components/ServicesSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaLaptop,
  FaMicrophone,
  FaClock,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "online-courses",
    icon: FaLaptop,
    title: "Online Courses",
    description:
      "Empower yourself with knowledge through our diverse range of online courses.",
    route: "/courses",
  },
  {
    id: "workshops-events",
    icon: FaMicrophone,
    title: "Workshops and Events",
    description:
      "Engage with experts and like-minded individuals through our workshops and events.",
    route: "/workshops-events",
  },
  {
    id: "digital-content",
    icon: FaChalkboardTeacher,
    title: "Digital Content",
    description:
      "Access a wealth of digital content for personal and professional growth.",
    route: "/content-creation",
  },
  {
    id: "coaching-programs",
    icon: FaUsers,
    title: "Coaching Programs",
    description:
      "Personalized guidance and support to help you achieve your goals.",
    comingSoon: true,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleServiceClick = (service) => {
    if (service.comingSoon) {
      setIsModalOpen(true);
    } else if (service.route) {
      navigate(service.route);
    }
  };

  const handleNotifyMe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log(`Notification request for: ${email}`);
    alert("Thank you! We'll notify you when Coaching Programs are available.");
    setEmail("");
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 sm:py-20 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 gradient-text text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => handleServiceClick(service)}
            >
              <div className="p-6 sm:p-8">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="text-3xl sm:text-4xl text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
              {service.comingSoon && (
                <div className="bg-primary text-white py-2 px-4 text-center">
                  <FaClock className="inline-block mr-2" />
                  <span className="font-semibold">Coming Soon</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Notify Me Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Notify Me
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <p className="text-base sm:text-lg mb-6 text-gray-600">
                Enter your email to be notified when Coaching Programs become
                available.
              </p>
              <form onSubmit={handleNotifyMe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Notify Me
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
