// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
