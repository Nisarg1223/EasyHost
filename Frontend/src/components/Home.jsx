import React, { useState } from 'react';
import './Home.scss';

// SVG Icon Helpers
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-4 w-4 fill-[#FCBA28] text-[#FCBA28]" aria-hidden="true">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5" aria-hidden="true">
    <path d="M4 5h16" />
    <path d="M4 12h16" />
    <path d="M4 19h16" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-6 w-6" aria-hidden="true">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const CircleAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert h-6 w-6 text-black" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const ChartColumnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-6 w-6 text-black" aria-hidden="true">
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const LayoutDashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard h-6 w-6 text-black" aria-hidden="true">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const WorkflowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow h-6 w-6 text-black" aria-hidden="true">
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </svg>
);

const MessageSquareMoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more h-6 w-6 text-black" aria-hidden="true">
    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
    <path d="M12 11h.01" />
    <path d="M16 11h.01" />
    <path d="M8 11h.01" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-6 w-6 text-black" aria-hidden="true">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const PlugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug h-6 w-6 text-black" aria-hidden="true">
    <path d="M12 22v-5" />
    <path d="M15 8V2" />
    <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
    <path d="M9 8V2" />
  </svg>
);

const GitBranchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch h-6 w-6 text-black" aria-hidden="true">
    <path d="M15 6a9 9 0 0 0-9 9V3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
  </svg>
);

const StarIcon = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4" aria-hidden="true">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const CheckIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check shrink-0" aria-hidden="true" style={{ color: color }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-6 w-6" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const CodeXmlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-6 w-6" aria-hidden="true">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6" aria-hidden="true">
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  </svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-black" aria-hidden="true">
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket text-black" aria-hidden="true">
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
  </svg>
);

const Home = ({ onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'yearly'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const selectBilling = (period) => {
    setBillingPeriod(period);
  };

  // Pricing calculations
  const getProPrice = () => (billingPeriod === 'monthly' ? '$19' : '$15');
  const getTeamPrice = () => (billingPeriod === 'monthly' ? '$48' : '$38');

  return (
    <div className="home-page">
      {/* HEADER NAVBAR */}
      <header className="w-full">
        <div className="header-container">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); onViewChange('home'); }}>
            <div className="logo-icon-bg">
              <ZapIcon />
            </div>
            <h6 className="logo-text font-head">DEVFORGE</h6>
          </a>

          <nav>
            <a href="#features" className="nav-link font-sans">Features</a>
            <a href="#developers" className="nav-link font-sans">Developers</a>
            <a href="#pricing" className="nav-link font-sans">Pricing</a>
            <a href="#docs" className="nav-link font-sans">Docs</a>
            <a href="#signin" className="nav-link border-link font-sans" onClick={(e) => { e.preventDefault(); onViewChange('login'); }}>Sign In</a>
            <a href="#get-started" className="nav-link button-link font-sans" onClick={(e) => { e.preventDefault(); onViewChange('signup'); }}>Get Started</a>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
        <a href="#developers" onClick={() => setIsMobileMenuOpen(false)}>Developers</a>
        <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
        <a href="#docs" onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
        <a href="#signin" className="highlight" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('login'); }}>Sign In</a>
        <a href="#get-started" className="highlight" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('signup'); }}>Get Started</a>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className="relative hero-section">
          {/* Floating tech logos */}
          <div className="tech-logo-wrapper tech-react animate-float" style={{ animationDelay: '-1.5s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/react.svg" alt="React" width="64" height="64" />
          </div>
          <div className="tech-logo-wrapper tech-nodejs animate-float" style={{ animationDelay: '-3s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/nodejs.svg" alt="Node.js" width="64" height="64" />
          </div>
          <div className="tech-logo-wrapper tech-python animate-float" style={{ animationDelay: '-4s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/python.svg" alt="Python" width="64" height="64" />
          </div>
          <div className="tech-logo-wrapper tech-docker animate-float" style={{ animationDelay: '-2s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/docker.svg" alt="Docker" width="64" height="64" />
          </div>
          <div className="tech-logo-wrapper tech-graphql animate-float" style={{ animationDelay: '-0.5s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/graphql.svg" alt="GraphQL" width="64" height="64" />
          </div>
          <div className="tech-logo-wrapper tech-next animate-float" style={{ animationDelay: '-2.5s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/next.svg" alt="Next.js" width="68" height="68" />
          </div>
          <div className="tech-logo-wrapper tech-typescript animate-float" style={{ animationDelay: '-3.5s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/laravel.svg" alt="Laravel / TypeScript" width="64" height="64" />
          </div>
          <div className="tech-logo-wrapper tech-rust animate-float" style={{ animationDelay: '-1s' }}>
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/hero/rust.svg" alt="Rust" width="74" height="74" />
          </div>

          <div className="hero-content">
            <div className="hero-text-block">
              <h1 className="font-head">
                BUILD DEBUG<br />DEPLOY <span className="text-secondary">FASTER</span>
              </h1>
              <p className="font-sans">
                The all-in-one developer platform for real-time debugging, performance monitoring, and seamless collaboration.
              </p>
            </div>

            <div className="hero-ctas">
              <button className="retro-btn" onClick={() => onViewChange('signup')}>
                <div className="retro-btn__wrapper">
                  <span className="retro-btn__layer retro-btn__layer--bottom"></span>
                  <span className="retro-btn__layer retro-btn__layer--middle"></span>
                  <span className="retro-btn__layer retro-btn__layer--top">
                    START BUILDING <ArrowRightIcon />
                  </span>
                </div>
              </button>
              <button className="flat-retro-btn">READ THE DOCS</button>
            </div>

            {/* Metrics grid */}
            <div className="metrics-container">
              <div className="metric-item">
                <h4>99.99%</h4>
                <p>UPTIME SLA</p>
              </div>
              <div className="metric-item">
                <h4>12MS</h4>
                <p>AVG LATENCY</p>
              </div>
              <div className="metric-item">
                <h4>40%</h4>
                <p>FASTER DEPLOYS</p>
              </div>
              <div className="metric-item">
                <h4>10K+</h4>
                <p>DEVELOPERS</p>
              </div>
            </div>

            {/* Interactive Showcase Mock Terminal */}
            <div className="showcase-outer">
              <div className="showcase-scale">
                <div className="terminal-mockup">
                  {/* Layer offsets for Neobrutalist shadow stack */}
                  <div className="bg-shadow-layer yellow-layer"></div>
                  <div className="bg-shadow-layer red-layer"></div>
                  <div className="bg-shadow-layer cyan-layer"></div>
                  <div className="bg-shadow-layer beige-layer"></div>

                  <div className="main-terminal-container">
                    <div className="terminal-header">
                      <div className="header-controls">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                      <div className="path-url">
                        <p>devforge.app/dashboard</p>
                      </div>
                    </div>

                    <div className="terminal-panels">
                      <div className="top-row">
                        {/* Panel 1: Terminal */}
                        <div className="panel" style={{ backgroundColor: '#1a1a1a' }}>
                          <div className="panel-title">
                            <span className="icon-indicator" style={{ backgroundColor: '#00ff88' }}></span>
                            Terminal
                          </div>
                          <div>
                            <p className="log-line" style={{ color: '#00ff88' }}>$ devforge deploy --production</p>
                            <p className="log-line" style={{ color: '#888888' }}>Compiling 847 modules...</p>
                            <p className="log-line" style={{ color: '#818cf8' }}>Bundling assets [=========&gt;] 100%</p>
                            <p className="log-line" style={{ color: '#00ff88' }}>Running health checks... passed</p>
                            <p className="log-line" style={{ color: '#00d4ff' }}>Deployed to edge in 2.4s</p>
                          </div>
                        </div>

                        <div className="panel-divider-y"></div>

                        {/* Panel 2: Performance Graph */}
                        <div className="panel" style={{ backgroundColor: '#1a1a1a' }}>
                          <div className="panel-title" style={{ justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8.95px' }}>
                              <span className="icon-indicator" style={{ backgroundColor: '#818cf8' }}></span>
                              Performance
                            </div>
                            <span style={{ color: '#00ff88', fontWeight: 'bold' }}>98.7%</span>
                          </div>
                          
                          <div className="chart-container">
                            <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 95">
                              <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="chartGradient" x1="0" x2="0" y1="0" y2="95">
                                  <stop stopColor="#818CF8" stopOpacity="0.3"></stop>
                                  <stop offset="1" stopColor="#818CF8" stopOpacity="0"></stop>
                                </linearGradient>
                              </defs>
                              <path d="M0 53.296C13.46 55.307 26.91 57.318 40.38 57.318C53.84 57.318 67.3 40.223 80.76 40.223C94.22 40.223 107.68 47.262 121.14 47.262C134.6 47.262 148.06 23.128 161.52 23.128C174.98 23.128 188.44 27.821 201.9 30.167C215.36 32.513 228.82 37.206 242.28 37.206C255.74 37.206 269.2 10.055 282.66 10.055C296.12 10.055 309.58 17.094 323.04 17.094C336.5 17.094 349.96 3.016 363.42 3.016C376.88 3.016 390.34 7.039 403.8 7.039C417.26 7.039 430.72 3.519 444 0V95H0Z" fill="url(#chartGradient)"></path>
                              <path d="M0 53.296C13.46 55.307 26.91 57.318 40.38 57.318C53.84 57.318 67.3 40.223 80.76 40.223C94.22 40.223 107.68 47.262 121.14 47.262C134.6 47.262 148.06 23.128 161.52 23.128C174.98 23.128 188.44 27.821 201.9 30.167C215.36 32.513 228.82 37.206 242.28 37.206C255.74 37.206 269.2 10.055 282.66 10.055C296.12 10.055 309.58 17.094 323.04 17.094C336.5 17.094 349.96 3.016 363.42 3.016C376.88 3.016 390.34 7.039 403.8 7.039C417.26 7.039 430.72 3.519 444 0" stroke="#818CF8" strokeWidth="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div style={{ height: '2px', backgroundColor: 'var(--foreground)' }}></div>

                      <div className="bottom-row">
                        {/* Panel 3: API Inspector */}
                        <div className="panel" style={{ backgroundColor: '#1a1a1a' }}>
                          <div className="panel-title" style={{ justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8.95px' }}>
                              <span className="icon-indicator" style={{ backgroundColor: '#c084fc' }}></span>
                              API Inspector
                            </div>
                            <span className="api-badge">200 OK</span>
                          </div>
                          <div>
                            <pre className="code-block">
                              {"{"}{"\n"}
                              {"  "}<span className="blue-key">"status"</span>: <span className="green-val">"deployed"</span>,{"\n"}
                              {"  "}<span className="blue-key">"latency"</span>: <span className="yellow-val">12</span>ms,{"\n"}
                              {"  "}<span className="blue-key">"region"</span>: <span className="green-val">"us-east-1"</span>{"\n"}
                              {"}"}
                            </pre>
                          </div>
                        </div>

                        <div className="panel-divider-y"></div>

                        {/* Panel 4: Error Feed */}
                        <div className="panel" style={{ backgroundColor: '#1a1a1a' }}>
                          <div className="panel-title">
                            <span className="icon-indicator" style={{ backgroundColor: '#ffd600' }}></span>
                            Error Feed
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                            <div className="error-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3333" strokeWidth="2.5" className="shrink-0" style={{ marginTop: '2px' }}>
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" x2="12" y1="8" y2="12" />
                                <line x1="12" x2="12.01" y1="16" y2="16" />
                              </svg>
                              <div className="error-info">
                                <p className="error-msg">TypeError: Cannot read 'id' of undefined</p>
                                <span className="error-time">2ms ago</span>
                              </div>
                            </div>
                            <div className="error-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2.5" className="shrink-0" style={{ marginTop: '2px' }}>
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                              </svg>
                              <div className="error-info">
                                <p className="error-msg">Deprecation: useEffect cleanup required</p>
                                <span className="error-time">14ms ago</span>
                              </div>
                            </div>
                            <div className="error-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2.5" className="shrink-0" style={{ marginTop: '2px' }}>
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <div className="error-info">
                                <p className="error-msg" style={{ color: '#00FF88' }}>All 247 tests passed successfully</p>
                                <span className="error-time">1.2s ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TRUSTED BY SECTION */}
        <section className="trusted-section">
          <p className="trusted-title">Trusted by engineering teams at</p>
          <div className="trusted-grid-border">
            <div className="trusted-grid">
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/Vercel.svg" alt="Vercel" />
              </div>
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/Stripe.svg" alt="Stripe" />
              </div>
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/Linear.svg" alt="Linear" />
              </div>
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/Fig.svg" alt="Fig" />
              </div>
            </div>
            <div style={{ borderTop: '2px solid var(--foreground)' }}></div>
            <div className="trusted-grid bottom-row">
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/Supabase.svg" alt="Supabase" />
              </div>
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/Loom.svg" alt="Loom" />
              </div>
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/appbot.svg" alt="Appbot" />
              </div>
              <div>
                <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/trust/ramp.svg" alt="Ramp" />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="features-section">
          <div className="section-header">
            <span className="badge cyan font-sans">Features</span>
            <h2 className="font-head">
              Everything you need to<br /><span className="highlight">ship with confidence</span>
            </h2>
            <p className="sub font-sans">A complete toolkit for modern dev teams who refuse to compromise.</p>
          </div>

          <div className="features-list-wrapper">
            {/* First features row */}
            <div className="features-row-grid-4">
              {/* Feature 1 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-red)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-red)' }}>
                    <CircleAlertIcon />
                  </div>
                  <h3 className="font-sans">REAL-TIME ERROR TRACKING</h3>
                  <p className="font-sans text-muted">Catch and diagnose errors the instant they occur with full stack traces and source maps.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-green)' }}>
                    <ChartColumnIcon />
                  </div>
                  <h3 className="font-sans">PERFORMANCE MONITORING</h3>
                  <p className="font-sans text-muted">Track Core Web Vitals, response times, and throughput with anomaly detection.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-purple)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-purple)' }}>
                    <LayoutDashboardIcon />
                  </div>
                  <h3 className="font-sans">API INSPECTOR</h3>
                  <p className="font-sans text-muted">Debug HTTP requests, inspect payloads, and replay failed calls with one click.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-blue)' }}>
                    <WorkflowIcon />
                  </div>
                  <h3 className="font-sans">CUSTOMIZABLE DASHBOARDS</h3>
                  <p className="font-sans text-muted">Run unit, integration, and E2E tests directly from your dashboard in parallel.</p>
                </div>
              </div>
            </div>

            {/* Second features row */}
            <div className="features-row-grid-wrap">
              {/* Feature 5 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-yellow)' }}>
                    <MessageSquareMoreIcon />
                  </div>
                  <h3 className="font-sans">LIVE COLLABORATION</h3>
                  <p className="font-sans text-muted">Debug together in real time. Share sessions, annotate issues, and pair program.</p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-yellow)' }}>
                    <ShieldCheckIcon />
                  </div>
                  <h3 className="font-sans">SECURE ENVIRONMENTS</h3>
                  <p className="font-sans text-muted">Isolated sandboxes with encrypted secrets, role-based access, and SOC 2 compliance.</p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-yellow)' }}>
                    <PlugIcon />
                  </div>
                  <h3 className="font-sans">EDGE COMPUTE</h3>
                  <p className="font-sans text-muted">Deploy debugging agents to 200+ edge locations for zero-latency monitoring.</p>
                </div>
              </div>

              {/* Feature 8 */}
              <div className="layer-card-wrapper">
                <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
                <div className="card-shadow-middle"></div>
                <div className="card-main-content">
                  <div className="card-icon-box" style={{ backgroundColor: 'var(--accent-yellow)' }}>
                    <GitBranchIcon />
                  </div>
                  <h3 className="font-sans">GIT INTEGRATION</h3>
                  <p className="font-sans text-muted">Auto-link errors to commits, create branches from bugs, and track regressions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPER EXPERIENCE SECTION */}
        <section id="developers" className="dev-exp-section">
          <div className="section-header">
            <span className="badge purple font-sans">Developer Experience</span>
            <h2 className="font-head">
              Three lines of code<br /><span className="highlight-purple">Infinite visibility</span>
            </h2>
            <p className="sub font-sans">This section is set up so you can swap in a real screenshot later. For now, it uses a placeholder image to preserve layout and spacing.</p>
          </div>

          <div className="placeholder-image-container">
            <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/developer-experience.png" alt="Placeholder code panel" />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
          <div className="section-header">
            <span className="badge green font-sans">Testimonials</span>
            <h2 className="font-head">
              Loved by <span className="highlight-green">developers</span><br />worldwide
            </h2>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="layer-card-wrapper testimonial-card">
              <div className="card-shadow-bottom" style={{ backgroundColor: '#ffcc00' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="card-main-content">
                <div className="avatar-circle">D</div>
                <p className="quote-text font-sans">
                  "DevForge replaced three separate tools in our stack. The real-time error tracking alone saves our team hours every week."
                </p>
                <div className="author-info">
                  <h5 className="font-head">David Brown</h5>
                  <p className="title font-sans">Staff Engineer, Vercel</p>
                  <div className="star-row">
                    <StarIcon fill="#ffcc00" />
                    <StarIcon fill="#ffcc00" />
                    <StarIcon fill="#ffcc00" />
                    <StarIcon fill="#ffcc00" />
                    <StarIcon fill="#ffcc00" />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="layer-card-wrapper testimonial-card">
              <div className="card-shadow-bottom" style={{ backgroundColor: '#38bdf8' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="card-main-content">
                <div className="avatar-circle" style={{ backgroundColor: '#38bdf8' }}>S</div>
                <p className="quote-text font-sans">
                  "Switching to DevForge streamlined our workflow. The integration capabilities have significantly enhanced our team's productivity."
                </p>
                <div className="author-info">
                  <h5 className="font-head">Sarah Johnson</h5>
                  <p className="title font-sans">Product Manager, TechCorp</p>
                  <div className="star-row">
                    <StarIcon fill="#38bdf8" />
                    <StarIcon fill="#38bdf8" />
                    <StarIcon fill="#38bdf8" />
                    <StarIcon fill="#38bdf8" />
                    <StarIcon fill="#38bdf8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="layer-card-wrapper testimonial-card">
              <div className="card-shadow-bottom" style={{ backgroundColor: '#e63946' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="card-main-content">
                <div className="avatar-circle" style={{ backgroundColor: '#e63946' }}>M</div>
                <p className="quote-text font-sans">
                  "With DevForge, we can easily collaborate across departments. The analytics dashboard is a game changer for project insights."
                </p>
                <div className="author-info">
                  <h5 className="font-head">Michael Lee</h5>
                  <p className="title font-sans">Lead Developer, InnovateX</p>
                  <div className="star-row">
                    <StarIcon fill="#e63946" />
                    <StarIcon fill="#e63946" />
                    <StarIcon fill="#e63946" />
                    <StarIcon fill="#e63946" />
                    <StarIcon fill="#e63946" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="how-it-works-section">
          <div className="section-header">
            <span className="badge yellow font-sans">How It Works</span>
            <h2 className="font-head">
              From setup to shipping<br /><span className="highlight-yellow">in minutes</span>
            </h2>
            <p className="sub font-sans">Three simple steps to transform your development workflow.</p>
          </div>

          <div className="how-it-works-grid">
            <div className="steps-list">
              {/* Step 1 */}
              <div className="step-item">
                <div className="step-icon-box">
                  <GitBranchIcon />
                </div>
                <div className="step-text">
                  <p className="step-num color-01 font-sans">STEP 01</p>
                  <h3 className="font-sans">CONNECT YOUR REPO</h3>
                  <p className="font-sans">Link your GitHub, GitLab, or Bitbucket repository. DevForge auto-detects your stack and configures monitoring.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item">
                <div className="step-icon-box step-02">
                  <ActivityIcon />
                </div>
                <div className="step-text">
                  <p className="step-num color-02 font-sans">STEP 02</p>
                  <h3 className="font-sans">MONITOR IN REAL TIME</h3>
                  <p className="font-sans">Get instant visibility into errors, performance metrics, and API calls. Set up alerts and track everything.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item">
                <div className="step-icon-box step-03">
                  <RocketIcon />
                </div>
                <div className="step-text">
                  <p className="step-num color-03 font-sans">STEP 03</p>
                  <h3 className="font-sans">SHIP WITH CONFIDENCE</h3>
                  <p className="font-sans">Deploy knowing every edge case is covered. Automated testing, canary deployments, and instant rollbacks.</p>
                </div>
              </div>
            </div>

            <div className="illustration-box">
              <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/how-it-works.svg" alt="Rainbow staircase illustration" />
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="pricing-section">
          <div className="section-header">
            <span className="badge red font-sans">Pricing</span>
            <h2 className="font-head">
              Simple, transparent <span className="highlight-red">pricing</span>
            </h2>
            <p className="sub font-sans">Start free. Scale as you grow. No hidden fees.</p>
          </div>

          <div className="pricing-toggle-container">
            <div className="pricing-toggle-grid">
              <div className={`slider-bg ${billingPeriod === 'yearly' ? 'yearly-active' : ''}`}></div>
              <button 
                className={`font-sans ${billingPeriod === 'monthly' ? 'active' : 'inactive'}`}
                onClick={() => selectBilling('monthly')}
              >
                MONTHLY
              </button>
              <button 
                className={`font-sans ${billingPeriod === 'yearly' ? 'active' : 'inactive'}`}
                onClick={() => selectBilling('yearly')}
              >
                YEARLY
                <span className="discount-badge">-20%</span>
              </button>
            </div>
          </div>

          <div className="pricing-cards-container">
            {/* Starter Plan */}
            <div className="pricing-card-wrapper">
              <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--foreground)' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="pricing-card-main">
                <div className="card-top-accent" style={{ backgroundColor: 'var(--foreground)' }}></div>
                <div className="pricing-card-body">
                  <h5 className="font-head">STARTER</h5>
                  <p className="desc font-sans">For indie developers and side projects.</p>
                  <div className="price-box">
                    <span className="price font-head">$0</span>
                    <span className="period font-sans">/mo</span>
                  </div>
                  <button className="pricing-btn font-head" onClick={() => onViewChange('signup')}>GET STARTED</button>
                  <ul className="features-list font-sans">
                    <li><CheckIcon color="var(--foreground)" /> Up to 3 projects</li>
                    <li><CheckIcon color="var(--foreground)" /> 10k events/month</li>
                    <li><CheckIcon color="var(--foreground)" /> Basic error tracking</li>
                    <li><CheckIcon color="var(--foreground)" /> 7-day data retention</li>
                    <li><CheckIcon color="var(--foreground)" /> Community support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card-wrapper">
              <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-red)' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="pricing-card-main">
                <span className="popular-badge font-head">Most Popular</span>
                <div className="pricing-card-body">
                  <h5 className="font-head">PRO</h5>
                  <p className="desc font-sans">For growing teams shipping production software.</p>
                  <div className="price-box">
                    <span className="price font-head">{getProPrice()}</span>
                    <span className="period font-sans">/mo</span>
                  </div>
                  <button className="pricing-btn btn-popular font-head" onClick={() => onViewChange('signup')}>START FREE TRIAL</button>
                  <ul className="features-list font-sans">
                    <li><CheckIcon color="var(--accent-red)" /> Unlimited projects</li>
                    <li><CheckIcon color="var(--accent-red)" /> 500k events/month</li>
                    <li><CheckIcon color="var(--accent-red)" /> Advanced error tracking</li>
                    <li><CheckIcon color="var(--accent-red)" /> Performance monitoring</li>
                    <li><CheckIcon color="var(--accent-red)" /> API Inspector</li>
                    <li><CheckIcon color="var(--accent-red)" /> Live collaboration</li>
                    <li><CheckIcon color="var(--accent-red)" /> 30-day data retention</li>
                    <li><CheckIcon color="var(--accent-red)" /> Priority support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team Plan */}
            <div className="pricing-card-wrapper">
              <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="pricing-card-main">
                <div className="card-top-accent" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
                <div className="pricing-card-body">
                  <h5 className="font-head">TEAM</h5>
                  <p className="desc font-sans">For larger teams with advanced needs.</p>
                  <div className="price-box">
                    <span className="price font-head">{getTeamPrice()}</span>
                    <span className="period font-sans">/mo</span>
                  </div>
                  <button className="pricing-btn font-head" onClick={() => onViewChange('signup')}>START FREE TRIAL</button>
                  <ul className="features-list font-sans">
                    <li><CheckIcon color="var(--accent-yellow)" /> Everything in Pro</li>
                    <li><CheckIcon color="var(--accent-yellow)" /> 5M events/month</li>
                    <li><CheckIcon color="var(--accent-yellow)" /> Integrated testing</li>
                    <li><CheckIcon color="var(--accent-yellow)" /> Custom dashboards</li>
                    <li><CheckIcon color="var(--accent-yellow)" /> SSO & SAML</li>
                    <li><CheckIcon color="var(--accent-yellow)" /> 90-day data retention</li>
                    <li><CheckIcon color="var(--accent-yellow)" /> Dedicated support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card-wrapper">
              <div className="card-shadow-bottom" style={{ backgroundColor: 'var(--accent-green)' }}></div>
              <div className="card-shadow-middle"></div>
              <div className="pricing-card-main">
                <div className="card-top-accent" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                <div className="pricing-card-body">
                  <h5 className="font-head">ENTERPRISE</h5>
                  <p className="desc font-sans">Custom solutions for large organizations.</p>
                  <div className="price-box">
                    <span className="price font-head">CUSTOM</span>
                  </div>
                  <button className="pricing-btn font-head">CONTACT SALES</button>
                  <ul className="features-list font-sans">
                    <li><CheckIcon color="var(--accent-green)" /> Everything in Team</li>
                    <li><CheckIcon color="var(--accent-green)" /> Unlimited events</li>
                    <li><CheckIcon color="var(--accent-green)" /> Custom integrations</li>
                    <li><CheckIcon color="var(--accent-green)" /> SOC 2 compliance</li>
                    <li><CheckIcon color="var(--accent-green)" /> Unlimited retention</li>
                    <li><CheckIcon color="var(--accent-green)" /> Dedicated engineer</li>
                    <li><CheckIcon color="var(--accent-green)" /> Custom SLA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION (Ready to Build) */}
        <section className="cta-section">
          <div className="cta-container-box">
            <div className="cta-grid">
              {/* Left sidebar avatars */}
              <div className="cta-side-panel left-side">
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-01.svg" alt="shape-01" />
                </div>
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-02.svg" alt="shape-02" />
                </div>
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-03.svg" alt="shape-03" />
                </div>
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-04.svg" alt="shape-04" />
                </div>
              </div>

              {/* Main inner block */}
              <div className="cta-main-content">
                <h1 className="font-head">
                  READY TO BUILD<br /><span className="cta-pink-highlight">SOMETHING GREAT?</span>
                </h1>
                <div className="cta-buttons">
                  <button className="retro-btn btn-cta-pink" onClick={() => onViewChange('signup')}>
                    <div className="retro-btn__wrapper">
                      <span className="retro-btn__layer retro-btn__layer--bottom"></span>
                      <span className="retro-btn__layer retro-btn__layer--middle"></span>
                      <span className="retro-btn__layer retro-btn__layer--top">
                        START BUILDING FOR FREE <ArrowRightIcon />
                      </span>
                    </div>
                  </button>
                  <button className="flat-retro-btn">SCHEDULE A DEMO</button>
                </div>
                <div className="cta-bottom-banner">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/cta-shape.svg" alt="Decorative banner decoration" />
                </div>
              </div>

              {/* Right sidebar avatars */}
              <div className="cta-side-panel right-side">
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-05.svg" alt="shape-05" />
                </div>
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-06.svg" alt="shape-06" />
                </div>
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-07.svg" alt="shape-07" />
                </div>
                <div className="side-avatar-box">
                  <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/cta/shape-08.svg" alt="shape-08" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-top-grid">
          {/* Col 1 */}
          <div className="footer-col border-col-r">
            <h1 className="footer-brand font-head">Dev<br />Forge</h1>
            <div className="footer-badge-line"></div>
            <div className="footer-desc-box">
              <div className="vert-bar"></div>
              <p className="font-sans">
                The all-in-one DevTools<br />platform for modern teams.
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col border-col-r">
            <h5 className="footer-col-header font-head">Index</h5>
            <div className="footer-links-list">
              <a href="#" className="footer-link-item font-sans">
                <p>RETROUI</p>
                <ArrowUpRightIcon />
              </a>
              <a href="#" className="footer-link-item font-sans">
                <p>COMMERCN</p>
                <ArrowUpRightIcon />
              </a>
              <a href="#" className="footer-link-item font-sans">
                <p>TANSTACK KIT</p>
                <ArrowUpRightIcon />
              </a>
              <a href="#" className="footer-link-item font-sans">
                <p>BLOG</p>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h5 className="footer-col-header font-head">Social</h5>
            <div className="socials-list font-sans">
              <a href="#" className="social-link-item">
                <GlobeIcon />
                <p>Twitter</p>
              </a>
              <a href="#" className="social-link-item">
                <CodeXmlIcon />
                <p>GitHub</p>
              </a>
              <a href="#" className="social-link-item">
                <MessageCircleIcon />
                <p>Discord</p>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar font-sans">
          <p>© 2026 DEVFORGE, INC. ALL RIGHTS RESERVED.</p>
          <p>MIT LICENSE</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
