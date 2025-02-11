// components/Header.tsx

'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'var(--primary)' }} className="py-4 relative z-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Kandola Rentals</div>

        <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        <nav
          className={`${isMenuOpen ? 'max-h-screen' : 'max-h-0'
            } overflow-hidden transition-all duration-300 ease-in-out md:max-h-screen md:overflow-visible md:block absolute md:static top-16 md:top-auto left-0 w-full md:w-auto bg-primary md:bg-transparent py-4 md:py-0 z-10`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}