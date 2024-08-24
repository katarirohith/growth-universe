/* eslint-disable react/no-unescaped-entities */
// src/components/BenefitsSection.jsx
import { motion } from "framer-motion";
import {
  FaBrain,
  FaBalanceScale,
  FaLightbulb,
  FaHandsHelping,
  FaHeart,
  FaCogs,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaBrain,
    title: "Growth-Oriented Mindset",
    description:
      "Cultivate a mindset of continuous growth and improvement. Our programs guide you on a journey of self-discovery, keep you motivated and focused on reaching your highest potential and goals.",
  },
  {
    icon: FaBalanceScale,
    title: "Achieve Balance",
    description:
      "Create harmony between your mind, body and emotions, leading to a balanced, fulfilling life both personally and professionally.",
  },
  {
    icon: FaLightbulb,
    title: "Mental Clarity",
    description:
      "Gain mental clarity through techniques and strategies that help you overcome doubts, recognize and focus on your goals with precision.",
  },
  {
    icon: FaHandsHelping,
    title: "Community Support",
    description:
      "Become part of a like-minded community that supports and motivates each other. Share your journey, learn from others, and feel empowered in a collaborative environment.",
  },
  {
    icon: FaHeart,
    title: "Emotional Literacy",
    description:
      "Enhance your emotional intelligence, improving your relationships and communication skills in both personal and professional settings.",
  },
  {
    icon: FaCogs,
    title: "Self-Efficacy",
    description:
      "Our programs offer deep insights that challenge and reshape your thinking, leading to long-lasting change. It builds your confidence in your ability to make things happen.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">
          Benefits of our Courses and Coaching Programs
        </h2>
        <p className="text-center text-xl mb-8 max-w-3xl mx-auto">
          Our programs offer a blend of mindfulness practices, self-awareness
          exercises, and transformative workshops tailored to support your
          journey toward inner peace and clarity.
          <br />
          <br />
          With video interactions, note-taking, interactive e-books,
          self-assessment, certificates, and much more. You'll develop
          strategies to manage stress, enhance emotional intelligence, and
          foster a balanced, purpose-driven life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <benefit.icon className="text-5xl mb-6 text-accent" />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-text/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
