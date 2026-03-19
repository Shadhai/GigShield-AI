import React from 'react';
import { Link } from 'react-router-dom';

const ClaimsAudit = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">shield_with_heart</span>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">GigShield AI</h2>
              </div>
              <label className="flex flex-col min-w-64 h-10">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-xl">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-slate-400 px-4 pl-2 text-sm font-normal leading-normal" placeholder="Search claims, triggers, or entities..." defaultValue="" />
                </div>
              </label>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/admin/dashboard" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
                <Link to="/admin/audit" className="text-primary text-sm font-bold border-b-2 border-primary py-1">Claims Queue</Link>
                <span className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors cursor-pointer">Audit Logs</span>
                <span className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors cursor-pointer">Settings</span>
              </nav>
              <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">account_circle</span>
                </button>
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full size-10 border-2 border-primary bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA78tqvNJTqwJ_bsq-b3fHnMvZde83Zy5sU4WI1fjnA_8DNcMcrHsuaM00QAHIszEtLw8aD0D1iBhPr6bPEkXT6xidqdxMLMdiQKsEu6YZB826CbT713uiNepVok_oS9dgvaLhc67Ogn0GXGLiv3bwjZZYMAHCUFIkjOVRGNGKNT-0lEiE_bBR6I-x7KuPyEu8DkVBzj2-wcYUqeTRXQMhH6Wjxwc0vfeovonqrRhW9fOt_K-WS1xH3G_2-hPNAQzY5St742Kh1Z3Y")'}}></div>
            </div>
          </header>

          <main className="flex flex-1 flex-col p-6 max-w-[1440px] mx-auto w-full gap-6">
            {/* Dashboard Header */}
            <div className="flex flex-wrap justify-between items-end gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Claims Monitoring & Audit</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Reviewing high-priority insurance claims for Gig Economy Workers.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-lg">download</span>
                  <span>Export CSV</span>
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  <span>Bulk Action</span>
                </button>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">pending_actions</span>
                  <p className="text-sm font-medium">Pending Claims</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">1,284</p>
                <p className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>+12% vs last week
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl text-red-500">warning</span>
                  <p className="text-sm font-medium">High Risk Flags</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">42</p>
                <p className="text-red-600 dark:text-red-400 text-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>+8 new flags
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">timer</span>
                  <p className="text-sm font-medium">Avg. Review Time</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">1.4 hrs</p>
                <p className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_down</span>-15m improved
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">verified</span>
                  <p className="text-sm font-medium">Auto-Approval Rate</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">92.5%</p>
                <p className="text-slate-400 text-sm font-medium">Within SLA target</p>
              </div>
            </div>

            {/* Main Content: Queue and Detail Split */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Claims Queue Table */}
              <div className="xl:col-span-2 flex flex-col gap-4">
                {/* Filters */}
                <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold">All Claims</button>
                    <button className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">Pending</button>
                    <button className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      Fraud Check
                    </button>
                    <button className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">Approved</button>
                  </div>
                  <div className="flex items-center gap-2 pr-2">
                    <span className="material-symbols-outlined text-slate-400 cursor-pointer">filter_list</span>
                    <span className="material-symbols-outlined text-slate-400 cursor-pointer">sort</span>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider">
                          <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Claim ID</th>
                          <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Entity</th>
                          <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Trigger Data</th>
                          <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Risk Score</th>
                          <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Status</th>
                          <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group bg-red-50/50 dark:bg-red-900/10 border-l-4 border-l-red-500">
                          <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800">#GS-90214</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 dark:text-white">Alex Rivera</span>
                              <span className="text-xs text-slate-500">Delivery Partner</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Heavy Rainfall (42mm)</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full w-[88%]"></div>
                              </div>
                              <span className="text-xs font-bold text-red-600 dark:text-red-400">88</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                              Fraud Check
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right border-b border-slate-200 dark:border-slate-800">
                            <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group bg-white dark:bg-slate-900 border-l-4 border-l-transparent">
                          <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800">#GS-90215</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 dark:text-white">Jordan Smith</span>
                              <span className="text-xs text-slate-500">Ride Share</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Temp Drop (-5°C)</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[12%]"></div>
                              </div>
                              <span className="text-xs font-bold text-slate-500">12</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right border-b border-slate-200 dark:border-slate-800">
                            <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group bg-white dark:bg-slate-900 border-l-4 border-l-transparent">
                          <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800">#GS-90216</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 dark:text-white">Maya Wong</span>
                              <span className="text-xs text-slate-500">Courier Service</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Gale Winds (65km/h)</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-orange-500 h-full w-[45%]"></div>
                              </div>
                              <span className="text-xs font-bold text-orange-600">45</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right border-b border-slate-200 dark:border-slate-800">
                            <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group bg-red-50/50 dark:bg-red-900/10 border-l-4 border-l-red-500">
                          <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800">#GS-90217</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 dark:text-white">David Miller</span>
                              <span className="text-xs text-slate-500">Task Platform</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Excessive Heat (42°C)</td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full w-[94%]"></div>
                              </div>
                              <span className="text-xs font-bold text-red-600">94</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                              Fraud Check
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right border-b border-slate-200 dark:border-slate-800">
                            <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 flex justify-between items-center">
                    <span className="text-xs text-slate-500">Showing 4 of 1,284 results</span>
                    <div className="flex gap-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">1</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 text-xs">2</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail View (Selected Claim) */}
              <div className="xl:col-span-1 flex flex-col gap-6">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden flex flex-col h-full">
                  <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Claim Audit: #GS-90214</h3>
                      <span className="px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400">High Risk</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                        <img alt="Alex Rivera" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJBK4ETIXfBE9IO6ALkBnIE8tWqfSck_WWaDXv8qbdJtx0gpOXIADAM1wiqRV4HLmhiUmCYjx_yiJUGAq5k3CvZA2z1B3h5BNfJCnI8hhscmfR1AtlI--0SJAoPkebVnfrBiM0V4WKEYE7pws0JI-XQAZZv7di5lyA8YvBdK8ZpGKisnyjaXh3HvQf7y9CocLq4WAhHm6GU21QTfCpiAkHuF97SjjGxoWQBNVnFTBNurDEh-44ctuhrssfTqKuijWzaFmdfgDvFvM" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">Alex Rivera</span>
                        <span className="text-xs text-slate-500">Member since Feb 2023 • 98% Rating</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6 overflow-y-auto flex-1">
                    {/* Verification Section */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">analytics</span> TriggerEvent Data
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <p className="text-[10px] text-slate-500 font-bold uppercase">Recorded Intensity</p>
                          <p className="text-xl font-black text-primary">42.8 mm</p>
                          <p className="text-[10px] text-slate-400">Extreme Rainfall Threshold</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <p className="text-[10px] text-slate-500 font-bold uppercase">Event Window</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">14:00 - 18:00</p>
                          <p className="text-[10px] text-slate-400">Dec 12, 2023</p>
                        </div>
                      </div>
                    </div>

                    {/* Location Verification */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span> LocationLog Verification
                      </h4>
                      <div className="rounded-lg border border-slate-200 dark:border-slate-800 h-32 w-full relative overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-slate-400">map</span>
                        <div className="absolute top-2 right-2 px-2 py-1 rounded bg-green-500/90 text-white text-[10px] font-bold">MATCH FOUND</div>
                      </div>
                      <p className="text-xs text-slate-500 italic">User was verified within the 2km storm radius for 3.5 hours of the event window.</p>
                    </div>

                    {/* Fraud Flags */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-red-500">warning</span> Active FraudFlags
                      </h4>
                      <div className="p-3 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 space-y-1">
                        <div className="flex justify-between">
                          <p className="text-xs font-bold text-red-700 dark:text-red-400">Impossible Travel</p>
                          <span className="text-[10px] font-black text-red-600">SCORE: 92</span>
                        </div>
                        <p className="text-[10px] text-red-600/80">Claim filed 500km away from last verified app heartbeat location.</p>
                      </div>
                      <div className="p-3 rounded-lg border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/10 space-y-1">
                        <div className="flex justify-between">
                          <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Batch Submission</p>
                          <span className="text-[10px] font-black text-orange-600">SCORE: 65</span>
                        </div>
                        <p className="text-[10px] text-orange-600/80">3 identical claims submitted from the same device ID in 24hrs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <button className="w-full py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">check_circle</span> Quick Approve
                    </button>
                    <button className="w-full py-3 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">person_search</span> Send to Manual Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-500">© 2024 GigShield AI - Claims Auditing Engine v2.4.0</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClaimsAudit;
