import React, { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#005EB5] p-4 m-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">
            <img className="w-50 md:w-20 lg:w-30" src={logo} alt="logo" />
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-white mr-2">Contact</button>
            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`md:flex space-x-4 ${
              isMenuOpen
                ? 'absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-4 rounded-md flex flex-col items-center w-full'
                : 'hidden'
            }`}
          >
            <li>
              <button className="text-[#005EB5] bg-white px-4 py-2 rounded">About</button>
            </li>
            <li>
              <button className="text-[#005EB5] bg-white px-4 py-2 rounded">Courses</button>
            </li>
            <li>
              <button className="text-[#005EB5] bg-white px-4 py-2 rounded">Testimonials</button>
            </li>
            <li>
              <button className="text-[#005EB5] bg-white px-4 py-2 rounded">FAQ's</button>
            </li>
            <li>
              <button className="text-[#005EB5] bg-white px-4 py-2 rounded">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;