const { expect } = require("chai");
const { hre, ethers } = require("hardhat");

let counter;

describe("Counter", function () {
  async function init() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
    console.log("counter:" + counter.address);
  }

  before(async function () {
    await init();
  });

  it("basic test", async function () {
    expect(await counter.counter()).to.equal(0);
  });

  it("owner counter", async function () {
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(1);
  });

  it("not owner counter", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    expect(await counter.connect(otherAccount).count()).to.be.rejectedWith(
      "Not Owner"
    );
  });
});
