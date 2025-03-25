import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-brand-primary text-brand-text">
      <Hero />

      {/* Call to Action Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent?</h2>
        <p className="mb-6">
          Contact us today to check availability and book your trailer.
        </p>

        {/* Rent Now Button */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/book"
            className="inline-block bg-brand-accent hover:bg-brand-accentDark text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Rent Now
          </Link>


          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="inline-block bg-brand-accent hover:bg-brand-accentDark text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
