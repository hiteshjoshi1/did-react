import SimpleStorage from "./contracts/SimpleStorage.json";
import EthereumDIDRegistry from "./contracts/EthereumDIDRegistry.json";

const options = {
  contracts: [SimpleStorage, EthereumDIDRegistry],
  events: {
    SimpleStorage: ["StorageSet"],
    EthereumDIDRegistry: ["DIDOwnerChanged", "DIDAttributeChanged"]
  },
  polls: {
    accounts: 1500
  }
};

export default options;
