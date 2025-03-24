'use client';

import React, { useState } from 'react';

type RentNowModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RentNowModal({ isOpen, onClose }: RentNowModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    pickupDate: '',
    dropoffDate: '',
    service: '',
    options: {
      straps: false,
      hitch: false,
      extra: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          [name]: checked,
        },
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process your form data here.
    console.log(form);
    setIsSubmitted(true);
  };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
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
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            />
          </div>
          {/* Email */}
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
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            />
          </div>
          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 text-left"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            ></textarea>
          </div>
          {/* Date Range: Pickup and Drop Off Dates */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1 mb-4 sm:mb-0">
              <label
                htmlFor="pickupDate"
                className="block text-sm font-semibold text-gray-700 mb-1 text-left"
              >
                Pickup Date
              </label>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={form.pickupDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="dropoffDate"
                className="block text-sm font-semibold text-gray-700 mb-1 text-left"
              >
                Drop Off Date
              </label>
              <input
                type="date"
                id="dropoffDate"
                name="dropoffDate"
                value={form.dropoffDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              />
            </div>
          </div>
          {/* Service Dropdown */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-gray-700 mb-1 text-left"
            >
              Service
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
            >
              <option value="">Select a Service</option>
              <option value="drop-off">Drop Off</option>
              <option value="pick-up">Pick Up</option>
              <option value="both">Both</option>
            </select>
          </div>
          {/* Options Checkboxes */}
          <div>
            <span className="block text-sm font-semibold text-gray-700 mb-1 text-left">
              Options
            </span>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="straps"
                  checked={form.options.straps}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="text-sm text-black">Straps</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="hitch"
                  checked={form.options.hitch}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="text-sm text-black">Hitch</span>
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-all duration-300"
            >
              Submit
            </button>
          </div>
          {isSubmitted && (
            <p className="mt-4 text-green-600 font-semibold">
              Thank you for contacting us!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
