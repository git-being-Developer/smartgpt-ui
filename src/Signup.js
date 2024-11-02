import React, { useState } from 'react';

const Signup = ({ setPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Implement signup logic here
    setPage('login'); // Redirect to login after successful signup
  };

  return (
    <div className="signup-container">
      <div className="welcome-section">
        <h1>Join SmartGPT</h1>
        <p>Experience the power of AI with a flexible, pay-as-you-go model.</p>
      </div>

      <div className="signup-section">
        <h2>Create Your Account</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-text">Already have an account? <span onClick={() => setPage("login")} className="login-link">Log in here</span></p>
      </div>

      <div className="features-section">
        <h3>Why Choose SmartGPT?</h3>
        <ul>
          <li>💸 <strong>Affordable Usage-Based Pricing</strong>: Only pay for what you need.</li>
          <li>🔒 <strong>Privacy First</strong>: Your data is secure with us.</li>
          <li>⚙️ <strong>Advanced AI Assistance</strong>: Get reliable, real-time answers.</li>
        </ul>
      </div>
    </div>
  );
};

export default Signup;
