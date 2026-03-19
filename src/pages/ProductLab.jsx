import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductLab = () => {
  const [activeTab, setActiveTab] = useState('configuration');

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-slate-900 sticky top-0 z-50">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">biotech</span>
                <h2 className="text-slate-900 dark:text-white text-lg font-black leading-tight tracking-[-0.015em]">Product Lab</h2>
              </div>
              <div className="hidden md:flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-500 gap-2 border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Sandbox Environment
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/admin/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors">Dashboard</Link>
                <Link to="/provider/lab" className="text-primary text-sm font-bold border-b-2 border-primary py-1">Lab</Link>
                <Link to="/admin/risk" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors">Risk Models</Link>
                <Link to="/admin/audit" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors">Compliance</Link>
              </nav>
              <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">help</span>
                </button>
                <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">account_circle</span>
                </button>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col p-6 max-w-[1440px] mx-auto w-full gap-6">
            {/* Header Area */}
            <div className="flex flex-wrap justify-between items-end gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">build</span> Policy Creator
                </div>
                <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Parametric Weather Coverage</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl font-medium">Configure trigger thresholds, premium multipliers, and payout rules for gig workers exposed to extreme weather conditions.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-lg">save</span> Save Draft
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:brightness-110 transition-all shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined text-lg">rocket_launch</span> Deploy Product
                </button>
              </div>
            </div>

            {/* Main Interactive Workspace */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Configuration Forms (Takes up 7 cols on XL) */}
              <div className="xl:col-span-7 flex flex-col gap-6">
                
                {/* Tabs */}
                <div className="flex p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 w-fit">
                  <button 
                    onClick={() => setActiveTab('configuration')}
                    className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'configuration' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    1. Configuration
                  </button>
                  <button 
                    onClick={() => setActiveTab('triggers')}
                    className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'triggers' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    2. Data Triggers
                  </button>
                  <button 
                    onClick={() => setActiveTab('pricing')}
                    className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'pricing' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    3. Pricing & Risk
                  </button>
                </div>

                {/* Configuration Panel */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
                  
                  {/* Section 1: Basic Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">info</span> Product Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Product Name</span>
                        <input className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all" defaultValue="Parametric Weather Coverage" />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Category</span>
                        <select className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-sm appearance-none cursor-pointer">
                          <option>Environmental Disturbance</option>
                          <option>Earnings Protection</option>
                          <option>Equipment Damage</option>
                        </select>
                      </label>
                      <label className="flex flex-col gap-1.5 md:col-span-2">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Description (Worker Facing)</span>
                        <textarea className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-sm resize-none h-24" defaultValue="Automatic payout if extreme weather (heavy rain, severe heat) forces you to stop working in your active gig zone."></textarea>
                      </label>
                    </div>
                  </div>

                  {/* Section 2: Trigger Rules */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">api</span> Parameter Triggers
                      </h3>
                      <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">add</span> Add Oracle
                      </button>
                    </div>
                    
                    {/* Trigger Card 1 */}
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                            <span className="material-symbols-outlined">water_drop</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold">Rainfall Threshold</p>
                            <p className="text-xs text-slate-500 font-mono">Oracle: AccuWeather API</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <label className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-slate-600">Metric</span>
                          <select className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                            <option>Precipitation Rate</option>
                            <option>Total Accumulation</option>
                          </select>
                        </label>
                        <label className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-slate-600">Operator</span>
                          <select className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                            <option>Greater than ({'>'})</option>
                            <option>Less than ({'<'})</option>
                          </select>
                        </label>
                        <label className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-slate-600">Value</span>
                          <input type="number" className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" defaultValue="15" />
                        </label>
                        <label className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-slate-600">Unit</span>
                          <select className="px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                            <option>mm/hour</option>
                            <option>inches</option>
                          </select>
                        </label>
                      </div>
                    </div>

                    {/* Trigger Card 2 */}
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/40 text-orange-600 flex items-center justify-center">
                            <span className="material-symbols-outlined">device_thermostat</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold">Heat Index Threshold</p>
                            <p className="text-xs text-slate-500 font-mono">Oracle: NOAA Feed</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center gap-4 w-full">
                        <span className="text-xs font-bold w-12 text-right">30°C</span>
                        <input type="range" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary" min="30" max="50" defaultValue="40" />
                        <span className="text-xs font-bold w-12 text-primary text-xl">40°C</span>
                        <span className="text-xs font-bold w-12">50°C</span>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Business Rules & Payout */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">payments</span> Payout Structure
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-xl border-2 border-primary/20 bg-primary/5 space-y-3 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-primary/10">
                          <span className="material-symbols-outlined text-7xl font-bold">bolt</span>
                        </div>
                        <h4 className="text-sm font-bold text-primary">Micro-Premium Pricing</h4>
                        <div className="flex items-end gap-2">
                          <span className="text-3xl font-black text-slate-900 dark:text-white">$0.45</span>
                          <span className="text-xs font-bold text-slate-500 mb-1">/ hour covered</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Dynamically adjusts based on real-time risk simulation score (±20%).</p>
                      </div>
                      
                      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-3">
                        <h4 className="text-sm font-bold">Payout Calculation</h4>
                        <div className="flex items-end gap-2">
                          <span className="text-3xl font-black text-slate-900 dark:text-white">$15.00</span>
                          <span className="text-xs font-bold text-slate-500 mb-1">/ hour verified loss</span>
                        </div>
                        <p className="text-[10px] text-slate-400 italic mt-2">*Requires location verification within active weather alert polygon.*</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulation & Verification (Takes up 5 cols on XL) */}
              <div className="xl:col-span-5 flex flex-col gap-6 sticky top-24">
                
                {/* Simulation Engine Widget */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col gap-6 h-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary shadow-glow">science</span> Simulation Engine
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">Run hypothetical trigger scenarios against historical data to project profitability.</p>
                      </div>
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono tracking-wider">v2.4 Core</span>
                    </div>

                    <div className="flex gap-2">
                      <select className="flex-1 bg-white/10 border-none rounded-lg text-xs font-medium focus:ring-1 focus:ring-primary text-white">
                        <option>Location: Seattle, WA</option>
                        <option>Location: Miami, FL</option>
                        <option>Location: Austin, TX</option>
                      </select>
                      <select className="flex-1 bg-white/10 border-none rounded-lg text-xs font-medium focus:ring-1 focus:ring-primary text-white">
                        <option>Season: Q4 (Winter)</option>
                        <option>Season: Q3 (Hurricane)</option>
                      </select>
                    </div>

                    <button className="w-full py-3 bg-primary hover:bg-white hover:text-primary border-2 border-primary text-sm font-black tracking-wide uppercase rounded-xl transition-all flex items-center justify-center gap-2 group">
                      Run 10,000 Iteration Monte Carlo <span className="material-symbols-outlined text-lg group-hover:animate-spin">sync</span>
                    </button>

                    <div className="mt-4 border-t border-white/10 pt-6 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Simulation Results</h4>
                      
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-slate-300">Projected Loss Ratio</span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-emerald-400">62.8%</span>
                          <span className="text-[10px] block text-slate-400">Optimal (Target &lt;70%)</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full w-[62%]"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                          <p className="text-xl font-bold">$1.2M</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Est. Premium</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                          <p className="text-xl font-bold text-rose-400">$753K</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Est. Payouts</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2 mt-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">insights</span>
                        <p className="text-[11px] text-blue-200 leading-tight">Lowering rainfall threshold to 12mm/hr increases loss ratio to 78%. Recommended to keep at 15mm/hr for stable profitability.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit & Compliance Mini-Widget */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">gavel</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">Smart Contract Ready</h4>
                      <p className="text-[10px] text-slate-500">All rules compile to standard execution parameters.</p>
                    </div>
                  </div>
                  <span className="text-emerald-500 font-bold material-symbols-outlined">check_circle</span>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-500 font-medium">GigShield AI © 2024 • Actuarial Modeling Tool v1.2</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductLab;
