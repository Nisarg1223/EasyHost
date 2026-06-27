import React, { useState, useEffect } from 'react';
import './Home.scss';
import brLogo from '../assets/br_logo.png';
import footerLeftImg from '../assets/footer_left.jpg';
import footerRightImg from '../assets/footer_right.jpg';

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

const DraggableElement = ({ children, className, onClick }) => {
  const [position, setPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [originalPosition, setOriginalPosition] = useState({ top: 0, left: 0 });
  const elementRef = React.useRef(null);
  const hasMovedRef = React.useRef(false);

  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    hasMovedRef.current = false;
    
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const parentRect = elementRef.current.offsetParent.getBoundingClientRect();
      setOriginalPosition({
        top: rect.top - parentRect.top,
        left: rect.left - parentRect.left
      });
    }
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;
    
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasMovedRef.current = true;
    }
    
    setPosition({
      top: `${originalPosition.top + deltaY}px`,
      left: `${originalPosition.left + deltaX}px`
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const onMouseDown = (e) => {
    if (e.button !== 0) return; // only left click
    handleStart(e.clientX, e.clientY);
    e.preventDefault();
  };

  const onTouchStart = (e) => {
    if (e.touches.length > 0) {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  React.useEffect(() => {
    const onMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX, e.clientY);
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onMouseUp = () => handleEnd();
    const onTouchEnd = () => handleEnd();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, dragStart, originalPosition]);

  const inlineStyle = {
    cursor: isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
    touchAction: 'none',
    zIndex: isDragging ? 100 : 5,
  };

  if (position) {
    inlineStyle.position = 'absolute';
    inlineStyle.top = position.top;
    inlineStyle.left = position.left;
    inlineStyle.right = 'auto';
    inlineStyle.bottom = 'auto';
  }

  const handleMouseUpOrTouchEnd = (e) => {
    if (!hasMovedRef.current && onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onMouseUp={handleMouseUpOrTouchEnd}
      onTouchEnd={handleMouseUpOrTouchEnd}
      style={inlineStyle}
    >
      {children}
    </div>
  );
};

const Home = ({ onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderPreloader, setShouldRenderPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8 seconds loading screen

    const cleanupTimer = setTimeout(() => {
      setShouldRenderPreloader(false);
    }, 3800); // remove from DOM after exit animation completes

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  return (
    <div className={`home-page ${isLoading ? 'preloader-active' : ''}`}>
      {shouldRenderPreloader && (
        <div className={`preloader-screen ${!isLoading ? 'exit-up' : ''}`}>
          <div className="preloader-content">
            <img src={brLogo} alt="EasyHost Logo" className="preloader-logo" />
            <div className="preloader-text font-head">
              <span className="letter letter-1">E</span>
              <span className="letter letter-2">a</span>
              <span className="letter letter-3">s</span>
              <span className="letter letter-4">y</span>
              <span className="letter letter-5">H</span>
              <span className="letter letter-6">o</span>
              <span className="letter letter-7">s</span>
              <span className="letter letter-8">t</span>
            </div>
          </div>
        </div>
      )}

      {/* Wrapper to animate reveal */}
      <div className={`home-reveal-container ${!isLoading ? 'revealed' : ''}`}>
      {/* HEADER NAVBAR */}
      <header className="w-full">
        <div className="header-container">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); onViewChange('home'); }}>
            <img src={brLogo} alt="EasyHost Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </a>

          <nav>
            <a href="#" className="nav-link font-sans" onClick={(e) => { e.preventDefault(); onViewChange('home'); }} style={{ fontWeight: '900', letterSpacing: '0.05em' }}>EASYHOST</a>
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
        <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('home'); }} style={{ fontWeight: '900' }}>EASYHOST</a>
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
                SIMPLE SECURE<br />WEBSITE <span className="text-secondary">HOSTING</span>
              </h1>
              <p className="font-sans">
                EasyHost is a modern, developer-friendly web hosting platform designed to make deploying websites and web applications as simple as possible.
              </p>
            </div>

            <div className="hero-ctas">
              <button className="retro-btn" onClick={() => onViewChange('signup')}>
                <div className="retro-btn__wrapper">
                  <span className="retro-btn__layer retro-btn__layer--bottom"></span>
                  <span className="retro-btn__layer retro-btn__layer--middle"></span>
                  <span className="retro-btn__layer retro-btn__layer--top">
                    START DEPLOYING <ArrowRightIcon />
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
                <h4>1-CLICK</h4>
                <p>EASY DEPLOYS</p>
              </div>
              <div className="metric-item">
                <h4>50K+</h4>
                <p>HOSTED PROJECTS</p>
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
                        <p>easyhost.app/dashboard</p>
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
                            <p className="log-line" style={{ color: '#00ff88' }}>$ easyhost deploy --production</p>
                            <p className="log-line" style={{ color: '#888888' }}>✓ Auto-detecting stack... React detected</p>
                            <p className="log-line" style={{ color: '#818cf8' }}>✓ Bundling assets & optimizing bundle</p>
                            <p className="log-line" style={{ color: '#00ff88' }}>✓ Uploading build... 100% success</p>
                            <p className="log-line" style={{ color: '#00d4ff' }}>✓ Live preview ready in 1.8s!</p>
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

        {/* HERO BANNER SECTION */}
        <section className="hero-banner-section">
          <div className="hero-banner-container">
            <img src="/hero_img1.png" alt="Deployment is not a joke Banner" className="hero-banner-img" />
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="features-section">
          <div className="section-header">
            <span className="badge cyan font-sans">Features</span>
            <h2 className="font-head">
              Everything you need to<br /><span className="highlight">deploy with confidence</span>
            </h2>
            <p className="sub font-sans">A complete toolkit for static and dynamic web apps who demand simplicity and speed.</p>
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
                  <h3 className="font-sans">1-CLICK DEPLOYMENTS</h3>
                  <p className="font-sans text-muted">Upload project files or sync Git repositories to publish static and dynamic websites instantly.</p>
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
                  <h3 className="font-sans">WEBSITE ANALYTICS</h3>
                  <p className="font-sans text-muted">Monitor traffic metrics, response speed, server resource limits, and global uptime stats.</p>
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
                  <h3 className="font-sans">VERSION PREVIEWS</h3>
                  <p className="font-sans text-muted">Inspect active builds, preview staging previews, and roll back deployment states instantly.</p>
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
                  <h3 className="font-sans">SECURE CREDENTIALS</h3>
                  <p className="font-sans text-muted">Protect environments variables, encrypt configuration secrets, and define user access rules.</p>
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
                  <h3 className="font-sans">SSL &amp; SECURE HTTPS</h3>
                  <p className="font-sans text-muted">Automatic free SSL certificate generations and secure redirects on every new custom domain.</p>
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
                  <h3 className="font-sans">COLLABORATOR TEAMS</h3>
                  <p className="font-sans text-muted">Invite team members to edit build pipelines and manage multiple server configurations together.</p>
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
                  <h3 className="font-sans">CONTINUOUS GIT CD</h3>
                  <p className="font-sans text-muted">Automatically triggers a build pipeline and routes traffic on every single Git push.</p>
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
                  <h3 className="font-sans">CUSTOM DOMAINS</h3>
                  <p className="font-sans text-muted">Route custom domains seamlessly with instant DNS verification templates.</p>
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
              Connect Git repositories<br /><span className="highlight-purple">Automatic deployment</span>
            </h2>
            <p className="sub font-sans">Connect your GitHub, GitLab, or Bitbucket. EasyHost auto-detects your workspace stack and builds everything automatically on every git push.</p>
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
                  "EasyHost replaced three separate tools in our stack. The automatic Git deployments and real-time previews save our team hours of setup every week."
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
                  "Switching to EasyHost streamlined our deployment workflow. The automatic domain binding and SSL setup have significantly simplified our hosting."
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
                  "With EasyHost, we can easily invite collaborators and share staging previews. The analytics dashboards are a complete game changer for traffic insights."
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
              From setup to hosting<br /><span className="highlight-yellow">in minutes</span>
            </h2>
            <p className="sub font-sans">Three simple steps to deploy and manage your web projects.</p>
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
                  <p className="font-sans">Link your GitHub, GitLab, or Bitbucket repository. EasyHost automatically detects your framework stack and configures your optimal build configurations.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item">
                <div className="step-icon-box step-02">
                  <ActivityIcon />
                </div>
                <div className="step-text">
                  <p className="step-num color-02 font-sans">STEP 02</p>
                  <h3 className="font-sans">MONITOR &amp; PREVIEW</h3>
                  <p className="font-sans">Configure environment variables, bind custom domains, and inspect live preview links. Adjust team settings with role permissions.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item">
                <div className="step-icon-box step-03">
                  <RocketIcon />
                </div>
                <div className="step-text">
                  <p className="step-num color-03 font-sans">STEP 03</p>
                  <h3 className="font-sans">SHIP &amp; SCALE</h3>
                  <p className="font-sans">Publish instantly. Use build rollbacks to undo any deployment mistakes. Review traffic counts, response speeds, and uptime with live analytics.</p>
                </div>
              </div>
            </div>

            <div className="illustration-box">
              <img src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/templates/devtool/how-it-works.svg" alt="Rainbow staircase illustration" />
            </div>
          </div>
        </section>

        {/* INTERACTIVE 3D PERSPECTIVE GALLERY */}
        <section id="perspective-gallery" className="gallery-section">
          
          {/* Top Ticker Marquee */}
          <div className="gallery-ticker font-sans">
            <div className="ticker-inner">
              <span>DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • </span>
              <span>DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • DEPLOY INSTANTLY • AUTOMATIC CD • BUILT FOR PERFORMANCE • </span>
            </div>
          </div>

          {/* Section Navbar Header */}
          <div className="gallery-navbar font-sans">
            <div className="nav-item">CONSOLE</div>
            <div className="nav-item active">DEPLOYER</div>
            <div className="nav-item">METRICS</div>
            <div className="nav-item">NETWORK</div>
            <div className="nav-item">SUPPORT</div>
          </div>

          <div className="gallery-main-container">
            {/* Oli Studio Brand Header */}
            <div className="gallery-brand">
              <svg viewBox="0 0 100 100" className="brand-cube-icon">
                <path d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                <path d="M50 15 L50 85" stroke="currentColor" strokeWidth="4" />
                <path d="M20 32 L50 50 L80 32" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>
              <div className="brand-name font-head">Oli Studio <span className="brand-sub">Deployer</span></div>
            </div>

            {/* 3D Curved Perspective Cylinder Carousel */}
            <div className="perspective-cylinder-wrapper">
              <div className="cylinder-carousel">
                
                {/* Card 1: Git Push (Yellow) */}
                <div className="card-3d card-3d-1 theme-yellow">
                  <div className="card-inner-graphic">
                    <div className="terminal-bar">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <div className="terminal-body font-sans">
                      <p className="cmd">&gt; git push easyhost</p>
                      <p className="output green">✓ Build Success</p>
                      <p className="output">✓ Pushing to edge...</p>
                    </div>
                    <div className="bold-badge font-head">GIT PUSH</div>
                  </div>
                </div>

                {/* Card 2: CDN (Blue) */}
                <div className="card-3d card-3d-2 theme-blue">
                  <div className="card-inner-graphic">
                    <svg viewBox="0 0 100 100" className="icon-svg">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="4" />
                      <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="4" />
                      <ellipse cx="50" cy="50" rx="15" ry="40" fill="none" stroke="currentColor" strokeWidth="4" />
                      <circle cx="50" cy="50" r="6" fill="var(--primary)" />
                      <circle cx="20" cy="50" r="5" fill="var(--accent-red)" />
                      <circle cx="80" cy="50" r="5" fill="var(--accent-red)" />
                    </svg>
                    <div className="bold-badge font-head">EDGE CDN</div>
                  </div>
                </div>

                {/* Card 3: SSL Certificate (Pink) */}
                <div className="card-3d card-3d-3 theme-pink">
                  <div className="card-inner-graphic">
                    <svg viewBox="0 0 100 100" className="icon-svg">
                      <rect x="25" y="45" width="50" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="5" />
                      <path d="M35 45 V30 a15 15 0 0 1 30 0 v15" fill="none" stroke="currentColor" strokeWidth="5" />
                      <circle cx="50" cy="65" r="6" fill="currentColor" />
                    </svg>
                    <div className="badge-tag green font-sans">100% SECURE</div>
                    <div className="bold-badge font-head">FREE SSL</div>
                  </div>
                </div>

                {/* Card 4: Auto Scaling (Green) */}
                <div className="card-3d card-3d-4 theme-green">
                  <div className="card-inner-graphic">
                    <svg viewBox="0 0 100 100" className="icon-svg">
                      <path d="M10 80 L30 60 L50 70 L70 30 L90 40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <line x1="10" y1="90" x2="10" y2="10" stroke="currentColor" strokeWidth="3" />
                      <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="3" />
                      <circle cx="70" cy="30" r="5" fill="currentColor" />
                      <path d="M70 15 L70 30 L85 30" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                    <div className="bold-badge font-head">AUTO SCALE</div>
                  </div>
                </div>

                {/* Card 5: Databases (Purple) */}
                <div className="card-3d card-3d-5 theme-purple">
                  <div className="card-inner-graphic">
                    <svg viewBox="0 0 100 100" className="icon-svg">
                      <ellipse cx="50" cy="25" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M25 25 V45 A25 10 0 0 0 75 45 V25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M25 45 V65 A25 10 0 0 0 75 65 V45" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M25 65 V85 A25 10 0 0 0 75 85 V65" fill="none" stroke="currentColor" strokeWidth="4" />
                      <ellipse cx="50" cy="45" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="4" />
                      <ellipse cx="50" cy="65" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                    <div className="bold-badge font-head">DATABASES</div>
                  </div>
                </div>

                {/* Card 6: Domains (Orange) */}
                <div className="card-3d card-3d-6 theme-orange">
                  <div className="card-inner-graphic">
                    <div className="browser-mockup">
                      <div className="browser-bar">
                        <span className="dot"></span>
                        <span className="domain-text">yoursite.com</span>
                      </div>
                      <div className="browser-page">
                        <div className="line"></div>
                        <div className="line short"></div>
                        <div className="big-check font-head">✓</div>
                      </div>
                    </div>
                    <div className="bold-badge font-head">DOMAINS</div>
                  </div>
                </div>

                {/* Card 7: Live Metrics (Cyan) */}
                <div className="card-3d card-3d-7 theme-cyan">
                  <div className="card-inner-graphic">
                    <svg viewBox="0 0 100 100" className="icon-svg">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path d="M15 50 A 35 35 0 0 1 85 50" fill="none" stroke="var(--primary)" strokeWidth="6" strokeDasharray="110" strokeDashoffset="30" />
                      <line x1="50" y1="50" x2="65" y2="25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="5" fill="currentColor" />
                    </svg>
                    <div className="bold-badge font-head">ANALYTICS</div>
                  </div>
                </div>

                {/* Card 8: System Reset (Lavender) */}
                <div className="card-3d card-3d-8 theme-lavender">
                  <div className="card-inner-graphic">
                    <div className="keyboard-key font-head">
                      <div className="key-cap">RESET</div>
                    </div>
                    <svg viewBox="0 0 100 100" className="icon-svg rotate-arrow">
                      <path d="M30 50 A20 20 0 1 1 50 70 M50 85 L50 70 L65 70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="bold-badge font-head">FAILOVER</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Description & CTAs */}
            <div className="gallery-content font-sans">
              <p className="gallery-desc">
                Bring your websites to life with instant neobrutalist cloud deployments. Experience flawless consistency, perfect optimization, and impeccable speed in every single built frame.
              </p>
              <div className="gallery-actions">
                <button className="gallery-btn primary font-sans" onClick={() => onViewChange('signup')}>
                  Get Started Now
                </button>
                <button className="gallery-btn outline font-sans">
                  Case studies
                </button>
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
                  READY TO HOST<br /><span className="cta-pink-highlight">YOUR PROJECTS?</span>
                </h1>
                <div className="cta-buttons">
                  <button className="retro-btn btn-cta-pink" onClick={() => onViewChange('signup')}>
                    <div className="retro-btn__wrapper">
                      <span className="retro-btn__layer retro-btn__layer--bottom"></span>
                      <span className="retro-btn__layer retro-btn__layer--middle"></span>
                      <span className="retro-btn__layer retro-btn__layer--top">
                        START HOSTING FOR FREE <ArrowRightIcon />
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

      {/* PINTEREST-STYLE RETRO FOOTER */}
      <footer className="pinterest-footer">
        {/* Top Grid Area (Light grey background with drafting grid lines) */}
        <div className="footer-grid-preview">
          
          {/* Overlapping browser windows (Left) */}
          <DraggableElement className="retro-elements retro-windows-stack">
            <div className="win win-red"></div>
            <div className="win win-green"></div>
            <div className="win win-yellow">
              <div className="win-header">
                <div className="win-dots">
                  <span className="dot-x"></span>
                  <span className="dot-x"></span>
                  <span className="dot-x"></span>
                </div>
                <div className="win-title">site.html</div>
              </div>
              <div className="win-content">
                <div className="win-mock-code">
                  <span className="c-blue">&lt;h1&gt;</span>Hello World<span className="c-blue">&lt;/h1&gt;</span>
                </div>
              </div>
            </div>
          </DraggableElement>

          {/* Blue Globe (Top Left-Center) */}
          <DraggableElement className="retro-elements retro-globe-container">
            <svg viewBox="0 0 100 100" className="wireframe-globe">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2.5" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </DraggableElement>

          {/* Centered Retro Computer - Kept static */}
          <div className="retro-computer-wrapper">
            <div className="retro-computer">
              <div className="computer-monitor">
                <div className="screen-bezel">
                  <div className="screen-glass">
                    <div className="terminal-text cursor-blink">&lt; easyhost _ &gt;</div>
                    <div className="terminal-sub">deploy: ready</div>
                    <div className="terminal-success">SUCCESS</div>
                  </div>
                  <div className="bezel-badge"></div>
                </div>
              </div>
              <div className="computer-base">
                <div className="floppy-drive">
                  <div className="drive-line"></div>
                  <div className="drive-button"></div>
                </div>
                <div className="vents">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
              <div className="computer-keyboard">
                <div className="keys-grid"></div>
              </div>
            </div>
          </div>

          {/* Retro Deploy Arrow Button (Mid Left-Bottom) */}
          <DraggableElement className="retro-elements retro-deploy-btn" onClick={() => onViewChange('signup')}>
            <span className="arrow-text">DEPLOY</span>
            <span className="arrow-icon">→</span>
          </DraggableElement>

          {/* Retro Password secure box (Top Right-Center) */}
          <DraggableElement className="retro-elements retro-password-box">
            <span className="pw-dots">● ● ●</span>
            <span className="pw-pipe">|</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pw-lock">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </DraggableElement>

          {/* Retro ENTER key (Mid Right-Bottom) */}
          <DraggableElement className="retro-elements retro-enter-key">
            <span className="enter-label">ENTER</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="enter-arrow">
              <path d="M9 10l-5 5 5 5M4 15h11a4 4 0 0 0 4-4V9" />
            </svg>
          </DraggableElement>

          {/* Yellow Warning Triangle (Top Right-Far) */}
          <DraggableElement className="retro-elements retro-warning-sign">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="warning-icon">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </DraggableElement>
        </div>

        {/* Bottom solid black block */}
        <div className="footer-black-block">
          <p className="footer-promo font-sans">
            READY TO DEPLOY STATIC &amp; DYNAMIC WEB APPS INSTANTLY
          </p>

          <div className="footer-middle-row">
            <div className="footer-graphic-box left-graphic">
              <img src={footerLeftImg} alt="Neobrutalist Developer Illustration" />
            </div>

            <div className="footer-center-content">
              <div className="footer-brand-title font-head">
                <span className="brand-underline">Easy</span>Host
                <span className="version-badge font-sans">v.1.0</span>
              </div>

              <div className="footer-sub-title font-head">
                SIMPLE WEB HOSTING
              </div>
            </div>

            <div className="footer-graphic-box right-graphic">
              <img src={footerRightImg} alt="Neobrutalist Email Illustration" />
            </div>
          </div>

          <div className="footer-line-divider"></div>

          <div className="footer-description font-sans">
            <p>
              *EasyHost is a lightweight website hosting platform that simplifies the deployment process, allowing users to host static and dynamic web applications with minimal configuration. It focuses on ease of use, performance, and an intuitive user experience.
            </p>
            <p className="secondary-desc">
              Designed to provide a fast, seamless, and beginner-friendly hosting experience without complicated setup.
            </p>
          </div>

          {/* Accessibility Navigation links & Copyright */}
          <div className="footer-utility-row font-sans">
            <div className="utility-links">
              <a href="#features">FEATURES</a>
              <a href="#developers">DEVELOPERS</a>
              <a href="#pricing">PRICING</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <div className="utility-copyright">
              © 2026 EASYHOST. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Home;
