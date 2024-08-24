// src/pages/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F2]">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="flex justify-around mt-6">
          <button
            onClick={() => setActiveTab("email")}
            className={`${
              activeTab === "email"
                ? "text-primary border-primary"
                : "text-gray-500 border-transparent"
            } pb-2 border-b-2 font-medium transition-colors duration-300`}
          >
            Email
          </button>
          <button
            onClick={() => setActiveTab("google")}
            className={`${
              activeTab === "google"
                ? "text-primary border-primary"
                : "text-gray-500 border-transparent"
            } pb-2 border-b-2 font-medium transition-colors duration-300`}
          >
            Google
          </button>
          <button
            onClick={() => setActiveTab("phone")}
            className={`${
              activeTab === "phone"
                ? "text-primary border-primary"
                : "text-gray-500 border-transparent"
            } pb-2 border-b-2 font-medium transition-colors duration-300`}
          >
            Phone
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {activeTab === "email" && (
            <>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-primary hover:text-primary/80"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Sign in
                </button>
              </div>
            </>
          )}

          {activeTab === "google" && (
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <FaGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
            </div>
          )}

          {activeTab === "phone" && (
            <div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <AiFillPhone className="h-5 w-5 mr-2" />
                  Sign in with Phone
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="text-center mt-6">
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
