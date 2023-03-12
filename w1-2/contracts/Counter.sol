// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint256 public counter;
    address public owner;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    function count() public {
        require(msg.sender == owner, "Not Owner");
        counter = counter + 1;
    }
}
