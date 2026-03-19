import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ClaimsPayouts = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex justify-center">
      <div className="relative flex h-auto min-h-screen w-full max-w-md flex-col overflow-x-hidden border-x border-slate-200 dark:border-slate-800 shadow-xl bg-background-light dark:bg-background-dark">
        {/* Header */}
        <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
          <div 
            onClick={() => navigate(-1)}
            className="text-slate-900 dark:text-slate-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Claims & Payouts</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 justify-between">
            <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-[13px] pt-4 flex-1">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Live Claims</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 flex-1">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Payout History</p>
            </button>
          </div>
        </div>

        {/* Main Content Scroll Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Summary Card */}
          <div className="p-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl flex items-center gap-4">
              <div className="bg-primary text-white p-3 rounded-full shrink-0">
                <span className="material-symbols-fill text-3xl">account_balance_wallet</span>
              </div>
              <div>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">Total Protected This Month</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">$428.50</p>
              </div>
            </div>
          </div>

          {/* Active Section */}
          <div className="px-4 py-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">Active Automated Claims</h3>
              <span className="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">2 Live</span>
            </div>

            {/* Claim Card 1 */}
            <div className="mb-4 @container">
              <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover" 
                  aria-label="Uber driver car dashboard in traffic" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATCXgI_8nlY62iEwXkn-D26b03O7Ge5Vp61DuyXbRdIB6Jh9WyhjFW2__gK0tOAmQUeJhnfBARYCgvUlr26o6jKKKwC5_lRPy4o2BCr-uyIYHtSj4dhybALcbld3Ni9-AFWJqhR9ABeylW3eF2Rsdgn7cfEYf2kz7VyGkHgBHb37Da0OWhbxmqBwdJaxa6vW-Oxr7MOPJY_ph_qDkobRwSHIrokV_eWx_aycjRduR7jYY29xm_xJLMWzWI2pkOPtAPsP0b_XkSJmQ")'}}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider">Verifying Disruption</p>
                    <span className="text-slate-400 dark:text-slate-500 text-xs italic">Updated 2m ago</span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">GigShield AI detected a 45m outage</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">ID: #GS-8821 • Platform: Uber</p>
                  
                  {/* Progress Tracker */}
                  <div className="mt-2 flex items-center gap-1">
                    <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-primary/30 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-primary/30 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-primary/30 rounded-full"></div>
                  </div>

                  <div className="flex items-center gap-3 justify-between mt-2">
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="text-xs font-medium">Est. Payout: $24.00</span>
                    </div>
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 px-4 bg-primary text-white text-sm font-bold shadow-md hover:opacity-90 transition-opacity">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Card 2 */}
            <div className="mb-4 @container">
              <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">Payout Initiated</p>
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Income Gap Protection: Jan 12</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">ID: #GS-8790 • Platform: DoorDash</p>
                  
                  <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Payout Amount</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$85.20</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Arriving by</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Today, 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manual Report Section */}
          <div className="p-4 mt-2">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-5 border border-dashed border-slate-300 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-primary">edit_document</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Missed a disruption?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">If AI didn't catch an issue, report it manually.</p>
                </div>
              </div>
              <button className="w-full h-11 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">add_circle</span>
                File Manual Claim
              </button>
            </div>
          </div>

          <div className="h-20"></div> {/* Spacer for Nav */}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 w-full max-w-md bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-2 pb-6 pt-2 flex justify-around items-end z-20">
          <Link to="/worker/dashboard" className="flex flex-1 flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">home</span>
            <p className="text-[10px] font-medium">Home</p>
          </Link>
          <Link to="/worker/claims" className="flex flex-1 flex-col items-center gap-1 text-primary">
            <span className="material-symbols-fill">receipt_long</span>
            <p className="text-[10px] font-bold">Claims</p>
          </Link>
          <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">trending_up</span>
            <p className="text-[10px] font-medium">Earnings</p>
          </button>
          <Link to="/worker/onboarding" className="flex flex-1 flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-medium">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClaimsPayouts;
