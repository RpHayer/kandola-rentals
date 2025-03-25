'use client';

import React, { useState } from 'react';
import InstagramLink from '../components/InstagramLink';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You could send the form data to an API here.
    console.log(form);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-brand-primary text-brand-text py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold uppercase text-center mb-8">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Information + Map */}
          <div className="space-y-6">
            <p className="text-lg">
              We&apos;d love to hear from you! Fill out the form or email us directly at{' '}
              <a
                href="mailto:info@example.com"
                className="text-brand-accent hover:underline"
              >
                info@kanpacificequip.com
              </a>.
            </p>
            <div>
              <h2 className="text-2xl font-semibold uppercase mb-4">Our Office</h2>
              <p className="text-lg mb-2">Langley, BC</p>
              <a
                href="tel:6048898176"
                className="text-lg flex items-center justify-start whitespace-nowrap"
              >
                <span className="mr-2 text-xl">&#9742;</span>
                (604) 889-8176
              </a>
              <a
                href="tel:6043660073"
                className="text-lg flex items-center justify-start whitespace-nowrap"
              >
                <span className="mr-2 text-xl">&#9742;</span>
                (604) 366-0073
              </a>
              <InstagramLink largeSize />
            </div>

          </div>
          {/* Right: Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-200 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
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
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-brand-accent"
                />
              </div>
              <div className="mb-4">
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
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-brand-accent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-brand-accent"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-brand-accent hover:bg-brand-accentDark text-white font-semibold py-2 px-4 rounded transition-all duration-300"
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
      </div>
    </main>
  );
}
