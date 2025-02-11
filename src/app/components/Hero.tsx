// components/Hero.tsx

'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white px-6 sm:px-12">
      {/* Optimized background image using next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-trailer.jpg" // Path to your image in the public folder
          alt="Commercial Trailer Background"
          layout="fill" // Makes the image cover the entire section
          objectFit="cover" // Ensures the image covers the section without stretching
          objectPosition="center" // Ensures the image is centered
          priority // Makes the image load faster (recommended for hero images)
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Dark overlay with reduced opacity */}

      {/* Content */}
      <div className="relative z-20 max-w-3xl space-y-6 px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-teal-400 to-cyan-500">
          Reliable Commercial Trailers for Rent
        </h1>
        <p className="text-lg sm:text-xl font-medium drop-shadow-lg text-white">
          Get the job done faster with our high-quality, fully equipped trailers. Rent today and experience top-notch service and flexibility!
        </p>
        <div>
          <a
            href="/rentals"
            className="inline-block bg-lime-700 text-white py-3 px-6 rounded-lg text-lg font-medium 
            border-4 border-transparent hover:border-teal-500 
            shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
              outline: '2px solid rgba(0, 255, 204, 0.6)' // Custom 3D-like outline with a cyan color
            }}
          >
            Rent Your Trailer Now
          </a>
        </div>
      </div>
    </section>
  );
}