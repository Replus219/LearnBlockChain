// set proxy
const proxyUrl = "http://127.0.0.1:7890";
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent(proxyUrl);
setGlobalDispatcher(proxyAgent);

const { ethers } = require("hardhat");
//验证合约
async function main() {
  console.log("Verifing Contract……");
  try {
    await run("verify:verify", {
      address: "0x2baB31b8BB71AC85b768625C40A60C3f44E89349",
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(e);
    }
  }
}

//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
