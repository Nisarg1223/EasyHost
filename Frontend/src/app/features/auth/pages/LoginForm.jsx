import React, { useState } from 'react';

const LoginForm = ({ onBack, onToggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="form-container">
      <div className="form-header-row">
        <h2 className="form-title">WELCOME BACK</h2>
      </div>

      <form className="form-body" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="login-email">Username or Email</label>
          <input
            id="login-email"
            type="text"
            placeholder="johndoe or name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <div className="checkbox-group" onClick={() => setRememberMe(!rememberMe)}>
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={() => {}} // Controlled by outer div click for better spacing hit box
          />
          <label htmlFor="remember-me">
            Remember my session for 30 days
          </label>
        </div>

        <button type="submit" className="form-submit-btn">
          Log In
        </button>
      </form>

      <p className="form-toggle-link">
        Don't have an account? 
        <span onClick={onToggleView}>Sign up</span>
      </p>
    </div>
  );
};

export default LoginForm;
