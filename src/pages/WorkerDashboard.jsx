import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';

const WorkerDashboard = () => {
  const { 
    workerProfile, 
    policyState, 
    claimState, 
    initiateClaim, 
    runTrustEngine, 
    runFraudCheck, 
    calculatePayout, 
    finishClaim 
  } = useAppState();

  const [simStep, setSimStep] = useState(0);

  const triggers = [
    { name: 'Heavy Rainfall', icon: 'rainy', details: 'IMD verified 25mm/hr in Madhapur', type: 'Weather' },
    { name: 'Heavy Floods', icon: 'flood', details: 'floods cause damage to roads', type: 'Weather' }
  ];

  const handleSimulate = (trigger) => {
    initiateClaim(trigger.name, trigger.details);
    setSimStep(1); // Trigger selected
  };

  const handleNextStep = () => {
    if (simStep === 1) {
      runTrustEngine();
      setSimStep(2);
    } else if (simStep === 2) {
      runFraudCheck();
      calculatePayout();
      setSimStep(3);
    } else if (simStep === 3) {
      finishClaim();
      setSimStep(4);
    } else {
      setSimStep(0);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col shadow-2xl overflow-x-hidden pb-24">
        
        <header className="flex items-center justify-between p-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-primary/10">
          <div className="flex items-center gap-3">
            <Link to="/" className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-white">shield_person</span>
            </Link>
            <div>
              <h1 className="text-lg font-bold leading-tight">GigShield AI</h1>
              <p className="text-xs text-slate-500">{workerProfile.name} • {workerProfile.platform}</p>
            </div>
          </div>
          <button className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </header>

        <div className="p-4 space-y-4">
          
          {/* Status Banner */}
          <div className={`p-4 rounded-xl shadow-sm text-center border ${policyState.isActive ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
            <div className="flex justify-center mb-2">
              <span className="material-symbols-outlined text-4xl">
                {policyState.isActive ? 'verified_user' : 'gpp_maybe'}
              </span>
            </div>
            <h2 className="text-lg font-bold">
              {policyState.isActive ? 'Protection Active' : 'No Active Policy'}
            </h2>
            <p className="text-xs">
              {policyState.isActive ? 'Monitoring live conditions securely.' : 'Please activate your policy.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm">
              <p className="text-slate-600 dark:text-slate-300 text-xs font-medium uppercase">Premium</p>
              <p className="text-2xl font-bold">₹{policyState.premium}/wk</p>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm">
              <p className="text-slate-600 dark:text-slate-300 text-xs font-medium uppercase">Earnings Protected</p>
              <p className="text-2xl font-bold text-emerald-500">₹{policyState.earningsProtected}</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined">memory</span> AI System Status
            </h3>
            <p className="text-sm font-medium mb-4">{claimState.statusText}</p>
            
            {simStep === 0 && policyState.isActive && (
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase text-slate-500">Simulate Disruption</p>
                <div className="grid grid-cols-2 gap-3">
                  {triggers.map(t => (
                    <button key={t.name} onClick={() => handleSimulate(t)} className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-center gap-2 hover:border-primary transition">
                      <span className="material-symbols-outlined text-2xl text-primary">{t.icon}</span>
                      <span className="text-xs font-bold text-center">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {simStep > 0 && simStep < 4 && (
              <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 space-y-4">
                {simStep >= 1 && (
                  <div className="text-sm border-l-4 border-primary pl-3 py-1">
                    <strong>Trigger Verified:</strong> {claimState.selectedTrigger} ({workerProfile.zone})
                  </div>
                )}
                {simStep >= 2 && (
                  <div className="text-sm border-l-4 border-emerald-500 pl-3 py-1">
                    <strong>Trust Engine:</strong> {claimState.trustDecision} ({claimState.trustScore})
                  </div>
                )}
                {simStep >= 3 && (
                  <div className="text-sm border-l-4 border-blue-500 pl-3 py-1">
                    <strong>Fraud Risk:</strong> {claimState.fraudStatus} ({claimState.fraudScore}) <br/>
                    <strong>Calculated Payout:</strong> ₹{claimState.payoutAmount}
                  </div>
                )}
                <button onClick={handleNextStep} className="w-full bg-primary text-white font-bold py-2 rounded-lg mt-4 shadow-md">
                  {simStep === 3 ? 'Finalize Payout' : 'Process Next Verification'}
                </button>
              </div>
            )}

            {simStep === 4 && (
              <button onClick={handleNextStep} className="w-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold py-2 rounded-lg mt-4">
                Reset Simulation
              </button>
            )}

          </div>

        </div>

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pb-4 pt-2 flex justify-between items-center z-20">
          <Link to="/worker/dashboard" className="flex flex-1 flex-col items-center gap-1 text-primary">
            <span className="material-symbols-fill">dashboard</span>
            <p className="text-[10px] font-semibold">Dashboard</p>
          </Link>
          <Link to="/worker/policy" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shield</span>
            <p className="text-[10px] font-semibold">Policies</p>
          </Link>
          <Link to="/admin/dashboard" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">admin_panel_settings</span>
            <p className="text-[10px] font-semibold">Admin Mode</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default WorkerDashboard;
