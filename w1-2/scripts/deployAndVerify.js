// set proxy
const proxyUrl = "http://127.0.0.1:7890";
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent(proxyUrl);
setGlobalDispatcher(proxyAgent);

const { ethers } = require("hardhat");
//验证合约
async function verify(contractAddress, args) {
  console.log("Verifing Contract……");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(e);
    }
  }
}
//部署并验证合约
async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  console.log("Deploying");
  const counter = await Counter.deploy();
  await counter.deployed();
  console.log(`Deployed contract to:${counter.address}`);
  await counter.deployTransaction.wait(2);
  await verify(counter.address, []);
}
//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
