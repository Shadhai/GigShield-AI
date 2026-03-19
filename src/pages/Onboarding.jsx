import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';

const Onboarding = () => {
  const navigate = useNavigate();
  const { calculatePremium } = useAppState();

  const [formData, setFormData] = useState({
    name: 'Ravi Kumar',
    mobile: '9876543210',
    platform: 'Swiggy',
    city: 'Hyderabad',
    zone: 'Madhapur',
    weeklyIncome: 7000
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculatePremium({
      ...formData,
      weeklyIncome: Number(formData.weeklyIncome)
    });
    navigate('/worker/safety-net');
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-icons text-white text-xl">shield</span>
            </div>
            <span className="font-bold text-lg tracking-tight">GigShield<span className="text-primary">AI</span></span>
          </Link>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
            <span className="material-icons">account_circle</span>
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Worker Onboarding</div>
          <h2 className="text-3xl font-bold mt-2">Complete Rider Profile</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3">Generate an AI-based weekly premium using city exposure, work zone, and earnings pattern.</p>
        </div>

        <form onSubmit={handleCalculate} className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-primary/10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Full Name</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary/50" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Mobile Number</label>
              <input name="mobile" type="text" value={formData.mobile} onChange={handleChange} className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary/50" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Delivery Platform</label>
              <select name="platform" value={formData.platform} onChange={handleChange} className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary/50">
                <option>Swiggy</option>
                <option>Zomato</option>
                <option>Zepto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">City</label>
              <select name="city" value={formData.city} onChange={handleChange} className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary/50">
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Working Zone</label>
              <select name="zone" value={formData.zone} onChange={handleChange} className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary/50">
                <option>Madhapur</option>
                <option>Gachibowli</option>
                <option>Hitech City</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Weekly Income (₹)</label>
              <input name="weeklyIncome" type="number" value={formData.weeklyIncome} onChange={handleChange} className="w-full rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary/50" required />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/">
              <button type="button" className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                Back
              </button>
            </Link>
            <button type="submit" className="bg-gradient-to-r from-[#ff9157] to-[#ff7520] px-8 py-3 rounded-full text-black font-bold hover:scale-105 transition">
              Calculate Weekly Premium
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Onboarding;
