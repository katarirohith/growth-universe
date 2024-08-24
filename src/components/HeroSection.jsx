/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Growth Mindset Journey",
  "Growth Through Change",
  "Growth Beyond Limits",
];

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Split the current quote into words
    setWords(quotes[currentQuote].split(" "));
    setWordIndex(0); // Reset word index whenever the quote changes
  }, [currentQuote]);

  useEffect(() => {
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setWordIndex((prev) => prev + 1);
      }, 500); // Adjust the speed of each word appearing here
      return () => clearTimeout(timeout);
    } else {
      // Once all words are displayed, change to the next quote
      const timeout = setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 2000); // Delay before the next quote starts
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, words]);

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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

            {/* Animated Quote Section */}
            <div className="h-16 mb-8 flex items-center">
              <AnimatePresence>
                {words.slice(0, wordIndex).map((word, i) => (
                  <motion.span
                    key={word + i} // Key needs to be unique for each word
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={wordVariants}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.2,
                    }}
                    className="inline-block text-2xl lg:text-4xl font-semibold text-[#541400] mr-2 whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Unlock your company's full potential with our innovative solutions
              and strategic guidance.
            </p>
            <p className="text-lg text-gray-600 mb-4 max-w-lg">
              Designed to make an everlasting impact!
            </p>
            <p className="text-lg text-gray-600 mb-4 max-w-lg">
              Growth Universe aspires to "Inspire Transformations" and envisions
              a world where individuals are not just striving, but
              thriving—fully aware of their strengths, resilient in the face of
              challenges, and confident in their ability to create positive
              change.
            </p>
            <p className="text-lg text-gray-600 mb-4 max-w-lg">
              Growth Universe’s mission is to empower individuals by cultivating
              self-awareness, fostering growth, and building confidence through
              wisdom, coaching, and self-realization.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We believe that every person has the ability for transformative
              growth and we are committed to providing the tools, resources, and
              support needed to help people achieve personal and professional
              transformation, guiding them toward a life of fulfillment and
              success.
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
