import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-landing selection:text-on-primary">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl no-border bg-gradient-to-b from-black/80 to-transparent shadow-none">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="text-2xl font-bold tracking-tighter text-orange-500 italic font-['Space_Grotesk']">
            GigShield AI
          </div>
          <div className="hidden md:flex gap-8 font-['Space_Grotesk'] tracking-tight">
            <Link className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1" to="/worker/safety-net">Safety Net</Link>
            <Link className="text-gray-400 hover:text-white transition-colors transition-all duration-300" to="/admin/dashboard">Control Tower</Link>
            <a className="text-gray-400 hover:text-white transition-colors transition-all duration-300" href="#">Real-time Tech</a>
            <a className="text-gray-400 hover:text-white transition-colors transition-all duration-300" href="#">Partners</a>
          </div>
          <div className="flex items-center gap-4">
            <Link className="hidden md:block text-white font-medium hover:text-orange-400 transition-all" to="/worker/onboarding">Login</Link>
            <Link to="/worker/onboarding">
              <button className="primary-gradient text-on-primary-container px-6 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-transform">
                Get Protected
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-6 lg:px-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
            <img className="w-full h-full object-cover opacity-40 grayscale" alt="Futuristic city map with glowing data nodes and shield overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVirMB55bxRMjMzqKEGr45d3O1dGn4h4SlGKIb8volITkpxwkRMtmSNtIY9h-I4uCAozIZ1zSY0dTpnSbPA7DC2KCpHiJfRTaUJgGfVH0AoqnjWoDgOvs_Y5_rYyHmS0vegFic_690LliL6IUvscT1tArmRb1zKCNgeOvIOSm6JFUaeRYpFpDNYXQHOt_MpSOfF7JfNEzkmrxzo70VMIFl6Ozeb3Dc7a0eUU1Xc4hqS-d9ZhIIGCTJU5riFqePi0TcJFtKKEIpJJ8" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-landing/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary pulse-glow"></span>
              <span className="text-xs font-label uppercase tracking-widest text-secondary-fixed">Live Protection Active</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Protecting Every <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-landing to-primary-fixed">Shift with AI.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
              The world’s first kinetic insurance layer for the gig economy. Automated parametric payouts triggered by weather, outages, and volatility.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/worker/onboarding">
                <button className="primary-gradient px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
                  Explore the Shield <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <div className="flex -space-x-3 items-center">
                <img className="w-10 h-10 rounded-full border-2 border-black" alt="User avatar profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF34MGMK1L3-O3-15hGenmZeTxxmYh_FKhHMIlyU1mqGPvfMAvKtcdRUUbgspTUUrGTJPs0H9mYTLmS4KRXelu788weWEPs7sBZ_5N1aAffV2u-L-yy8b7EPDmDsxK5wAY8rSAWJLdGBUUWhauvozedjRe-WJrxFnbBLy-Z2_3JlRa1Pxy0QRtevcHAprNVCfB7bc2ha14oq3RUvpd25hUzN9vmKNINVvprB_PNd3LCPrIz9OpVZOYhpyMF4CsuzkdyFgN9k6-OEY" />
                <img className="w-10 h-10 rounded-full border-2 border-black" alt="User avatar profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxpYFLXqAC9oOursRrHdj6hPsmkI7aEl1pPhVcM23rnJculCBSPcw8EFkLyFXW2yedwprJ6KYnl_xw-XLRgoX3LzXOT3ugEIzs4Ul-hr6wLzIhsk3pPWc9SVdCqgyTVYk1kbPqZwFUUxIQTEM3swtJWhMD-VaLshRK_3KkanbhbliAkpF6qzuzRfCbdsXW9NT6Gz12_dwOnhaaakCRPVbibEaKaFVd51W94i-4Ehwq3NDfgRjFypYogy7pP8OLBjMg3Mikq7iisjw" />
                <img className="w-10 h-10 rounded-full border-2 border-black" alt="User avatar profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNYCj9bZroIvIL_LHIUFzuzQrmawnH32fgmTRNp2mg_CIGLwKsmUUahkcFlkegASS12TOx37_T_Y7689RiJ9LgXv5Gga1VUwaFTV6MoBM0v8jVka7YMRtNVHSvmF24RFJ7rn-b4mW68sDmRWF2A18GNkKRGz195Q_r6111Mor3O6YRHVgMy73MVU0Mp9UzG5eJZJ1ClepBsOnlAKuc97cDqj58K6kk0D1ndWW82yXqoeR2YFHD9Vt4A5Mxy33o7St3ASP4aEl2IpA" />
                <span className="pl-6 text-sm text-on-surface-variant font-label">+12k Protected Workers</span>
              </div>
            </div>
          </div>
        </section>
        {/* The Problem */}
        <section className="py-24 px-6 lg:px-20 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-primary-landing font-label tracking-widest uppercase text-xs">The Vulnerability</span>
              <h2 className="font-headline text-4xl font-bold mt-2">The Income Gap</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-xl border-l-4 border-error">
                  <h3 className="font-headline text-xl font-bold mb-3 text-error flex items-center gap-2">
                    <span className="material-symbols-outlined">thunderstorm</span> External Volatility
                  </h3>
                  <p className="text-on-surface-variant">Heatwaves, floods, and server outages don't just stop shifts—they stop livelihoods. Current platforms offer zero protection for downtime.</p>
                </div>
                <div className="glass-card p-8 rounded-xl border-l-4 border-outline-variant">
                  <h3 className="font-headline text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined">account_balance_wallet</span> Fragmented Income
                  </h3>
                  <p className="text-on-surface-variant">Gig workers face a 30% unpredictable variance in weekly earnings, creating a cycle of financial stress and debt.</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-landing/20 to-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-surface-container-high rounded-xl p-1 overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <span className="font-label text-xs uppercase text-zinc-500">Protection Comparison</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-end gap-4 h-48">
                      <div className="w-1/2 bg-zinc-800 rounded-t-lg relative">
                        <div className="absolute bottom-0 w-full h-[40%] bg-error/40 rounded-t-lg"></div>
                        <span className="absolute -top-8 left-0 text-[10px] font-label text-zinc-500 uppercase">Legacy System</span>
                      </div>
                      <div className="w-1/2 bg-zinc-800 rounded-t-lg relative overflow-hidden">
                        <div className="absolute bottom-0 w-full h-[95%] bg-gradient-to-t from-secondary/40 to-secondary/10 rounded-t-lg"></div>
                        <div className="absolute top-1/4 left-0 w-full h-px bg-secondary shadow-[0_0_10px_#3fff8b]"></div>
                        <span className="absolute -top-8 left-0 text-[10px] font-label text-secondary uppercase">GigShield AI</span>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-sm font-body italic text-secondary">"Safety Net" coverage eliminates 98% of income volatility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* The Solution (The Safety Net) */}
        <section className="py-24 px-6 lg:px-20 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto asymmetric-grid gap-20 items-center">
            <div>
              <span className="text-secondary font-label tracking-widest uppercase text-xs">The Safety Net</span>
              <h2 className="font-headline text-5xl font-bold mt-2 mb-8">Zero-Touch Claims. <br/>Instant Liquidity.</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary-landing/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-landing">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">Parametric Triggers</h4>
                    <p className="text-on-surface-variant leading-relaxed">No paperwork. No adjusters. When the temperature hits 42°C or the app goes down, your payout is automatically initiated.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">linear_scale</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">Interactive Coverage Slider</h4>
                    <p className="text-on-surface-variant leading-relaxed">Take control of your risk. Adjust your protection levels in real-time based on your shift schedule and financial needs.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary">notifications_active</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">Real-time Risk Alerts</h4>
                    <p className="text-on-surface-variant leading-relaxed">Get notified 2 hours before a major weather event or outage, allowing you to optimize your routes and earning strategy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-[280px] h-[580px] bg-zinc-950 rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden">
                <div className="absolute top-0 w-full h-8 bg-zinc-900 flex justify-center items-end pb-1">
                  <div className="w-16 h-4 bg-black rounded-full"></div>
                </div>
                <div className="p-6 pt-12">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-[10px] font-label text-zinc-500 uppercase">Current Status</div>
                    <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <h5 className="font-headline text-lg font-bold mb-4">Your Coverage</h5>
                  <div className="bg-surface-container-highest rounded-xl p-4 mb-6 border border-white/5">
                    <div className="text-[10px] text-zinc-500 mb-1">Potential Payout</div>
                    <div className="text-2xl font-bold text-primary-landing">$142.50</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-label text-zinc-500 uppercase">Coverage Adjuster</div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-landing rounded-full"></div>
                      <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-label">
                      <span>Basic</span>
                      <span className="text-primary-landing font-bold">Premium+</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="text-[10px] font-label text-zinc-500 uppercase mb-4">Live Triggers</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-xs text-orange-400">device_thermostat</span>
                        <span className="text-[10px]">Heat Spike &gt; 40°C</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg opacity-50">
                        <span className="material-symbols-outlined text-xs">cloud_sync</span>
                        <span className="text-[10px]">App Outage Monitor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-landing/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
        {/* The Control Tower */}
        <section className="py-24 px-6 lg:px-20 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-tertiary font-label tracking-widest uppercase text-xs">Provider Intelligence</span>
              <h2 className="font-headline text-5xl font-bold mt-2">The Control Tower</h2>
              <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">Full-spectrum visibility into fleet risk, fraud prevention, and predictive payout modeling.</p>
            </div>
            <div className="relative glass-card rounded-2xl border border-white/5 p-4 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-4 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 flex gap-6">
                  <div className="text-[10px] font-label uppercase text-zinc-500">Fleet Health: <span className="text-secondary">98.2%</span></div>
                  <div className="text-[10px] font-label uppercase text-zinc-500">Fraud Score: <span className="text-primary-landing">0.03%</span></div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8 bg-zinc-950 rounded-xl min-h-[400px] relative overflow-hidden">
                  {/* Simulated Heatmap */}
                  <img className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Dark stylized map with orange and green heatmap clusters" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAflasR-5SoyeQsVdzs8NNnxn56MtSojCEWEVMpalS9mFqWCUfBF0GQwvkLlgGMTWJhxwLWlkAbvxRAp8i7gxL68X7OJytuHYmqw3OZqMlzv9Z8EPxIZABf1_57iGktvuC-GBke5O8Mz-ZGvYElFyIYy5Rf2GCdWlo6PdKV8NQiWaaK8_OprqbcaCSXpLe2bbJ0sCfruy_UQOAJULkd0r9bqL6zZHPoOfM4s-_DtMhR3UeUfyKwHtM4trOASmW6jKQ2lDwdYjrBM5s" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute top-4 left-4 glass-card p-3 rounded-lg border border-white/10">
                    <div className="text-[10px] font-label text-zinc-500 uppercase mb-2">Active Risk Zones</div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-landing animate-pulse"></div>
                        <span className="text-xs">Downtown Grid (High Heat)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-xs">Suburban Ring (Optimal)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4 space-y-4">
                  <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                    <h4 className="font-headline text-sm font-bold mb-4 uppercase tracking-wider text-zinc-400">Fraud Detection Scoring</h4>
                    <div className="flex items-end gap-2 mb-2">
                      <div className="text-3xl font-bold font-headline">0.021</div>
                      <div className="text-[10px] text-secondary pb-1 flex items-center"><span className="material-symbols-outlined text-[12px]">arrow_downward</span> 12%</div>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-1/12 h-full bg-secondary"></div>
                    </div>
                    <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed">AI analyzes kinetic patterns to distinguish real downtime from fraudulent claims instantly.</p>
                  </div>
                  <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                    <h4 className="font-headline text-sm font-bold mb-4 uppercase tracking-wider text-zinc-400">Predictive Analytics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-500">Estimated Payouts (24h)</span>
                        <span className="text-xs font-bold">$12,400</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-500">Risk Confidence</span>
                        <span className="text-xs font-bold text-secondary">99.4%</span>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <Link to="/admin/risk">
                          <button className="w-full py-2 bg-primary-landing/10 text-primary-landing text-xs font-bold rounded-lg border border-primary-landing/20 hover:bg-primary-landing/20 transition-all">
                            Generate Risk Report
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary-landing font-label tracking-widest uppercase text-xs">The Protocol</span>
              <h2 className="font-headline text-5xl font-bold mt-2">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-landing/30 to-transparent"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-8 bg-surface-container-high rounded-2xl flex items-center justify-center border border-white/5 relative z-10">
                  <span className="material-symbols-outlined text-4xl text-primary-landing">analytics</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">Predictive Risk Model</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Our AI constantly scans meteorological data, platform health, and market volatility to pre-calculate risk corridors.</p>
              </div>
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-8 bg-surface-container-high rounded-2xl flex items-center justify-center border border-white/5 relative z-10 shadow-[0_0_30px_rgba(63,255,139,0.15)]">
                  <span className="material-symbols-outlined text-4xl text-secondary">sensors</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">Parametric Trigger</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Once a verified event (like a 45-minute server outage) crosses the threshold, the policy triggers automatically.</p>
              </div>
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-8 bg-surface-container-high rounded-2xl flex items-center justify-center border border-white/5 relative z-10">
                  <span className="material-symbols-outlined text-4xl text-tertiary">account_balance</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">Automated Payout</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Funds are dispersed instantly to the gig worker’s wallet. No claim forms. No waiting periods. Just liquidity.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Social Proof */}
        <section className="py-20 border-t border-white/5 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="text-center mb-10">
              <p className="text-[10px] font-label uppercase tracking-widest text-zinc-500">Trusted by Global Logistics Leaders</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="font-headline text-2xl font-bold tracking-tighter">UBER</div>
              <div className="font-headline text-2xl font-bold tracking-tighter">Swiggy</div>
              <div className="font-headline text-2xl font-bold tracking-tighter">Zomato</div>
              <div className="font-headline text-2xl font-bold tracking-tighter">DOORDASH</div>
              <div className="font-headline text-2xl font-bold tracking-tighter">GRAB</div>
            </div>
          </div>
        </section>
        {/* Trust & Security */}
        <section className="py-24 px-6 lg:px-20 bg-primary-landing/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-6">Fraud-Proof Architecture</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">We built GigShield AI on a bedrock of cryptographic verification and kinetic analysis. Every claim is validated against real-world telemetry, ensuring the pool remains solvent and secure for those who need it most.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="font-bold text-on-surface">Real-time Verification</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="font-bold text-on-surface">Immutable Claim Ledger</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="font-bold text-on-surface">End-to-End Encryption</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-high p-8 rounded-2xl border border-white/5">
                  <span className="material-symbols-outlined text-3xl text-primary-landing mb-4">shield_lock</span>
                  <div className="text-2xl font-bold mb-1 text-on-surface">AES-256</div>
                  <div className="text-[10px] font-label text-zinc-500 uppercase">Data Encryption</div>
                </div>
                <div className="bg-surface-container-high p-8 rounded-2xl border border-white/5 mt-8">
                  <span className="material-symbols-outlined text-3xl text-secondary mb-4">verified_user</span>
                  <div className="text-2xl font-bold mb-1 text-on-surface">99.9%</div>
                  <div className="text-[10px] font-label text-zinc-500 uppercase">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 border-t border-white/5 tonal-shift bg-zinc-950">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
          <div className="text-lg font-bold text-orange-500 font-['Inter'] uppercase tracking-widest">
            GigShield AI
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-['Inter'] text-xs uppercase tracking-widest">
            <a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="#">Privacy Protocol</a>
            <a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="#">Security Schema</a>
            <a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="#">API Docs</a>
            <a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="#">Status Pulse</a>
          </div>
          <div className="text-zinc-500 font-['Inter'] text-xs uppercase tracking-widest text-center md:text-right">
            © 2024 GigShield AI. Kinetic Observer Systems.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
