import React from 'react';
import { Link } from 'react-router-dom';

const PolicyMarketplace = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-slate-800 pb-20">
        
        {/* Header */}
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
          <Link to="/worker/dashboard" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined">menu</span>
          </Link>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">GigShield Marketplace</h1>
          <div className="flex w-10 items-center justify-end">
            <button className="relative flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">2</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          
          {/* Search & Filters */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                <div className="flex items-center justify-center pl-4 rounded-l-xl bg-white dark:bg-slate-800 text-slate-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-slate-800 focus:ring-0 h-full placeholder:text-slate-400 px-4 rounded-r-xl text-base" placeholder="Search protections..." />
              </div>
            </label>
          </div>
          
          <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 text-sm font-semibold">
              All
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">cloud</span> Weather
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">dns</span> Platform
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">health_and_safety</span> Health
            </button>
          </div>

          {/* Promotion Banner */}
          <div className="px-4 py-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-orange-600 p-6 text-white">
              <div className="relative z-10">
                <h3 className="text-lg font-bold">Daily Multi-Protection</h3>
                <p className="text-sm opacity-90 mt-1">Cover all risks for your shift today.</p>
                <button className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-bold text-primary shadow-lg hover:bg-slate-100 transition-colors">Activate Bundle $1.99</button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">shield_with_heart</span>
            </div>
          </div>

          {/* Policy List */}
          <div className="px-4 space-y-4 mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold tracking-tight">Active Risks Today</h2>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Live Alerts</span>
            </div>

            {/* Policy Card 1 */}
            <div className="group flex flex-col rounded-2xl bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <span className="material-symbols-outlined">rainy</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Rain Protection</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">85% chance of rain in your area</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">$0.45</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Per Shift</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Coverage</p>
                  <p className="text-sm font-semibold">Up to $25.00 loss pay</p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-md active:scale-95 transition-transform hover:opacity-90">
                  One-Tap Buy
                </button>
              </div>
            </div>

            {/* Policy Card 2 */}
            <div className="group flex flex-col rounded-2xl bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <span className="material-symbols-outlined">report_problem</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Platform Outage</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Uber/DoorDash unstable</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">$0.20</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Per Hour</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Coverage</p>
                  <p className="text-sm font-semibold">100% earnings match</p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-md active:scale-95 transition-transform hover:opacity-90">
                  One-Tap Buy
                </button>
              </div>
            </div>

            {/* Policy Card 3 */}
            <div className="group flex flex-col rounded-2xl bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <span className="material-symbols-outlined">thermostat</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Heat Wave Safety</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Temp &gt; 95°F predicted</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">$0.60</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Flat Fee</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Coverage</p>
                  <p className="text-sm font-semibold">Medical + Hydration</p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-md active:scale-95 transition-transform hover:opacity-90">
                  One-Tap Buy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto flex border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 pb-4 pt-2 z-20">
          <Link to="/worker/policy" className="flex flex-1 flex-col items-center justify-end gap-1 text-primary">
            <span className="material-symbols-fill">shopping_bag</span>
            <p className="text-[10px] font-bold leading-normal">Browse</p>
          </Link>
          <Link to="/worker/safety-net" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shield</span>
            <p className="text-[10px] font-medium leading-normal">My Policies</p>
          </Link>
          <Link to="/worker/claims" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">trending_up</span>
            <p className="text-[10px] font-medium leading-normal">Earnings</p>
          </Link>
          <Link to="/worker/onboarding" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-medium leading-normal">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolicyMarketplace;
