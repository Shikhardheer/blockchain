import React,{useState} from 'react'
import { parseArgs } from 'util';
import { custom_greeting_backend } from '../../../declarations/custom_greeting_backend/index';
import './Info.css';

export default function Info(args) {
     var [curBalance,setCurrentBalance] = useState();
     var [name,setName] = useState();
     var [accountNumber,setAccountNumber] = useState("");
     var [mobileNumber,setMobileNumber] = useState();
     var [age,setAge] = useState();


     var [amount,setAmount] = useState();
     var [amountToTranfer,setamountToTranfer] = useState();
     var [payeeAccountNumber,setpayeeAccountNumber] = useState();


     var setCustomerDetails = async ()=>{
        let obj = await custom_greeting_backend.getCustomerInfo();
        obj = JSON.parse(obj)
        setCurrentBalance(obj.curBalance)
        setName(obj.fullName)
        setAccountNumber(obj.accountNumber)
        setMobileNumber(obj.mobileNumber)
        setAge(obj.age)
    }
     setCustomerDetails();

    var topUp = async ()=>{
       let progress = await custom_greeting_backend.TopUp(accountNumber,parseInt(amount));
       if(progress==-1) alert("topUp failed")
       else alert("Money added into the wallet")
        setAmount(0);
    }

    var Withdraw = async ()=>{
        let progress = await custom_greeting_backend.Withdraw(accountNumber,parseInt(amount));
        if(progress==-1) alert("Withdrawal failed");
        else alert("Money succefully Withdrawn")
        setAmount(0);
    }
    var fundTransfer = async ()=>{
        let progress = await custom_greeting_backend.TransferFund(accountNumber,payeeAccountNumber,parseInt(amountToTranfer));
        if(progress==-1) alert("fund transfer failed")
        else alert("Succefully Transferd !")
        setpayeeAccountNumber("")
        setamountToTranfer(0);
    }
    var logOut = ()=>{
        args.Setdisplay(0);
    }


    return (
        <div className="form">
            <div className="info">
                <label>Current Balance : {curBalance }</label> <br />
                <label htmlFor="">Name : { name}</label> <br />
                <label>Account Number : {accountNumber }</label> <br />
                <label>Mobile Number : { mobileNumber}</label> <br />
                <label>Age : {age }</label>
            </div>

            <div>
                <div className="top-up">
                    <h2>Top-up and Widthdrawl</h2>
                    Amount : <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
                    <div>
                        <button onClick={topUp}>TopUp</button>
                        <button onClick={Withdraw}>Withdraw</button>
                    </div>
                </div>

                <div className="Fund">
                    <h2>Fund transfer</h2>
                    <label htmlFor="">
                        Amount : <input type="number" value={amountToTranfer} onChange={e=>setamountToTranfer(e.target.value)} />
                    </label>  <br />
                    <label htmlFor="">
                        Payee Customer id :  <input type="number" value={payeeAccountNumber} onChange={e=>setpayeeAccountNumber(e.target.value)} />
                    </label>
                    <button onClick={fundTransfer}>Fund Transfer</button>
                </div>
            </div>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}