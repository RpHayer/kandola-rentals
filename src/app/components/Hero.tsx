'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-brand-text px-6 sm:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-trailer.jpg"
          alt="Commercial Trailer Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-3xl space-y-6 px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-light uppercase tracking-wider text-white">
          Trailer Rentals
        </h1>
        <p className="text-lg sm:text-xl font-medium drop-shadow-md">
          Need Reliable Construction Trailers? We&rsquo;ve got you covered!
        </p>
        <div>
          <Link
            href="/trailer"
            className="inline-block bg-brand-accent hover:bg-brand-accentDark text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </section>
  );
}
