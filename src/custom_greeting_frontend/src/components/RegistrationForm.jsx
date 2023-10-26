import React, { useState } from 'react';
import { custom_greeting_backend } from '../../../declarations/custom_greeting_backend/index';
import './RegistrationForm.css';

const RegistrationForm = (args) => {
  var [firstName,setFirstName] = useState("")
  var [lastName,setlastName] = useState("")
  var [age,setage] = useState("")
  var [mobileNumber,serMobileNumber] = useState("")
  var [password,serPassword] = useState("")
  var [accountNumber,setAccountNumber] = useState("");
    
  var RegisterUser = async ()=>{
     let registrationStatus = await custom_greeting_backend.RegisterUser(accountNumber, password,firstName+" "+lastName,parseInt(age),parseInt(mobileNumber));
      registrationStatus = parseInt(registrationStatus);
     if(registrationStatus==-1) alert("Failed to Register User!")
     else alert("Registration Succefull")
  }

  var LoginPage = async ()=>{
    args.Setdisplay(0);
  }
  return (
    <div className="login-form">
      <form  className="form" >
        <h2>Enter your details for registration </h2>
          <label htmlFor="">
            Customer id : 
            <input type="number" value={accountNumber} onChange={(e)=>setAccountNumber(e.target.value)} />
          </label>
          <label>
            First Name : 
            <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          </label>
          <label>
            Last Name :
            <input type="text" value={lastName} onChange={(e)=> setlastName(e.target.value)} />
          </label>
          <label>
            Age :
            <input type="number" value={age} onChange={(e)=> setage(e.target.value)} />
          </label>
          <label>
            Mobile Number :
            <input type="number" value={mobileNumber} onChange={(e)=> serMobileNumber(e.target.value)} />
          </label>

          <label>
            Password:
            <input type="password" value={password} onChange={(e)=> serPassword(e.target.value) } />
          </label>
          
          <input type="button" value="Register" onClick={RegisterUser} />
          <p>Already have an account? <input type="button" value="Login here" onClick={LoginPage} /></p>
      </form>
    </div>
  );
};

export default RegistrationForm;