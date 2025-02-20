// components/Hero.tsx
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import RentNowModal from './RentalNowModal';

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

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
          Dump Trailer
        </h1>





        <p className="text-lg sm:text-xl font-medium drop-shadow-md">
          Southland Dump Trailers: 17,000 lbs, Fully Equipped
        </p>
        <div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-block bg-brand-accent hover:bg-brand-accentDark text-white py-3 px-6 rounded text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Rent Now
          </button>
        </div>
      </div>

      {/* Modal Form */}
      <RentNowModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
