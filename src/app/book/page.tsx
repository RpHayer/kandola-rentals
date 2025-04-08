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
    referredBy: '',
    referredByOther: '',
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
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if ((form.referredBy === 'someone' || form.referredBy === 'other') && !form.referredByOther.trim()) {
      alert('Please specify who referred you.');
      return;
    }

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to send booking email.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12 scroll-mt-[72px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold uppercase text-center mb-8">
          Rental Booking Request
        </h1>
        <div className="max-w-lg mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="Your Phone Number" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder="Your Message" rows={2} className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 mb-4 sm:mb-0">
                <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-1">Pickup Date</label>
                <input type="date" id="pickupDate" name="pickupDate" value={form.pickupDate} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
              </div>
              <div className="flex-1">
                <label htmlFor="dropoffDate" className="block text-sm font-semibold text-gray-700 mb-1">Drop Off Date</label>
                <input type="date" id="dropoffDate" name="dropoffDate" value={form.dropoffDate} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service</label>
              <select id="service" name="service" value={form.service} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500">
                <option value="">Select a Service</option>
                <option value="trailer-rental">Trailer Rental</option>
                <option value="waste-disposal">Waste Disposal</option>
                <option value="material-handling">Material Handling</option>
              </select>
            </div>
            <div>
              <label htmlFor="referredBy" className="block text-sm font-semibold text-gray-700 mb-1">How did you hear about us?</label>
              <select id="referredBy" name="referredBy" value={form.referredBy} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500">
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="someone">Referred by someone</option>
                <option value="other">Other</option>
              </select>
            </div>
            {(form.referredBy === 'someone' || form.referredBy === 'other') && (
              <div>
                <label htmlFor="referredByOther" className="block text-sm font-semibold text-gray-700 mb-1">Please specify</label>
                <input type="text" id="referredByOther" name="referredByOther" value={form.referredByOther} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-red-500" />
              </div>
            )}
            <div>
              <span className="block text-sm font-semibold text-gray-700 mb-1">Options</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="straps"
                    checked={form.options.straps}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="text-sm text-black">
                    Straps <span className="text-gray-600">($5/day)</span>
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="hitch"
                    checked={form.options.hitch}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="text-sm text-black">
                    Hitch <span className="text-gray-600">($5/day)</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-all duration-300">Submit</button>
            </div>
            {isSubmitted && <p className="mt-4 text-green-600 font-semibold">Thank you for contacting us!</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
