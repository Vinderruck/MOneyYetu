import React from "react";
import { Footer } from "../Component";

const AdsEarningPage = () => {
  return (
    <div className="mx-auto p-6 max-w-4xl">
      <h1 className="mb-4 font-bold text-blue-700 text-2xl">
        Earn by Watching Ads – Group & Individual Opportunities
      </h1>

      <p className="mb-4 text-md">
        In this section, we highlight platforms and companies that offer real opportunities to earn income through
        watching ads. These options work well for individuals and saving groups looking for flexible, small-scale online income.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl">📌 Recommended Platforms:</h2>
      <ul className="space-y-2 ml-6 text-md list-disc">
        <li>
          <strong>Monetag</strong> – Sign up and generate <strong>direct links</strong> you can share anywhere — WhatsApp, social media, blogs, etc.
          You earn every time someone clicks or engages with your link.
          <a
            href="https://monetag.com/?ref_id=uPoP"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 underline"
          >
            Register on Monetag
          </a>
        </li>
        <li>
          <strong>Adsterra</strong> – Another platform offering SmartLinks and referral earnings.
          <span className="ml-2 text-gray-500">(You can explore later if needed)</span>
        </li>
        <li>
          <strong>PropellerAds</strong> – Great for push notifications and monetization links.
          <span className="ml-2 text-gray-500">(Optional)</span>
        </li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold text-xl">🔗 What is a Direct Link?</h2>
      <p className="mb-4 text-md">
        A <strong>direct link</strong> is a unique tracking link that you can share online. When people click it, you earn money based on how many
        people interact and where the traffic comes from. You don’t need a website — just the link and a place to share it.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl">🌐 Do You Need a Website?</h2>
      <p className="mb-4 text-md">
        Some ad platforms require you to create or own a website before you can start earning. These include:
      </p>
      <ul className="mb-4 ml-6 text-md list-disc">
        <li><strong>Google AdSense</strong> – Requires a site with original content.</li>
        <li><strong>Media.net</strong> – Needs traffic from countries like the US and UK.</li>
        <li><strong>Adsterra (Display Ads)</strong> – Works best if you have a blog or website.</li>
      </ul>
      <p className="mb-4 text-md">
        But don’t worry — there are platforms where <strong>no website is needed</strong> to start earning.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl">✅ Platforms That DO NOT Require a Website</h2>

      <h3 className="mt-4 mb-1 font-semibold text-lg">🔗 SmartLink / Direct Link Platforms:</h3>
      <ul className="mb-4 ml-6 text-md list-disc">
        <li><strong>Monetag</strong> – Share your SmartLink anywhere. <a href="https://monetag.com/?ref_id=uPoP" target="_blank" rel="noreferrer" className="text-blue-600 underline">Register here</a>.</li>
        <li><strong>PropellerAds</strong> – Offers direct link and push ad options.</li>
        <li><strong>Adsterra SmartLink</strong> – No website needed if you choose SmartLink only.</li>
      </ul>

      <h3 className="mt-4 mb-1 font-semibold text-lg">📊 Survey Sites (Earn by Completing Surveys):</h3>
      <ul className="mb-6 ml-6 text-md list-disc">
        <li><strong>Swagbucks</strong> – Watch ads, do surveys, and get rewarded.</li>
        <li><strong>ySense</strong> – Global survey tasks that pay via PayPal or gift cards.</li>
        <li><strong>Surveytime.io</strong> – Instant payout after each completed survey.</li>
        <li><strong>InboxDollars</strong> – (US Only) Pays for ads and surveys.</li>
        <li><strong>Toluna</strong> – Engage in surveys and community polls.</li>
        <li><strong>TimeBucks</strong> – Earn via tasks, ad views, and surveys.</li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold text-xl">⚠️ What to Expect</h2>
      <p className="mb-4 text-md">
        This method is simple but not easy. You must stay <strong>consistent, creative, and patient</strong>. Not every link gets clicks. You’ll
        need to test different platforms, learn what works, and keep trying.
      </p>
      <p className="mb-6 text-md">
        Groups can assign roles to increase reach — posting links on Facebook groups, forums, or messaging platforms.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl">📨 Need Help Registering?</h2>
      <p className="mb-4 text-md">
        If you are having trouble registering on Monetag or need help creating your direct link, send us an email at{" "}
        <a href="mailto:support@mvdigitalsacco.com" className="text-blue-600 underline">
          support@mvdigitalsacco.com
        </a>{" "}
        and we’ll guide you through it.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl">📝 N.B. – Join the MV Saving and Loan Group</h2>
      <p className="mb-6 text-md">
        Members working through this earning method are welcome to join our MV Saving and Loan Group under the MVDS system.
        This group helps track savings, plan loans, and grow together as you earn online.
      </p>

      <Footer/>
    </div>
  );
};

export default AdsEarningPage;
