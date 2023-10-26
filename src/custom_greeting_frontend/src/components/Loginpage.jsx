import React, { useState } from 'react';
import { custom_greeting_backend } from '../../../declarations/custom_greeting_backend/index';
import RegistrationForm from './RegistrationForm';
import './Loginpage.css';
const Loginpage = ({ onRegister }) => {
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
    //  login 
    console.log('Username: ', username);
    console.log('Password: ', password);
    // authentication
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='login-form'>
      <div>
        <label htmlFor="text"></label>
        <label className="username">
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label className="password">
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <p>Don't have an account? <span onClick={onRegister}>Register here</span></p>
      </div>
    </form>
          <RegistrationForm></RegistrationForm>
          </div>

  );
};


export default Loginpage;
