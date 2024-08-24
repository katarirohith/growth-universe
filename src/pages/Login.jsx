// src/pages/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-text">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Form fields go here */}
        </form>
        <div className="text-center">
          <p>
            Dont have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:text-primary/80"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
