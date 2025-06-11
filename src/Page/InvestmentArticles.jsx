import React from 'react';
import { Footer } from '../Component';

const InvestmentArticles = () => {
  return (
    <div className="mx-auto mt-10 px-4 max-w-4xl text-gray-800">
      <h1 className="mb-6 font-bold text-green-700 text-3xl">Investment Articles</h1>

      <p className="mb-6 text-md">
  Welcome to the educational section of MV Digital SACCO. Here, we share ideas to help members and saving groups
  understand the importance of saving and explore smart investment opportunities—especially those that can start small.<br />
  This section is not limited to groups; it’s also meant for individuals who are thinking about making financial changes.
</p>

      <section className="mb-8">
        <h2 className="mb-2 font-semibold text-green-600 text-2xl">💡 The Power of Saving from Small</h2>
        <p className="mb-3">
          You don’t need large amounts of money to start saving. In fact, the most successful savers started with small,
          consistent contributions. Saving as little as <strong>10 KES per day</strong> builds the habit and gives your
          SACCO or group the foundation to invest in the future.
        </p>
        <p>
          Encouraging your members to save regularly, even in small amounts, increases your group’s potential to qualify
          for loans, plan projects, and reinvest profits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 font-semibold text-green-600 text-2xl">📈 Top Investment Opportunities in 2025</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>
            <strong>1. Digital Farming (AgriTech):</strong> Use mobile platforms to invest in farming projects like
            poultry, horticulture, or dairy with guaranteed buyers and returns.
          </li>
          <li>
            <strong>2. Renewable Energy:</strong> Invest in small-scale solar kits, solar-powered water pumps, or
            mini-grids for rural businesses.
          </li>
          <li>
            <strong>3. Peer Lending through SACCOs:</strong> Issue group-backed loans to trusted members with set
            interest to grow your fund.
          </li>
          <li>
            <strong>4. Online Work & Digital Assets:</strong> Invest in training youth in freelancing, YouTube, affiliate
            marketing, or drop-shipping as income streams.
          </li>
          <li>
            <strong>5. Local Real Estate:</strong> Contribute monthly towards purchasing plots as a group, then build
            rentals or sell with profit.
          </li>
          <li>
            <strong>6. Retail Kiosks or Mobile Money Agents:</strong> Open member-managed kiosks or shops where the group
            earns a share of the profits.
          </li>
          <li>
            <strong>7. Buying and Reselling Farm Inputs:</strong> Buy seeds, fertilizer, or animal feeds in bulk and sell
            to members or community at a profit.
          </li>
        </ul>
      </section>

      <div className="bg-green-50 shadow-md p-6 rounded">
        <h3 className="mb-2 font-semibold text-green-700 text-lg">Final Thoughts</h3>
        <p>
          Investment doesn’t have to be complicated. With clear goals, transparency, and teamwork, your SACCO or Saving
          Group can grow steadily. Always research and involve members before investing.
        </p>
        <p className="mt-3">
          Want to automate your savings and track your investments easily?
          <a
            href="https://mvdigitalsacco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 underline"
          >
            Learn more about our digital platform.
          </a>
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default InvestmentArticles;
