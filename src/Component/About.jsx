import React from "react";
import Footer from "./Footer";

const AboutMoneyYetu = () => {
  return (
    <div className="mx-auto px-4 py-10 max-w-5xl text-gray-800">
      <h1 className="mb-6 font-bold text-blue-600 text-3xl">About MoneyYetu</h1>

      <section className="mb-8">
        <p className="text-lg">
          <strong>MoneyYetu</strong> is an educational platform created to empower people with knowledge and tools in the areas of <strong>savings, investment, group financial management, online job opportunities, and ad-watching for income.</strong> The platform is designed for both individuals and groups who are looking to grow their financial literacy and income through practical, easy-to-follow systems.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-blue-500 text-2xl">What We Offer</h2>
        <ul className="space-y-2 text-base list-disc list-inside">
          <li>Educational content on personal and group savings</li>
          <li>Investment tips tailored to local SACCOs and individuals</li>
          <li>Guides on how to manage financial groups (like chamas) effectively</li>
          <li>Online job listings and earning opportunities</li>
          <li>Earn points by watching ads and engaging with learning materials</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-blue-500 text-2xl">Community-Centered Learning</h2>
        <p>
          MoneyYetu supports community learning and development. Whether you're a SACCO member, a student, a job seeker, or someone running a savings group — the platform helps you understand financial basics and modern ways to earn online.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-blue-500 text-2xl">A Product of MV Digital Solutions</h2>
        <p>
          MoneyYetu is developed and managed by <strong>MV Digital Solutions</strong>, a tech company committed to building digital tools that solve real community problems. MV Digital Solutions focuses on platforms that promote <strong>financial education, digital transformation, and opportunity creation</strong> for local users.
        </p>
        <p className="mt-2">
          This ensures that MoneyYetu is built not just for profit, but for impact — helping people grow their knowledge, income, and financial confidence.
        </p>
      </section>

      <section>
        <p className="font-semibold italic">MoneyYetu — Learn, Earn, and Grow with Purpose.</p>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutMoneyYetu;
