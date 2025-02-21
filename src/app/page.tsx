import Hero from './components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-brand-primary text-brand-text">
      <Hero />

      {/* Trailer Details Section */}
      <section className="py-20 bg-brand-secondary px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Southland Trailer 7x14 Dump Trailer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Clickable Image */}
            <div className="images">
              <Link href="/trailer">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-md mx-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_8px_rgba(229,57,53,0.3)] cursor-pointer">
                  <Image
                    src="/images/trailer-side.jpg"
                    alt="Trailer Side View"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </Link>
            </div>
            {/* Specifications */}
            <div className="specs text-silver text-left">
              <h3 className="text-2xl font-bold mb-4">Specifications</h3>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>
                  <strong>Dimensions:</strong> 7&apos; x 14&apos;
                </li>
                <li>
                  <strong>Weight Capacity:</strong> 10,000 lbs
                </li>
              </ul>
              <h3 className="text-2xl font-bold mt-8 mb-4">Rental Rates</h3>
              <p className="text-lg">Contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent?</h2>
        <p className="mb-6">
          Contact us today to check availability and book your trailer.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-brand-accent hover:bg-brand-accentDark text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
