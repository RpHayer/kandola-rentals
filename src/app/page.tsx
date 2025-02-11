import Image from 'next/image';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="bg-gray-100"> {/* Wrap the Hero component in a <main> tag */}
      <Header />
      {/* Hero Section */}

      <Hero />

      {/* Trailer Details */}
      <section className="trailer-details py-20">
        <div className="container mx-auto text-center"> {/* Container for content */}
          <h2 className="text-4xl font-bold mb-8">
            Southland Trailer 7x14 Dump Trailer
          </h2>
          <div className="details-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grid with responsive columns */}
            <div className="images">
              <Image
                src="/images/trailer-side.jpg"
                alt="Trailer Side View"
                width={800}
                height={600}
              />
              {/* Add more images here */}
            </div>
            <div className="specs">
              <h3 className="text-2xl font-bold mb-4">Specifications</h3>
              <ul className="list-disc list-inside">
                <li>Dimensions: 7' x 14'</li>
                <li>Weight Capacity: 10,000 lbs</li>
                {/* Add other specs */}
              </ul>
              <h3 className="text-2xl font-bold mt-8 mb-4">
                Rental Rates
              </h3>
              <p>
                {/* Add rental rates and information */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta bg-gray-200 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent?</h2>
        <p className="mb-6">
          Contact us today to check availability and book your trailer.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </section>

    </main>
  );
}

