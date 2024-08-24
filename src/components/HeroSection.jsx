// src/components/HeroSection.jsx
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-[#FFF8F2] pt-20 lg:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center text-sm font-medium text-gray-500 mb-4">
              <span className="bg-[#541400] text-white py-1 px-3 rounded-full text-xs font-medium mr-3">
                #1
              </span>
              Business Growth Platform
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Elevate Your{" "}
              <span className="text-[#541400]">Business Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Unlock your companys full potential with our innovative solutions
              and strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <input
                type="email"
                placeholder="Enter email to get started"
                className="flex-grow px-6 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#541400] focus:border-transparent"
              />
              <button className="px-8 py-3 bg-[#541400] text-white rounded-full hover:bg-[#FF8A6B] transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/hero.svg"
                alt="Business Growth Illustration"
                className="w-full h-auto max-w-md lg:max-w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
