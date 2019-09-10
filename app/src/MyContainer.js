import MyComponent from "./MyComponent";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    SimpleStorage: state.contracts.SimpleStorage,
    EthereumDIDRegistry: state.contracts.EthereumDIDRegistry,
    account: state.accounts[0]
  };
};

const MyContainer = drizzleConnect(MyComponent, mapStateToProps);

export default MyContainer;
