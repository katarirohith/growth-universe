// src/components/ContentCreationSection.jsx
import { motion } from "framer-motion";
import {
  FaBlog,
  FaYoutube,
  FaPodcast,
  FaMobileAlt,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const contentTypes = [
  {
    icon: FaBlog,
    title: "Blog and Articles",
    description:
      "High-quality articles on personal development, leadership, and educational trends.",
  },
  {
    icon: FaYoutube,
    title: "YouTube Channel",
    description: "Engaging video content on various personal growth topics.",
  },
  {
    icon: FaPodcast,
    title: "Podcast",
    description:
      "Interviews with experts, success stories, and practical tips.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App",
    description:
      "Daily challenges, progress tracking, and micro-learning content.",
  },
  {
    icon: FaBook,
    title: "E-books and Whitepapers",
    description: "Comprehensive guides on various personal development topics.",
  },
  {
    icon: FaUsers,
    title: "Online Community Platform",
    description:
      "A dedicated space for members to connect and access exclusive content.",
  },
];

const ContentCreationSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background" id="content-creation">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mt-12 sm:text-5xl gradient-text">
          Content Creation
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-text/70">
          Explore our diverse range of content offerings designed to support
          your personal and professional growth.
        </p>
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contentTypes.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <content.icon className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {content.title}
              </h3>
              <p className="text-gray-500">{content.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCreationSection;
