
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';  // Import useRouter hook
import Image from 'next/image';

<Image 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");  // To show success message after signup

  // Removed useRouter since we no longer need page redirection
  // const router = useRouter(); // No longer necessary

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Simulate signup success
    setMessage("You can proceed with the website ahead now!");

    // Clear form data after success
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: ""
    });

    // Close modal after 2 seconds without redirecting
    setTimeout(() => {
      setIsSignupModalOpen(false); // Close modal after success
    }, 2000);
  };

  return (
    <nav className="bg-opacity-10 backdrop-blur-sm text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo1.jpg" className="h-14 sm:h-16" alt="Logo" />
          <span className="text-xl sm:text-2xl text-white font-semibold whitespace-nowrap">
            Explore World
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center w-auto h-10 justify-center text-sm text-black rounded-lg md:hidden hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-opacity-50"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen || !isMobile ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-transparent text-white">
            <li>
              <Link
                href="#services"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#Exploremore"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="#destination"
                onClick={closeMenu}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent"
              >
                DestinationsNearby
              </Link>
            </li>
            
            <li>
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="text-white py-2 px-4 rounded bg-blue-600 hover:bg-blue-800"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Sign Up Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-end items-start p-8 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={() => setIsSignupModalOpen(false)}
              className="absolute top-2 right-2 text-black-600 bg-gray-200 text-lg p-2 rounded-md"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-800"
              >
                Sign Up
              </button>
            </form>
            {message && (
              <p className="mt-4 text-center text-green-600">{message}</p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
