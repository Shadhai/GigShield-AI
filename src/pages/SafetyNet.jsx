import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';

const SafetyNet = () => {
  const navigate = useNavigate();
  const { workerProfile, policyState, activatePolicy } = useAppState();

  const handleActivate = () => {
    activatePolicy();
    navigate('/worker/dashboard'); // Or policy activated page
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
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

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-primary/10 shadow-sm">
          <div className="mb-8">
            <div className="text-secondary uppercase tracking-[0.25em] text-xs font-semibold text-emerald-500">AI Pricing Engine</div>
            <h2 className="text-4xl font-bold mt-2">Risk & Weekly Premium</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3">Premium is generated from city risk, earnings volatility, and zone-level exposure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/50 rounded-3xl p-6">
              <div className="text-xs uppercase text-slate-500 mb-2 font-semibold">Rider</div>
              <div className="text-2xl font-bold">{workerProfile.name}</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/50 rounded-3xl p-6">
              <div className="text-xs uppercase text-slate-500 mb-2 font-semibold">Risk Score</div>
              <div className="text-3xl font-bold text-primary">{policyState.riskScore.toFixed(2)}</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/50 rounded-3xl p-6">
              <div className="text-xs uppercase text-slate-500 mb-2 font-semibold">Weekly Premium</div>
              <div className="text-3xl font-bold text-emerald-500">₹{policyState.premium}</div>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/50 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4">Coverage Summary</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium">7 Days Active</span>
              <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium">Income Loss Only</span>
              <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium">Auto Triggered Claims</span>
              <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium">Anti-Spoofing Verification</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/worker/onboarding">
              <button className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                Back
              </button>
            </Link>
            <button onClick={handleActivate} className="bg-gradient-to-r from-[#ff9157] to-[#ff7520] px-8 py-3 rounded-full text-black font-bold hover:scale-105 transition">
              Activate Policy
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SafetyNet;
