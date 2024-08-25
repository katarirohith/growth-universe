// src/components/WorkshopsEventsSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";

const offerings = [
  {
    id: "schools",
    icon: FaGraduationCap,
    title: "Schools",
    pricing:
      "₹7,500-10,000 per student for workshops; ₹15,000-20,000 for multi-day events",
    workshops: [
      "Mindfulness for Students: Techniques to improve focus and reduce stress",
      "Character Building and Habits for Academic Success",
    ],
    events: [
      "Annual Student Empowerment Summit",
      "Parent-Teacher Collaboration Day: Fostering a Supportive Learning Environment",
    ],
  },
  {
    id: "colleges",
    icon: FaGraduationCap,
    title: "Colleges and Universities",
    pricing:
      "₹10,000-20,000 per student for workshops; ₹30,000-50,000 for multi-day events or boot camps",
    workshops: [
      "Career Planning and Professional Development",
      "Emotional Intelligence in the Workplace",
      "Entrepreneurship and Innovation Bootcamp",
    ],
    events: [
      "Campus-wide Wellness Week",
      "Industry-Academia Connect: Bridging the Skills Gap",
    ],
  },
  {
    id: "professionals",
    icon: FaUserTie,
    title: "Working Professionals",
    pricing:
      "₹30,000-50,000 per person for workshops; ₹100,000-150,000 for multi-day retreats or intensive programs",
    workshops: [
      "Leadership and Management Skills for the Modern Workplace",
      "Work-Life Balance and Stress Management",
      "Effective Communication and Conflict Resolution",
    ],
    events: [
      "Executive Retreat: Recharge and Refocus",
      "Networking Mastery: Building Professional Relationships",
    ],
  },
];

const WorkshopsEventsSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background" id="workshops-events">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mt-12 sm:text-5xl gradient-text">
          Workshops and Events
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-text/70">
          Immersive learning experiences tailored for different audiences.
        </p>
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <offering.icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {offering.title}
                </h3>
                <p className="mt-4 text-gray-500">{offering.pricing}</p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">Workshops:</h4>
                  <ul className="mt-2 space-y-2">
                    {offering.workshops.map((workshop, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span className="ml-3 text-gray-500">{workshop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">Events:</h4>
                  <ul className="mt-2 space-y-2">
                    {offering.events.map((event, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span className="ml-3 text-gray-500">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                to={`/enroll-workshop/${offering.id}`}
                className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
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

export default WorkshopsEventsSection;
