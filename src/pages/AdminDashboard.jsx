import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';

const AdminDashboard = () => {
  const { adminState } = useAppState();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-background-dark">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">analytics</span>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Provider Control Tower</h2>
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-4 items-center">
              <Link to="/worker/onboarding">
                <button className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                  <span className="material-symbols-outlined text-[16px]">switch_account</span> Switch to Worker
                </button>
              </Link>
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hidden lg:flex overflow-y-auto">
              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Main Menu</p>
                  <nav className="flex flex-col gap-1 mt-2">
                    <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary text-white">
                      <span className="material-symbols-outlined">dashboard</span>
                      <p className="text-sm font-semibold">Dashboard</p>
                    </Link>
                    <Link to="/admin/audit" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined">description</span>
                      <p className="text-sm font-medium">Claims Audit</p>
                    </Link>
                  </nav>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Intelligence</p>
                  <nav className="flex flex-col gap-1 mt-2">
                    <Link to="/admin/risk" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined">analytics</span>
                      <p className="text-sm font-medium">Risk Analytics</p>
                    </Link>
                    <Link to="/provider/lab" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined">science</span>
                      <p className="text-sm font-medium">Product Lab</p>
                    </Link>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col p-6 lg:px-10 gap-8 overflow-y-auto bg-background-light dark:bg-background-dark">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Operations Overview</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Real-time performance and system reliability monitoring.</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Active Policies</p>
                  <p className="text-black dark:text-white text-4xl font-black">{adminState.activePolicies}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Claims Today</p>
                  <p className="text-black dark:text-white text-4xl font-black">{adminState.claimsToday}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-red-500">
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Fraud Alerts</p>
                  <p className="text-red-500 dark:text-red-400 text-4xl font-black">{adminState.fraudAlerts}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Total Payouts</p>
                  <p className="text-emerald-600 dark:text-emerald-400 text-4xl font-black">₹{adminState.totalPayouts}</p>
                </div>
              </div>

              {/* Logs / Alerts Table */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-10">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live System Logs</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                      <tr>
                        <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Time</th>
                        <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Type</th>
                        <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {adminState.logs.map((log, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="px-6 py-3 whitespace-nowrap text-sm text-slate-500 font-medium">
                            {log.time ? log.time : new Date().toLocaleTimeString()}
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                              log.type === 'primary' ? 'bg-primary/20 text-primary' :
                              log.type === 'secondary' ? 'bg-emerald-500/20 text-emerald-600' :
                              'bg-amber-500/20 text-amber-600'
                            }`}>
                              {log.type === 'primary' ? 'Trigger' : log.type === 'secondary' ? 'Trust' : 'Fraud'}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-sm text-slate-700 dark:text-slate-300">
                            {log.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
