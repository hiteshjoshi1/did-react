import React, { useState, useEffect } from "react";
import {
  AccountData,
  ContractData,
  ContractForm
} from "drizzle-react-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "./logo.png";

export default props => {

  useEffect(() => {
    if (props.SimpleStorage && props.SimpleStorage.initialized) {
      console.log("got all events", props.SimpleStorage.events);
    }
  }, [props]);

  return (
    <div className="App">
      <ToastContainer />
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>DID explorer</h1>
        <p>View your DID with the DApp</p>
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <AccountData accountIndex={0} units="ether" precision={3} />
      </div>

      <div className="section">
        <h2>DIDRegistry</h2>
        {/* <p>
        This shows a simple ContractData component with no arguments, along with
        a form to set its value.
      </p> */}
        <p>
          <strong>Stored Value: </strong>
          <ContractData contract="SimpleStorage" method="storedData" />
        </p>
        <ContractForm contract="SimpleStorage" method="set" />
        <strong>Change Owner: </strong>
        <ContractForm contract="EthereumDIDRegistry" method="changeOwner" />
        <strong>Identity Owner: </strong>
        <ContractData
          contract="EthereumDIDRegistry"
          method="identityOwner"
          methodArgs={[props.account, { from: props.account }]}
        />
      </div>
    </div>
  );
};
