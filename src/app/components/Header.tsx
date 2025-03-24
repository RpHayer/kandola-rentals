'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Trailer Details', href: '/trailer' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white w-full py-4">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-4">
        {/* Left: Logo + Brand Name wrapped in Link */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="relative w-10 h-10">
            <Image
              src="/logos/k.png" // Replace with your "K" logo path
              alt="Kan Pacific Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span
            className="text-3xl leading-none tracking-wide"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            <span className="uppercase font-bold text-white">KAN</span>
            <span className="uppercase font-light text-white ml-1.5">PACIFIC</span>
            <span className="uppercase font-light text-red-500 ml-2">EQUIPMENT</span>
            <span className="uppercase font-light text-red-500 ml-1 text-sm">LTD.</span>
          </span>
        </Link>
        {/* Right: Desktop Navigation */}
        <nav className="flex space-x-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative group text-lg font-light tracking-wider uppercase transition-colors hover:text-red-500"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-center px-4 relative">
        {/* Centered Logo wrapped in Link */}
        <Link href="/" className="relative w-10 h-10 cursor-pointer">
          <Image
            src="/logos/k.png" // Replace with your logo path
            alt="Kan Pacific Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
        {/* Burger Menu Button (positioned on the right) */}
        <button
          className="absolute right-4 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black text-white px-4 pt-2 pb-4 z-50">
          <ul className="flex flex-col items-center space-y-2">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative group block py-1 text-lg font-light tracking-wider uppercase transition-colors hover:text-red-500"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
