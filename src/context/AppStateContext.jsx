import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {
  // Worker Profile State
  const [workerProfile, setWorkerProfile] = useState({
    name: 'Ravi Kumar',
    mobile: '9876543210',
    platform: 'Swiggy',
    city: 'Hyderabad',
    zone: 'Madhapur',
    weeklyIncome: 7000
  });

  // Policy / Pricing State
  const [policyState, setPolicyState] = useState({
    isActive: false,
    riskScore: 0.72,
    premium: 50,
    policyId: 'GS-AI-2026-101',
    maxPayout: 1500,
    earningsProtected: 0
  });

  // Claim & Disruption Simulation State
  const [claimState, setClaimState] = useState({
    selectedTrigger: null,
    triggerDetail: null,
    statusText: 'No active claim. Coverage is running normally.',
    trustScore: null,
    trustDecision: null,
    fraudScore: null,
    fraudStatus: null,
    payoutAmount: 0,
    isClaimFinished: false
  });

  // Admin Dashboard State
  const [adminState, setAdminState] = useState({
    activePolicies: 120,
    claimsToday: 35,
    fraudAlerts: 2,
    totalPayouts: 14850,
    logs: [
      { time: '08:42 AM', type: 'primary', message: 'Heavy rain trigger activated in Madhapur' },
      { time: '08:43 AM', type: 'secondary', message: 'Claim Trust Engine score: 0.89' },
      { time: '08:44 AM', type: 'tertiary', message: 'Fraud risk score: 0.12 (safe)' },
      { time: '08:45 AM', type: 'primary', message: 'Payout initiated: ₹420' }
    ]
  });

  // Actions
  const calculatePremium = (profile) => {
    let cityFactor = 1.0;
    if (profile.city === 'Hyderabad') cityFactor = 1.05;
    if (profile.city === 'Mumbai') cityFactor = 1.15;
    if (profile.city === 'Bangalore') cityFactor = 0.95;

    let incomeFactor = profile.weeklyIncome > 8000 ? 1.1 : 1.0;
    
    let riskScore = profile.city === 'Mumbai' ? 0.78 : profile.city === 'Bangalore' ? 0.65 : 0.72;
    let premium = Math.round(20 * cityFactor * incomeFactor * riskScore * 3);

    setWorkerProfile(profile);
    setPolicyState(prev => ({ ...prev, riskScore, premium }));
  };

  const activatePolicy = () => {
    setPolicyState(prev => ({ ...prev, isActive: true }));
    setAdminState(prev => ({ ...prev, activePolicies: prev.activePolicies + 1 }));
  };

  const initiateClaim = (triggerName, detail) => {
    setClaimState(prev => ({
      ...prev,
      selectedTrigger: triggerName,
      triggerDetail: detail,
      statusText: `${triggerName} detected in ${workerProfile.zone}. ${detail}. Claim auto-initiated.`
    }));
    
    // Add log
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addAdminLog('primary', `${timeStr} — ${triggerName} trigger activated in ${workerProfile.zone}`);
  };

  const runTrustEngine = () => {
    setClaimState(prev => ({
      ...prev,
      statusText: `${prev.selectedTrigger} detected. Claim initiated and sent for authenticity verification.`,
      trustScore: 0.89,
      trustDecision: 'High Confidence'
    }));
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addAdminLog('secondary', `${timeStr} — Claim Trust Engine score: 0.89 for ${workerProfile.name}`);
  };

  const runFraudCheck = () => {
    setClaimState(prev => ({
      ...prev,
      fraudScore: 0.12,
      fraudStatus: 'SAFE'
    }));
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addAdminLog('tertiary', `${timeStr} — Fraud risk score: 0.12 (safe) for ${workerProfile.name}`);
  };

  const calculatePayout = () => {
    const amount = claimState.selectedTrigger === 'Platform Outage' ? 350 : 420;
    setClaimState(prev => ({
      ...prev,
      payoutAmount: amount
    }));
  };

  const finishClaim = () => {
    setPolicyState(prev => ({
      ...prev,
      earningsProtected: prev.earningsProtected + claimState.payoutAmount
    }));
    setClaimState(prev => ({
      ...prev,
      statusText: `Latest claim approved for ${prev.selectedTrigger}. Payout credited: ₹${prev.payoutAmount}.`,
      isClaimFinished: true
    }));
    setAdminState(prev => ({
      ...prev,
      claimsToday: prev.claimsToday + 1,
      totalPayouts: prev.totalPayouts + claimState.payoutAmount
    }));
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addAdminLog('primary', `${timeStr} — Payout initiated: ₹${claimState.payoutAmount} to ${workerProfile.name}`);
  };

  const addAdminLog = (type, message) => {
    setAdminState(prev => ({
      ...prev,
      logs: [{ type, message }, ...prev.logs].slice(0, 10) // keep last 10
    }));
  };

  const resetState = () => {
    setPolicyState(prev => ({
      ...prev,
      isActive: false,
      earningsProtected: 0
    }));
    setClaimState({
      selectedTrigger: null,
      triggerDetail: null,
      statusText: 'No active claim. Coverage is running normally.',
      trustScore: null,
      trustDecision: null,
      fraudScore: null,
      fraudStatus: null,
      payoutAmount: 0,
      isClaimFinished: false
    });
  };

  return (
    <AppStateContext.Provider value={{
      workerProfile, setWorkerProfile,
      policyState, setPolicyState,
      claimState, setClaimState,
      adminState, setAdminState,
      calculatePremium, activatePolicy, initiateClaim, 
      runTrustEngine, runFraudCheck, calculatePayout, finishClaim, resetState
    }}>
      {children}
    </AppStateContext.Provider>
  );
};
