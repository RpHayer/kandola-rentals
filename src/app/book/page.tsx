'use client';

import React, { useState } from 'react';

export default function Book() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    pickupDate: '',
    dropoffDate: '',
    service: '',
    options: {
      straps: false,
      hitch: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Process your form data here (for example, call an API to send an email)
    console.log(form);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold uppercase text-center mb-8">
          Rental Booking Request
        </h1>
        <div className="max-w-lg mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
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
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
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
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              />
            </div>
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1"
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
                rows={2}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              ></textarea>
            </div>
            {/* Date Range: Pickup and Drop Off Dates */}
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <label
                  htmlFor="pickupDate"
                  className="block text-sm font-semibold text-gray-700 mb-1"
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
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="dropoffDate"
                  className="block text-sm font-semibold text-gray-700 mb-1"
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
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
                />
              </div>
            </div>
            {/* Service Dropdown */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500"
              >
                <option value="">Select a Service</option>
                <option value="trailer-rental">Trailer Rental</option>
                <option value="waste-disposal">Waste Disposal</option>
                <option value="material-handling">Material Handling</option>
              </select>
            </div>
            {/* Options Checkboxes */}
            <div>
              <span className="block text-sm font-semibold text-gray-700 mb-1">
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
    </main>
  );
}
