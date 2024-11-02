import React from 'react';

const Purchase = ({ balance, setBalance }) => {
  const purchaseBundle = (cost, tokens) => {
    setBalance(balance + tokens);
    alert(`Successfully purchased ${tokens} tokens for ₹${cost}`);
  };

  return (
    <div className="purchase-container">
      <div className="balance-section">
        <h2>Your Current Balance</h2>
        <p className="balance-amount">{balance} Tokens</p>
      </div>

      <div className="purchase-section">
        <h2>Purchase More Tokens</h2>
        <p>Select a bundle that suits your needs.</p>
        
        <div className="bundle-options">
          <button onClick={() => purchaseBundle(5, 10)} className="bundle-button">
            <strong>10 Tokens</strong> <span>for ₹5</span>
          </button>
          <button onClick={() => purchaseBundle(12, 50)} className="bundle-button">
            <strong>50 Tokens</strong> <span>for ₹12</span>
          </button>
          <button onClick={() => purchaseBundle(20, 100)} className="bundle-button">
            <strong>100 Tokens</strong> <span>for ₹20</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
