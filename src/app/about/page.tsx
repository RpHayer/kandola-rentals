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
              src="/logos/kanpacific-circle.png"
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

        {/* About Content */}
        <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
          {/* Company Story */}
          <section>
            <p>
              At <strong>KAN PACIFIC EQUIPMENT LTD.</strong>, we&rsquo;re more than just a business&mdash;we&rsquo;re family.
              Founded by two brothers in Langley, our commitment to excellence, sustainability, and integrity makes us a standout choice for businesses in need of reliable equipment and support.
              Whether it&apos;s trailer rentals, waste disposal, or expert material handling services, we provide the tools and expertise to help you get the job done right.
            </p>
          </section>

          {/* Mission Statement */}
          <section>
            <p>
              Our mission is to provide reliable, efficient, and eco-friendly equipment solutions that empower our clients to succeed.
              We strive to build long-lasting relationships and contribute positively to our community, all while ensuring the highest standards of service, innovation, and environmental responsibility.
            </p>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Our Core Values</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Integrity &amp; Honesty:</strong> We believe in transparency, fairness, and ethical business practices. Our clients trust us because we uphold the highest standards.
              </li>
              <li>
                <strong>Reliability &amp; Quality Service:</strong> We are committed to delivering dependable equipment and exceptional service, providing the right solutions at the right time.
              </li>
              <li>
                <strong>Hard Work &amp; Dedication:</strong> No project is too big or small. We tackle every job with passion and commitment.
              </li>
              <li>
                <strong>Customer-Centered Approach:</strong> Our clients are at the heart of everything we do. We listen, understand, and tailor our services to meet their unique needs.
              </li>
            </ol>
          </section>

          {/* Services Offered */}
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Construction Trailers:</strong> Reliable utility trailer rentals for your transportation and hauling needs.
              </li>
              <li>
                <strong>Waste Disposal:</strong> Efficient, eco-friendly solutions designed for responsible waste management.
              </li>
              <li>
                <strong>Material Handling:</strong> Expert support for earthmoving tasks to keep your operations running smoothly.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <p>
              Proudly rooted in the Langley community, we&rsquo;re committed to making a difference through exceptional service and by building a network of trust and support.
              Let&rsquo;s work together to create lasting success!
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
