// RegistrationForm.js

import React, { useState } from 'react';
import './RegistrationForm.css';
const RegistrationForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('New Username: ', username);
    console.log('Email: ', email);
    console.log('New Password: ', password);
    // You can implement your registration logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form" >
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      <div>
        <p>Already have an account? <span onClick={onLogin}>Login here</span></p>
      </div>
    </form>
  );
};

export default RegistrationForm;
