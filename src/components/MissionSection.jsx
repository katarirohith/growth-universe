// src/components/MissionSection.jsx
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-background/50 backdrop-blur-md rounded-2xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text text-center">
            Our Mission
          </h2>
          <p className="text-lg text-text/80 text-center max-w-3xl mx-auto leading-relaxed">
            At Growth Universe, our mission is to provide innovative solutions
            that drive growth and success for businesses of all sizes. We
            believe in a future where businesses can thrive through cutting-edge
            technology, sustainable practices, and customer-centric strategies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
