// components/RentNowModal.tsx
'use client';

import React from 'react';

type RentNowModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RentNowModal({ isOpen, onClose }: RentNowModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-200 rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-xl uppercase tracking-wide text-gray-800 transform translate-y-1"
            style={{ textShadow: '.5px .5px 1px rgba(0,0,0,0.3)' }}
          >
            Rent Your Trailer
          </h2>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center text-gray-500 hover:text-gray-700 text-3xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>


        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 text-left"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 text-left"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(123) 456-7890"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-gray-700 text-left"
            >
              Rental Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
