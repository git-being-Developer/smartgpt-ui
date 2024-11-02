import React, { useState } from 'react';

const Login = ({ setPage, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., API call)
    // If login is successful:
    onLogin(); // Call the function to set isLoggedIn to true
  };

  return (
    <div className="login-container">
      <div className="welcome-section">
        <h1>Welcome to SmartGPT</h1>
        <p>Your intelligent companion with a pay-as-you-go model.</p>
      </div>

      <div className="login-section">
        <h2>Log In to Continue</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">New here? <span onClick={() => setPage("signup")} className="signup-link">Create an account</span></p>
      </div>

      <div className="features-section">
        <h3>Why Choose SmartGPT?</h3>
        <ul>
          <li>💸 <strong>Pay as You Go</strong>: Affordable pricing based on your usage.</li>
          <li>🔒 <strong>Privacy First</strong>: We prioritize your data security.</li>
          <li>⏱️ <strong>Instant Responses</strong>: Get real-time assistance, 24/7.</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
