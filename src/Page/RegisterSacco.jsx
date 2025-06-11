import React from 'react';
import { Footer } from '../Component';

const RegisterSacco = () => {
  return (
    <div className="mx-auto mt-10 px-4 max-w-3xl text-gray-800">
      <h1 className="mb-4 font-bold text-green-700 text-3xl">Register Your SACCO / Saving Group</h1>

      <p className="mb-6">
        A digital platform to support groups and individuals in managing, learning, and growing their finances.
        <strong> This is for educational purposes.</strong>
      </p>

      <div className="space-y-4 text-sm">
        <p>
          <strong className="text-green-700">Why digitize your SACCO / Saving Group?</strong>  
          Automating your SACCO or Saving Group operations saves time, reduces errors, and improves transparency.
        </p>

        <p>
          With automation, your records, loan processing, member contributions, and reports are handled faster and more securely.
        </p>

        <p>
          <strong className="text-green-700">Online Access:</strong>  
          Members and officials can access the system from anywhere — anytime — as long as they have valid credentials.
        </p>

        <p>
          Start your journey today by filling out the form below. We'll help you bring your SACCO or Saving Group into the digital age.
        </p>
      </div>

      <div className="bg-white shadow mt-8 p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-green-600 text-xl">Send Your SACCO / Group Details</h2>
        <form
          action="mailto:detailscenter@mvdigitalsacco.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block font-medium">Group/SACCO Name</label>
            <input
              type="text"
              name="sacco_name"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Contact Person</label>
            <input
              type="text"
              name="contact_person"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Message / Request</label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          >
            Send Request
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://mvdigitalsacco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Click here to learn more about the system that will automate you Saving Group/Sacco
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default RegisterSacco;
