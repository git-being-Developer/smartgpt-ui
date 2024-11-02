import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ChatWindow from './ChatWindow';
import Purchase from './Purchase';
import './dashboard.css';
import './diwali-theme.css';

const App = () => {
  const [page, setPage] = useState('login');
  const [balance, setBalance] = useState(100);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage('chat'); // Redirect to chat page on successful login
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login setPage={setPage} onLogin={handleLogin} />;
      case 'signup':
        return <Signup setPage={setPage} />;
      case 'purchase':
        return <Purchase balance={balance} setBalance={setBalance} />;
      case 'chat':
        return <ChatWindow balance={balance} />;
      default:
        return <Login setPage={setPage} onLogin={handleLogin} />;
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>SmartGPT</h1>
        <nav>
          <button onClick={() => setPage('login')}>Login</button>
          <button onClick={() => setPage('signup')}>Signup</button>
          <button onClick={() => setPage('purchase')}>Purchase</button>
          <button onClick={() => setPage('chat')}>Chat</button>
        </nav>
        {isLoggedIn && (
          <div className="credits">
            <span className="token-balance">Balance: {balance} Tokens</span>
            <button className="buy-credits" onClick={() => setPage('purchase')}>Buy More Credits</button>
          </div>
        )}
      </header>
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;
