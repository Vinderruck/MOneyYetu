import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../Component';

const RegisterSacco = () => {
  return (
    <div className="mx-auto mt-10 px-4 max-w-3xl text-gray-800">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Register Your SACCO / Saving Group | MoneyYetu</title>
        <meta
          name="description"
          content="Join and digitize your SACCO or Saving Group with MoneyYetu. Automate contributions, loans, and records while giving members secure online access across Africa."
        />
        <meta
          name="keywords"
          content="SACCO registration Africa, Saving groups, Chama digitization, microfinance groups, online SACCO system, Africa financial management"
        />
        <link rel="canonical" href="https://moneyyetu.online/register-sacco" />
      </Helmet>

      {/* ✅ Page Content */}
      <h1 className="mb-4 font-bold text-green-700 text-3xl">
        Join & Register Your SACCO / Saving Group
      </h1>

      <p className="mb-6">
        Saving groups and SACCOs (also called Chamas, cooperatives, or microfinance groups in different parts of Africa) empower individuals to achieve more through collective savings and lending. By joining one, you gain access to loans, build financial discipline, and grow together as a community.
      </p>

      <div className="space-y-4 text-sm">
        <p>
          <strong className="text-green-700">Why digitize your SACCO / Saving Group?</strong><br/>
          Across Africa, many groups still rely on manual record keeping, which can be prone to errors, fraud, or delays. Automating your SACCO operations saves time, reduces mistakes, and increases trust among members.
        </p>

        <p>
          With automation, your contributions, loans, and financial reports are securely managed in real-time, helping your group stay transparent and accountable.
        </p>

        <p>
          <strong className="text-green-700">Online Access:</strong><br/>
          Members and officials can log in from anywhere, anytime, as long as they have valid credentials — whether in Kenya, Nigeria, Uganda, Tanzania, Ghana, or any other part of Africa.
        </p>

        <p>
          Take the next step in empowering your community. Fill out the form below to register your SACCO or saving group today and bring it into the digital age.
        </p>
      </div>

      {/* ✅ Registration Form */}
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

      {/* ✅ Learn More Link */}
      <div className="mt-8 text-center">
        <a
          href="https://mvdigitalsacco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Click here to learn more about automating your Saving Group/SACCO
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterSacco;
