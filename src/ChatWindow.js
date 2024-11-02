import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';

const ChatWindow = ({ balance, setPage }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'user', content: newMessage }]);
      setNewMessage('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { sender: 'user', content: `Sent a file: ${file.name}` }]);
    }
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      setMessages([...messages, { sender: 'user', content: `Sent an image: ${image.name}` }]);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h2>SmartGPT Chat</h2>
        <div className="balance-info">
          <span className="token-balance">Balance: {balance} Tokens</span>
          <button className="buy-credits" onClick={() => setPage('purchase')}>Buy More Tokens</button>
        </div>
      </header>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="chat-input-section">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          className="chat-input"
        />
        <div className="file-upload-icons">
          <label>
            <AttachFileIcon />
            <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
          </label>
          <label>
            <ImageIcon />
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
