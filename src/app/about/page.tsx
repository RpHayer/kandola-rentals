'use client';

import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12">
      <div className="container mx-auto px-4">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/logos/kanpacific-circle.png" // Replace with your actual logo path
              alt="Kan Pacific Equipment Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>


        <h1 className="text-3xl sm:text-4xl font-bold uppercase text-center mb-8">
          About KAN PACIFIC EQUIPMENT LTD.
        </h1>


        <div className="max-w-3xl mx-auto space-y-8">
          {/* Our Story */}
          <section className="space-y-4">
            <p className="text-lg leading-relaxed">
              At <strong>KAN PACIFIC EQUIPMENT LTD.</strong>, we’re not just a business—we’re family.
              Founded by brothers <strong>Binay Kandola</strong> and <strong>Gunvir Kandola</strong> in Langley,
              our passion for hard work and honesty drives us to deliver reliable equipment solutions.
            </p>
          </section>

          {/* Our Services */}
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                <strong>Construction Equipment:</strong> Excavators, loaders, and more.
              </li>
              <li>
                <strong>Waste Disposal:</strong> Efficient, eco-friendly solutions.
              </li>
              <li>
                <strong>Material Handling:</strong> Expert support for earthmoving tasks.
              </li>
            </ul>
          </section>

          {/* Our Commitment */}
          <section className="space-y-4">
            <p className="text-lg leading-relaxed">
              Proudly rooted in the Langley community, we’re committed to exceptional service and support.
              Let’s build a better future together.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
