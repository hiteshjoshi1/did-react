import SimpleStorage from "./contracts/SimpleStorage.json";
import EthereumDIDRegistry from "./contracts/EthereumDIDRegistry.json";
// import Web3 from "web3";

// // Init contract with Web3
// const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
// web3.eth.getAccounts().then(console.log);
// const contract = new web3.eth.Contract(
//   SimpleStorage.abi,
//   "0x72E034FEF2262EE690Bfa6D04b29EF3dAF0b6683",
//   { data: SimpleStorage.deployedBytecode }
// );

// // Alternative to Drizzle Events
// contract
//   .getPastEvents("allEvents", {
//     filter: { address: "0xe9f304F332bd4c604D2Fbf0F94A5EaE721ba2b12" }
//   })
//   .then(data => console.log("gor all events", data));

const options = {
  contracts: [EthereumDIDRegistry, SimpleStorage], // An instance of a Web3 contract
  events: {
    SimpleStorage: [
      {
        eventName: "StorageSet",
        eventOptions: {
          fromBlock: 0,
          toBlock: "latest"
        }
      }
    ],
    EthereumDIDRegistry: ["DIDOwnerChanged", "DIDAttributeChanged"]
  },
  polls: {
    accounts: 1500
  }
};

export default options;
