'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import RentNowModal from '../components/RentalNowModal';

export default function TrailerDetails() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase">
            Southland 7X14 Dump Trailer
          </h1>
        </header>

        {/* Top Section: Trailer Image & Description */}
        <div className="flex flex-col md:flex-row md:items-stretch md:space-x-8 mb-12">
          {/* Left Column: Trailer Image */}
          <div className="md:w-2/3 mb-8 md:mb-0">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-trailer.jpg" // Uses the image from your public folder
                alt="Southland 7X14 Dump Trailer with Tarp and Ramps"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          {/* Right Column: Trailer Description & Book Now Button */}
          <div className="md:w-1/3">
            <div className="flex flex-col justify-between h-full p-6 bg-brand-secondary rounded-xl shadow-md gap-3">
              <p className="text-lg">
                The Southland SL714-14K Dump Trailer is designed for superior strength and efficiency, making it the ideal choice for construction, landscaping, and waste disposal projects. Engineered to handle heavy loads with ease, it ensures reliability and high performance when you need it most.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="self-center bg-brand-accent hover:bg-brand-accentDark text-white font-bold py-2 px-4 rounded transition-all duration-300 w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Section: Specifications Table & Key Features */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Column: Specifications Table */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="overflow-x-auto">
              <table className="w-full bg-brand-secondary rounded-xl shadow-md">
                <tbody className="text-lg">
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Year:</th>
                    <td className="p-4 text-left">2025</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Manufacturer:</th>
                    <td className="p-4 text-left">SOUTHLAND TRAILERS</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Model:</th>
                    <td className="p-4 text-left">SL714-14K</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Length:</th>
                    <td className="p-4 text-left">14ft</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Width:</th>
                    <td className="p-4 text-left">7ft</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Height:</th>
                    <td className="p-4 text-left">24in</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Payload Capacity:</th>
                    <td className="p-4 text-left">12308 lbs</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">Weight:</th>
                    <td className="p-4 text-left">3124 lbs</td>
                  </tr>
                  <tr>
                    <th className="p-4 font-bold text-left">Axle Capacity:</th>
                    <td className="p-4 text-left">2 X 7000 lbs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right Column: Key Features */}
          <div className="md:w-1/2">
            <div className="p-6 bg-brand-secondary rounded-xl shadow-md">
              <h2 className="text-2xl font-bold uppercase mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Feature Card 1 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Integrated Tarp System
                    </h4>
                    <p className="text-sm">
                      Keeps your load secure and protected.
                    </p>
                  </div>
                </div>
                {/* Feature Card 2 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Heavy-Duty Ramps
                    </h4>
                    <p className="text-sm">
                      For smooth loading and unloading.
                    </p>
                  </div>
                </div>
                {/* Feature Card 3 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Spacious Design
                    </h4>
                    <p className="text-sm">
                      Ample 7&apos; x 14&apos; space.
                    </p>
                  </div>
                </div>
                {/* Feature Card 4 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Secure Tailgate
                    </h4>
                    <p className="text-sm">
                      Double Door Slam Lock for secure operations.
                    </p>
                  </div>
                </div>
                {/* Feature Card 5 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Top Wind Jack
                    </h4>
                    <p className="text-sm">
                      5,000lbs capacity for reliable positioning.
                    </p>
                  </div>
                </div>
                {/* Feature Card 6 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <div>
                    <h4 className="font-bold uppercase text-sm">
                      Hydraulic Hoist
                    </h4>
                    <p className="text-sm">
                      7 Ton Hydraulic Underbody Hoist for smooth dumping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Form */}
      <RentNowModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
