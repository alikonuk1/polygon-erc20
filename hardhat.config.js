require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: `${process.env.MUMBAI_RPC}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    polygon: {
      url: `${process.env.POLYGON_RPC}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_API,
  },
};
