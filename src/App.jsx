import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppStateProvider } from './context/AppStateContext';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import SafetyNet from './pages/SafetyNet';
import PolicyMarketplace from './pages/PolicyMarketplace';
import WorkerDashboard from './pages/WorkerDashboard';
import ClaimsPayouts from './pages/ClaimsPayouts';

import AdminDashboard from './pages/AdminDashboard';
import ClaimsAudit from './pages/ClaimsAudit';
import RiskAnalytics from './pages/RiskAnalytics';
import ProductLab from './pages/ProductLab';

function App() {
  return (
    <AppStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/worker/onboarding" element={<Onboarding />} />
          <Route path="/worker/safety-net" element={<SafetyNet />} />
          <Route path="/worker/policy" element={<PolicyMarketplace />} />
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          <Route path="/worker/claims" element={<ClaimsPayouts />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/audit" element={<ClaimsAudit />} />
          <Route path="/admin/risk" element={<RiskAnalytics />} />
          <Route path="/provider/lab" element={<ProductLab />} />
          
        </Routes>
      </Router>
    </AppStateProvider>
  );
}

export default App;
