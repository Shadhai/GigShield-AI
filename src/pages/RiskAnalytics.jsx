import React from 'react';
import { Link } from 'react-router-dom';

const RiskAnalytics = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 lg:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl block">shield_with_house</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">GigShield AI</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/admin/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Dashboard</Link>
              <Link to="/provider/lab" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Portfolio</Link>
              <Link to="/admin/audit" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Claims</Link>
              <Link to="/admin/risk" className="text-primary text-sm font-semibold border-b-2 border-primary pb-1">Risk Models</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <div className="relative hidden sm:block w-full max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white placeholder:text-slate-500" placeholder="Search accounts or policies..." type="text" />
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="size-9 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" alt="User profile avatar of a professional administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8WJFNwPV3nL8lxWKOKSPSVEdVtFVru5wKS70q3DMOURVgpYEo-bBhojRvSjUch7Wp8oGCbC0enf5xhGMignL_fkkG53GF-J92jJmYNpNlLH1vQ3C-MkAYFNgbzJ8406ji5Bkn85EI1CwTiQmWc59QeE_ywwrFnvYJrePh6qW-wBrB2FSB5Imk6mqqjdaWD9zPGNIMHCe326876gfMkDdpiShHwiYrkJBd2PUzGLrqvWvWcMoSvRohCThP-lgMGHMZ3Z4UYG62SI4" />
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          {/* Dashboard Header */}
          <div className="px-6 lg:px-10 py-8 flex flex-wrap justify-between items-end gap-4 bg-white dark:bg-background-dark/50 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                <span className="material-symbols-outlined text-sm">monitoring</span> Analytics Suite
              </div>
              <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Portfolio Risk Analytics</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl">Real-time AI-driven risk assessment, financial exposure metrics, and profitability forecasting for insurance product owners.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-xl">download</span> Export Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition-all">
                <span className="material-symbols-outlined text-xl">add</span> Create Model
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-10 py-6">
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> 12.5%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Premiums</p>
              <p className="text-slate-900 dark:text-white text-2xl font-bold mt-1 tracking-tight">$4.28M</p>
              <p className="text-xs text-slate-400 mt-3 italic">Fiscal Year to Date</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span> 2.1%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Loss Ratio</p>
              <p className="text-slate-900 dark:text-white text-2xl font-bold mt-1 tracking-tight">62.4%</p>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> 5.2%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Policies</p>
              <p className="text-slate-900 dark:text-white text-2xl font-bold mt-1 tracking-tight">12,850</p>
              <p className="text-xs text-slate-400 mt-3 italic">+642 this month</p>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <span className="text-rose-500 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">warning</span> 4.2%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg Risk Score</p>
              <p className="text-slate-900 dark:text-white text-2xl font-bold mt-1 tracking-tight">42/100</p>
              <p className="text-xs text-slate-400 mt-3 italic">Higher volatility expected</p>
            </div>
          </div>

          {/* Main Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-10 pb-10">
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Monthly Payouts vs Premiums</h3>
                  <p className="text-slate-500 text-sm">Financial efficiency over the last 12 months</p>
                </div>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary">
                  <option>Last 12 Months</option>
                  <option>Last Quarter</option>
                </select>
              </div>

              {/* Visual Placeholder for Chart */}
              <div className="flex-1 min-h-[300px] flex items-end gap-3 px-2">
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-40 rounded-t-lg transition-all group-hover:bg-slate-300"></div>
                  <div className="bg-primary w-full h-24 rounded-t-lg transition-all group-hover:brightness-110"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">JAN</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-44 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-28 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">FEB</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-48 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-32 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">MAR</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-52 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-36 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">APR</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-40 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-24 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">MAY</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-56 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-44 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">JUN</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-64 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-48 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">JUL</span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                  <div className="bg-slate-200 dark:bg-slate-700 w-full h-60 rounded-t-lg transition-all"></div>
                  <div className="bg-primary w-full h-40 rounded-t-lg transition-all"></div>
                  <span className="text-[10px] text-center mt-2 font-medium text-slate-400">AUG</span>
                </div>
              </div>

              <div className="flex gap-6 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                  <span className="text-xs font-semibold text-slate-500">Premiums Collected</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-semibold text-slate-500">Claims Payout</span>
                </div>
              </div>
            </div>

            {/* Risk Score Distribution */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col">
              <div className="mb-6">
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">Risk Score Distribution</h3>
                <p className="text-slate-500 text-sm">AI-driven worker base segment analysis</p>
              </div>
              
              <div className="space-y-6 flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Low Risk (0-20)</span>
                    <span className="font-bold">4,210 workers</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[33%]"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Moderate Risk (21-50)</span>
                    <span className="font-bold">6,120 workers</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[48%]"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Elevated Risk (51-75)</span>
                    <span className="font-bold">1,840 workers</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[14%]"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600 dark:text-slate-300">High Risk (76-100)</span>
                    <span className="font-bold">680 workers</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[5%]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">AI Insight</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                      High risk segments have increased by 0.4% this month due to urban gig expansion. Recommend premium adjustment for Sector-B.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Heatmap & Profitability */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:px-10 pb-10">
            {/* Heatmap */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Regional Exposure Heatmap</h3>
                  <p className="text-slate-500 text-sm">Geographic distribution of open liabilities</p>
                </div>
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <button className="px-3 py-1 text-xs font-bold bg-white dark:bg-slate-700 rounded shadow-sm">State</button>
                  <button className="px-3 py-1 text-xs font-bold text-slate-500">City</button>
                </div>
              </div>

              <div className="relative w-full aspect-video rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden group">
                <img className="w-full h-full object-cover opacity-60" alt="Dynamic heatmap showing insurance risk exposure across United States" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD93cixnvB_5I9m4Kzz9vNzBNVk2VfyeEU_wGxRw61GQmX5YrmFdL9NBGrkSei6AGJts8bfY4mXYG9Qq6vFQErX9V4WZYK1jz3GXtmXpU1m6lVdG6vagI_LHNtICi3FPLKExDk8LU5t-s27gPTCFTZ7f-QoQD8PalmQ2szsLxvAH_udUL8_PB52PNWGIoC5ne5hRwDyHoU2-yNhKNs9VnBcWab42DHrXUUFZLGC02jtysTVSJoI9UYOI9XV6sU_wO8TggREgMySTRk" />
                
                {/* Decorative Heatmap Overlays */}
                <div className="absolute top-1/4 left-1/3 size-16 bg-rose-500/40 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 size-24 bg-rose-600/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/4 size-12 bg-orange-500/40 rounded-full blur-lg"></div>

                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Current Hotspot</p>
                  <p className="text-sm font-bold">New York Tri-State</p>
                  <p className="text-xs text-rose-500 font-semibold">$1.2M Exposure</p>
                </div>
              </div>
            </div>

            {/* Profitability Report Table */}
            <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Profitability Reports</h3>
                  <p className="text-slate-500 text-sm">Sector-wise performance breakdown</p>
                </div>
                <button className="text-primary text-sm font-bold hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Sector</th>
                      <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Gross Profit</th>
                      <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Growth</th>
                      <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">electric_car</span>
                          </div>
                          <span className="text-sm font-semibold">Ride-share</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-bold">$1,240,500</td>
                      <td className="py-4 text-sm text-emerald-500 font-bold">+14.2%</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase">High Performance</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">delivery_dining</span>
                          </div>
                          <span className="text-sm font-semibold">Food Delivery</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-bold">$842,000</td>
                      <td className="py-4 text-sm text-emerald-500 font-bold">+8.7%</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase">Stable</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">handyman</span>
                          </div>
                          <span className="text-sm font-semibold">Home Services</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-bold">$310,200</td>
                      <td className="py-4 text-sm text-rose-500 font-bold">-4.3%</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-[10px] font-bold rounded-full uppercase">At Risk</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">architecture</span>
                          </div>
                          <span className="text-sm font-semibold">Freelance Creative</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-bold">$156,000</td>
                      <td className="py-4 text-sm text-emerald-500 font-bold">+2.1%</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase">Stable</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-10 py-8 mt-12 auto-mt">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined">shield</span>
              <span className="text-sm font-bold">GigShield AI © 2024</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a className="hover:text-primary" href="#">Policy Engine v2.4.1</a>
              <a className="hover:text-primary" href="#">Compliance</a>
              <a className="hover:text-primary" href="#">API Status</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RiskAnalytics;
