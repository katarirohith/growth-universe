// src/pages/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#FFF8F2] pt-20 lg:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-32 flex flex-col-reverse lg:flex-row items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 overflow-y-auto pr-4 lg:pr-12 lg:pt-8"
            style={{ maxHeight: "100vh" }} // Ensure the text can scroll within the viewport
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="block"
              >
                MAHAREDDY
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="block"
              >
                SHREYA REDDY
              </motion.span>
            </motion.h1>
            <p className="text-lg text-[#541400] font-semibold mb-4">
              ICF-Accredited Life and Success Coach, NLP Practitioner, EFT
              Practitioner, Reiki Healer, Clinical Hypnotherapist
            </p>
            <div className="space-y-6 max-w-lg">
              <p className="text-xl text-gray-600">
                I’m Shreya Reddy, an ICF-Accredited Coach 🌟, dynamic speaker
                🎤, and the visionary founder of Growth Universe. My journey is
                a tapestry woven with the threads of transformation, passion,
                and empowerment. I invite you to embark on this journey with me,
                where together, we will unlock your fullest potential and
                achieve lasting success in every facet of your life. 🌱
              </p>
              <p className="text-lg text-gray-600">
                Imagine a life where you are in tune with your true self, guided
                by the principles of Neuro-Plasticity 🧠, Positive Psychology
                😊, Mindfulness 🧘‍♀️, and Neuro-Linguistic Programming. Picture
                yourself on a path of self-discovery, where every step you take
                leads you closer to the life you’ve always envisioned. My
                holistic approach bridges the gap between where you are now and
                where you aspire to be. 🌈
              </p>
              <p className="text-lg text-gray-600">
                I wasn’t always living my best life. I once felt directionless,
                unhealthy, and lost. My own journey into coaching and personal
                development began with a profound commitment to self-discovery
                and growth. It was in those moments of uncertainty that I found
                my calling. 🔍
              </p>
              <p className="text-lg text-gray-600">
                This transformative journey has not only shaped who I am today
                but has also fueled my passion for helping others achieve their
                own transformations. I invite you to discover my story, to see
                how it can ignite your own path to change. 🔥
              </p>
              <p className="text-lg text-gray-600">
                Together, we will enrich your life, both personally and
                professionally, empowering you to set clear goals 🎯, uncover
                solutions, and create the fulfillment you deserve. Let’s embark
                on this transformative journey together, where your potential
                knows no bounds. 🚀
              </p>
            </div>
          </motion.div>

          {/* Image Section: Mobile (above text), Desktop (right side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 lg:sticky lg:top-0 flex items-center justify-center mb-8 lg:mb-0"
            style={{ height: "100vh" }} // Ensure the image matches the screen height on desktop
          >
            <img
              src="/shreya-reddy.png" // Correct image path relative to the public folder
              alt="Shreya Reddy"
              className="w-full h-auto max-h-full object-cover lg:h-full lg:w-auto" // Ensure the image covers the full height on desktop
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
