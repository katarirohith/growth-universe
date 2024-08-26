// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import CoursesSection from "./components/CoursesSection";
import EnrollPage from "./pages/EnrollPage";
import ContentCreationSection from "./components/ContentCreationSection";
import WorkshopsEventsSection from "./components/WorkshopsEventsSection";
import LMSSection from "./components/LMSSection";

const App = () => {
  const servicesRef = useRef(null); // Define the ref here

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="min-h-screen text-text">
        <Header onServicesClick={scrollToServices} />{" "}
        {/* Pass the scroll function to Header */}
        <Routes>
          <Route
            path="/"
            element={<Home servicesRef={servicesRef} />} // Pass the ref to Home
          />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/lms" element={<LMSSection />} />
          <Route path="/enroll/:courseId" element={<EnrollPage />} />
          <Route path="/enroll/:offeringId" element={<EnrollPage />} />
          <Route
            path="/workshops-events"
            element={<WorkshopsEventsSection />}
          />
          <Route
            path="/content-creation"
            element={<ContentCreationSection />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
