const SimpleStorage = artifacts.require("SimpleStorage");
const EthereumDIDRegistry = artifacts.require("EthereumDIDRegistry");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(EthereumDIDRegistry);
};
