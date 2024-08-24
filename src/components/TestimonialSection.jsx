// src/components/TestimonialSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const primaryColor = "#541400";

const testimonials = [
  {
    quote:
      "You have had such a remarkable impact on me. When I was going through a dark time, I remember how empathetic you were and how you helped me through it by letting me decide for myself instead of telling me what to do.",
    name: "GUNJAN UMARJI",
    title: "Endocrinologist",
  },
  {
    quote:
      "Your ability to see the good in every person, every idea, and everything is very impactful as a coach. Your warm presence and love for life often expand my thinking and let my mind run more freely.",
    name: "DANIEL ELLIS",
    title: "Director of Marketing",
  },
  {
    quote:
      "Progress over the ten weeks went from uncertain to complete clarity around achieving my life goals and the steps needed to achieve them, establishing clear action steps.",
    name: "ANA RAFAELA",
    title: "Mindset Coach",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experiences with Growth
            Universe.
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <FaQuoteLeft
                className={`text-4xl md:text-5xl text-[${primaryColor}] mb-6`}
              />
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
                {testimonials[currentIndex].quote}
              </p>
              <div>
                <p className="font-semibold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className={`absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 text-2xl md:text-3xl text-gray-400 hover:text-[${primaryColor}] transition-colors`}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 text-2xl md:text-3xl text-gray-400 hover:text-[${primaryColor}] transition-colors`}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
