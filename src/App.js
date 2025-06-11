// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutMoneyYetu, Home, Navbar } from './Component'; // ✅ Correct import from index.js
import { AdsEarningPage, InvestmentArticles, MoneyMistakesPage, OnlineJobsPage, RegisterSacco } from './Page';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="px-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-sacco" element={<RegisterSacco/>} />
          <Route path="/blog" element={<InvestmentArticles/>}/>
          <Route path="/watch-ads" element={<AdsEarningPage/>}/>
          <Route path="/blog/online-jobs" element={<OnlineJobsPage/>}/>
          <Route path="/blog/money-mistakes" element={<MoneyMistakesPage/>}/>
          <Route path="/about" element={<AboutMoneyYetu/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
