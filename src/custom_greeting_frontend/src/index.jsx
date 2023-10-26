import React, { useState } from "react";
import { render } from "react-dom";
import { custom_greeting_backend } from "../../declarations/custom_greeting_backend/index";
import Loginpage from "./components/Loginpage";
const App = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [wallet, set] = useState(0);

  const handlewallet = async () => {
    var money = await custom_greeting_backend.currbala();
    money = parseInt(money);
    setBalance(money);
  };
  handlewallet();
  const handleTopUp = async () => {
    var money = await custom_greeting_backend.topup(amount);
    setBalance(money);
  };

  const handleWithdrawal = async () => {
    var money = await custom_greeting_backend.withd(amount);

    setBalance(money);
  };

  return (
    <div>
      <div className="container">
        <Loginpage />
      </div>
      <div className="waller">
        <div className="wrapper">
          <div>
            <h1>Balance: {balance}</h1>
          </div>
          <div className="inputs-btn">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
          <div >
            <button onClick={handleTopUp} className="inputs-btn2">Top Up</button>
            <button onClick={handleWithdrawal} className="inputs-btn2">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
};
render(<App />, document.getElementById("app"));
