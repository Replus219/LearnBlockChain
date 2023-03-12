require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-abi-exporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    localdev: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      gas: 1200000,
      // accounts: {
      //   mnemonic: "topple pattern attack focus shove toddler capable hour torch sponsor pact window interest mesh main grit file welcome raise lava cancel antique whale vehicle",
      // },
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ivF-3vu8tt-fIqt2OcWpzc4w5oK3fLyW",
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },
  //定义abi导出风格格式
  abiExporter: {
    path: "./deployment/abi",
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: true,
  },
};
