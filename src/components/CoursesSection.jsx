// src/components/CoursesSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaUserTie,
  FaComments,
  FaPlane,
  FaChild,
  FaBrain,
  FaCheck,
} from "react-icons/fa";

const courses = [
  {
    id: "inner-transformation",
    icon: FaBrain,
    title: "Inner Transformation Program",
    targetMarket: "Working professionals across all ages",
    pricing: "₹5,000",
    description:
      "A comprehensive program designed to foster personal growth and self-discovery.",
    features: [
      "Personalized growth plan",
      "Weekly guided sessions",
      "Access to exclusive resources",
    ],
  },
  {
    id: "leadership",
    icon: FaUserTie,
    title: "Leadership Program",
    targetMarket: "Working professionals, aspiring leaders",
    pricing: "₹5,000",
    description:
      "Develop essential leadership skills and strategies for professional growth.",
    features: [
      "Leadership assessment tools",
      "One-on-one coaching sessions",
      "Real-world case studies",
    ],
    popular: true,
  },
  {
    id: "soft-skills",
    icon: FaGraduationCap,
    title: "Soft Skills Development Course",
    targetMarket: "Students, fresh graduates",
    pricing: "₹72,000",
    description:
      "Enhance your interpersonal skills and professional readiness.",
    features: [
      "Comprehensive skill assessment",
      "Interactive workshops",
      "Practical assignments",
    ],
  },
  {
    id: "public-speaking",
    icon: FaComments,
    title: "Public Speaking and Communication Skills Course",
    targetMarket: "Professionals, students, public speaking enthusiasts",
    pricing: "₹72,000",
    description:
      "Master the art of effective communication and public speaking.",
    features: [
      "Video recording and analysis",
      "Personalized feedback",
      "Live practice sessions",
    ],
  },
  {
    id: "study-abroad",
    icon: FaPlane,
    title: "Study Abroad Preparation Course",
    targetMarket: "Students planning to pursue higher education overseas",
    pricing: "Contact for pricing",
    description:
      "Comprehensive preparation for international education opportunities.",
    features: [
      "University application guidance",
      "IELTS/TOEFL preparation",
      "Cultural adaptation workshops",
    ],
  },
  {
    id: "mindful-me",
    icon: FaChild,
    title: "MindfulMe: Nurturing Hearts, Shaping Futures",
    targetMarket: "School Children",
    pricing: "₹75,000",
    description:
      "A program designed to foster mindfulness and emotional intelligence in young learners.",
    features: [
      "Age-appropriate mindfulness exercises",
      "Parent-child workshops",
      "Progress tracking and reports",
    ],
  },
];

const CoursesSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background" id="courses">
      <div className="container mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center mt-12 sm:text-5xl gradient-text">
            Our Courses
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-text/70">
            Discover our range of courses designed to empower you on your
            journey of personal and professional growth.
          </p>
        </div>
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <course.icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h3>
                {course.popular && (
                  <p className="absolute top-0 py-1.5 px-4 bg-primary text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                    Most popular
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {course.pricing}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{course.description}</p>
                <ul role="list" className="mt-6 space-y-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex">
                      <FaCheck
                        className="flex-shrink-0 w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/enroll/${course.id}`}
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  course.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                } transition-colors duration-300`}
              >
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
