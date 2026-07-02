import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Illustration from './components/Illustration';
import LoginForm from './app/features/auth/pages/LoginForm';
import SignupForm from './app/features/auth/pages/SignupForm';
import Home from './components/Home';

const App = () => {
  const [view, setView] = useState('home'); // 'home' | 'login' | 'signup'

  if (view === 'home') {
    return <Home onViewChange={setView} />;
  }

  return (
    <div className="app-wrapper">
      <div className="main-card">
        {/* Navigation Bar */}
        <Navbar activeView={view} onViewChange={setView} />

        {/* Core Layout Split Grid */}
        <div className="page-body">
          {/* Left illustration panel (always visible, adapts responsively) */}
          <Illustration />

          {/* Right form content panel */}
          <div className="right-panel">
            {view === 'login' && (
              <LoginForm 
                onToggleView={() => setView('signup')} 
              />
            )}
            {view === 'signup' && (
              <SignupForm 
                onToggleView={() => setView('login')} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;