import React, { useState } from 'react';
import { custom_greeting_backend } from '../../../declarations/custom_greeting_backend/index';
import RegistrationForm from './RegistrationForm';
import './Loginpage.css';
const Loginpage = (args) => {
  var [accountNumber,setAccountNumber] = useState();
  var [password,setrpassword] = useState();
  var verifyLogin = async ()=>{
      var isVerified = await custom_greeting_backend.LoginUser(accountNumber, password);
      isVerified =  parseInt(isVerified);
      if(isVerified==1) args.Setdisplay(2);
      else alert("Account Number or Password Wrong",isVerified);
  }

  var openRegisterationPage = async ()=>{
    args.Setdisplay(1);
  }

  return (
    <div className='login-form'>
      <form  className="form">
        <h1>Accounts</h1>
        <label className="username">
            CUSTOMER ID:
          <input type="number" value={accountNumber} onChange={(e)=> setAccountNumber(e.target.value)} />
        </label>
        <label className="password">
          PASSWORD:
          <input type="password" value={password} onChange={(e)=>setrpassword(e.target.value)} />
        </label>
        <button type="button" onClick={verifyLogin}>Login</button>
        <p>Don't have an account? <button onClick={openRegisterationPage}>Register here</button></p>
      </form>
    </div>
  );
};


export default Loginpage;