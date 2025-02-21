'use client';

import Image from 'next/image';
import React from 'react';

export default function TrailerDetails() {
  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase text-center mb-8">
          Southland Trailers 7x14 Dump Trailer
        </h1>

        {/* Trailer Image */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/hero-trailer.jpg" // Uses the image from your public folder
            alt="7x14 Dump Trailer 17,000 lbs with Tarp and Ramps"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Trailer Details */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>Model:</strong> SL714-16K
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Capacity:</strong> 17,000 lbs
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Dimensions:</strong> 7&apos; x 14&apos;
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Features:</strong> Dump trailer with integrated tarp system and ramps for easy loading and unloading. Built for durability, it&apos;s ideal for construction and waste disposal projects.
          </p>
          <p className="text-lg leading-relaxed">
            The New Southland Trailers 7x14 Dump Trailer is engineered to deliver exceptional performance. Whether you&apos;re tackling a construction project or managing waste disposal, this trailer is designed to handle the toughest jobs with ease.
          </p>
        </div>
      </div>
    </main>
  );
}
