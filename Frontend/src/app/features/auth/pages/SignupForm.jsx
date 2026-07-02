import React, { useState } from 'react';

const SignupForm = ({ onBack, onToggleView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms of Service.");
      return;
    }
    console.log('Signup submitted:', { name, email, password });
    alert(`Account created successfully for: ${name}`);
  };

  return (
    <div className="form-container">
      <div className="form-header-row">
        <h2 className="form-title">CREATE ACCOUNT</h2>
      </div>

      <form className="form-body" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="signup-username">Username</label>
          <input
            id="signup-username"
            type="text"
            placeholder="johndoe123"
            value={email} // keeping state variable 'email' but it acts as username to avoid huge refactor, wait actually let's just use email as username or better to rename it. Let's just leave the state name but change the label/placeholder.
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <div className="checkbox-group" onClick={() => setAgreeTerms(!agreeTerms)}>
          <input
            type="checkbox"
            id="agree-terms"
            checked={agreeTerms}
            onChange={() => {}} // Controlled by outer div click for better spacing hit box
          />
          <label htmlFor="agree-terms">
            I agree to the <a href="#terms" onClick={(e) => e.stopPropagation()}>Terms of Service</a> and <a href="#privacy" onClick={(e) => e.stopPropagation()}>Privacy Policy</a>.
          </label>
        </div>

        <button type="submit" className="form-submit-btn">
          Sign Up
        </button>
      </form>

      <p className="form-toggle-link">
        Already have an account? 
        <span onClick={onToggleView}>Log in</span>
      </p>
    </div>
  );
};

export default SignupForm;
