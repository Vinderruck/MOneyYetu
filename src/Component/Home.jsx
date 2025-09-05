import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // For SEO
import { Footer } from "../Component";

const Home = () => {
  return (
    <div className="mx-auto mt-10 max-w-5xl text-center">
      {/* SEO Head Tags */}
      <Helmet>
        <title>MoneyYetu – Financial Education, SACCO Digitization & Online Income</title>
        <meta
          name="description"
          content="MoneyYetu is a financial education platform helping individuals and groups in Kenya and Africa learn about saving, investing, SACCO digitization, and earning online through legit opportunities."
        />
        <meta
          name="keywords"
          content="financial education Kenya, SACCO registration, investment articles, online jobs Africa, watch ads earn money, save money tips"
        />
        <meta name="author" content="Majembe Vincent" />
      </Helmet>

      {/* Hero Section */}
      <h1 className="mb-4 font-bold text-green-700 text-3xl">
        Welcome to MoneyYetu – Your Financial Education Hub
      </h1>
      <p className="mb-6 text-gray-700">
        A financial education platform designed to support{" "}
        <strong>groups and individuals</strong> in managing, learning, and
        growing their finances. This platform is intended solely for{" "}
        <em>educational purposes</em>.
      </p>

      {/* Main Features */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/register-sacco"
          className="bg-green-100 hover:bg-green-200 shadow p-6 rounded-lg"
        >
          <h2 className="font-semibold text-green-700 text-lg">
            Register Your SACCO
          </h2>
          <p className="mt-2 text-sm">
            Digitize your SACCO operations and simplify member management.
          </p>
        </Link>

        <Link
          to="/blog"
          className="bg-yellow-100 hover:bg-yellow-200 shadow p-6 rounded-lg"
        >
          <h2 className="font-semibold text-yellow-700 text-lg">
            Investment Articles
          </h2>
          <p className="mt-2 text-sm">
            Learn how to invest, grow your money, and secure your financial
            future.
          </p>
        </Link>

        <Link
          to="/watch-ads"
          className="bg-blue-100 hover:bg-blue-200 shadow p-6 rounded-lg"
        >
          <h2 className="font-semibold text-blue-700 text-lg">
            Watch Ads & Earn Points
          </h2>
          <p className="mt-2 text-sm">
            Get rewarded for your attention with points and small online income.
          </p>
        </Link>
      </div>

      {/* Money Mistakes Section */}
      <div className="mt-12 text-left">
        <h2 className="mb-4 font-semibold text-red-600 text-2xl">
          Common Money Mistakes to Avoid
        </h2>
        <p className="mb-4 text-gray-700">
          Many people struggle financially not because they don’t earn enough,
          but because of <strong>bad money habits</strong> like overspending,
          lack of budgeting, ignoring savings, and falling for quick-money scams.
        </p>
        <Link
          to="/blog/money-mistakes"
          className="text-red-500 hover:text-red-700 underline"
        >
          Read more about money mistakes →
        </Link>
      </div>

      {/* Online Jobs Section */}
      <div className="mt-12 text-left">
        <h2 className="mb-4 font-semibold text-indigo-600 text-2xl">
          Legit Online Jobs in Kenya & Africa
        </h2>
        <p className="mb-4 text-gray-700">
          The internet is full of job opportunities, but many are scams. We help
          you discover <strong>real online jobs</strong> like writing, remote
          customer service, affiliate marketing, and virtual assistance.
        </p>
        <Link
          to="/blog/online-jobs"
          className="text-indigo-500 hover:text-indigo-700 underline"
        >
          Explore legit online jobs →
        </Link>
      </div>

      {/* About Link */}
      <div className="mt-10 text-center">
        <Link to="/about" className="text-green-600 underline">
          Learn more about us
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
        
      </div>
    </div>
  );
};

export default Home;
