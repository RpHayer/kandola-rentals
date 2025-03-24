'use client';

import Link from 'next/link';
import InstagramLink from './InstagramLink';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} KAN PACIFIC EQUIPMENT LTD.
        </p>
        <p className="text-sm mb-2">Langley Township, BC</p>
        <p className="text-sm mb-2">
          Email:{' '}
          <a
            href="mailto:info@kanpacificequipment.com"
            className="text-brand-accent hover:underline"
          >
            info@kanpacificequipment.com
          </a>
        </p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <a
            href="tel:6048898176"
            className="text-sm flex items-center justify-center whitespace-nowrap"
          >
            <span className="mr-1">&#9742;</span>
            (604) 889-8176
          </a>
          <a
            href="tel:6043660073"
            className="text-sm flex items-center justify-center whitespace-nowrap"
          >
            <span className="mr-1">&#9742;</span>
            (604) 366-0073
          </a>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <InstagramLink />
          {/* Add additional social icons here if needed */}
        </div>
      </div>
    </footer>
  );
}
