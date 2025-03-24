'use client';

import Image from 'next/image';
import React from 'react';

export default function TrailerDetails() {
  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase">
            2025 Southland 7X14 Dump Trailer
          </h1>
          <p className="mt-4 text-lg italic text-brand-accent">
            Engineered for Superior Strength and Efficiency
          </p>
        </header>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          {/* Trailer Image */}
          <div className="md:w-1/2 space-y-6">
            {/* Trailer Image */}
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl mb-8">
              <Image
                src="/images/hero-trailer.jpg" // Uses the image from your public folder
                alt="Southland 7X14 Dump Trailer with Tarp and Ramps"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Specifications Table */}
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
                  <tr className="border-b border-gray-300">
                    <th className="p-4 font-bold text-left">GVWR:</th>
                    <td className="p-4 text-left">15432 lbs</td>
                  </tr>
                  <tr>
                    <th className="p-4 font-bold text-left">Axle Capacity:</th>
                    <td className="p-4 text-left">7000 lbs</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>


          {/* Trailer Details Content */}
          <div className="md:w-1/2 space-y-6 text-left">
            <div className="p-6 bg-brand-secondary rounded-xl shadow-md">
              <p className="text-lg leading-relaxed">
                The Southland SL714-14K Dump Trailer is designed for superior strength and efficiency, making it the perfect choice for construction, landscaping, and waste disposal projects. This trailer can handle heavy loads with ease, ensuring reliability and performance when you need it most.
              </p>
            </div>
            <div className="p-6 bg-brand-secondary rounded-xl shadow-md">
              <h2 className="text-2xl font-bold uppercase mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Feature Card 1 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <span className="text-3xl">🛡️</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Integrated Tarp System</h4>
                    <p className="text-sm">
                      Keeps your load secure and protected, preventing debris from escaping.
                    </p>
                  </div>
                </div>
                {/* Feature Card 2 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <span className="text-3xl">🚧</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Heavy-Duty Ramps</h4>
                    <p className="text-sm">
                      Designed for smooth and hassle-free loading and unloading.
                    </p>
                  </div>
                </div>
                {/* Feature Card 3 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <span className="text-3xl">📏</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Spacious Design</h4>
                    <p className="text-sm">
                      Ample 7' x 14' space for hauling large loads efficiently.
                    </p>
                  </div>
                </div>
                {/* Feature Card 4 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <span className="text-3xl">🔒</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Secure Tailgate</h4>
                    <p className="text-sm">
                      Double Door Slam Lock tailgate for safe and secure operations.
                    </p>
                  </div>
                </div>
                {/* Feature Card 5 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <span className="text-3xl">🛠️</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Top Wind Jack</h4>
                    <p className="text-sm">
                      5,000lbs capacity for easy and reliable trailer positioning.
                    </p>
                  </div>
                </div>
                {/* Feature Card 6 */}
                <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-sm flex items-start space-x-4">
                  <span className="text-3xl">⚙️</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Hydraulic Hoist</h4>
                    <p className="text-sm">
                      7 Ton Double Acting Hydraulic Underbody Hoist for smooth dumping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
