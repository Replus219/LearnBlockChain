// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Count{

    uint256 public counter;

    constructor(){
        counter = 0;
    }

    function add(uint256 x) public {

        counter = counter + x;

    }

    function count() public {

        counter = counter + 1;
    }
}