// src/components/LMSSection.jsx
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBook,
  FaUserFriends,
  FaCertificate,
} from "react-icons/fa";

const features = [
  {
    icon: FaBook,
    title: "Course Content",
    description: "Access a wide range of courses and learning materials.",
  },
  {
    icon: FaUserFriends,
    title: "Interactive Learning",
    description:
      "Engage with instructors and peers through forums and live sessions.",
  },
  {
    icon: FaGraduationCap,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed progress reports.",
  },
  {
    icon: FaCertificate,
    title: "Certifications",
    description: "Earn certificates upon successful completion of courses.",
  },
];

const LMSSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background" id="lms">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 gradient-text text-center">
          Learning Management System
        </h2>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Enhance your learning experience with our integrated Learning
            Management System.
          </p>
          <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90 transition-colors">
            Coming Soon
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-8"
            >
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="text-3xl sm:text-4xl text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LMSSection;
