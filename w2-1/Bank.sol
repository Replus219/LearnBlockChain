// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank{
    //记录地址余额
    mapping (address => uint256) private addrToBalance;
    

    
    //存款
    function deposit() public payable{
        require(msg.value > 0,"Cannot deposit < 0");
        addrToBalance[msg.sender] = msg.value;
    }

    //取款
    function withdraw(uint256 amountOut)public {
        //判断不为0且小于等于余额
        require(amountOut > 0,"Cannot withdraw < 0");
        require(amountOut <= addrToBalance[msg.sender],"Cannot withdraw > balance");
        //取回
        payable(msg.sender).transfer(amountOut);
        //修改余额
        addrToBalance[msg.sender] = addrToBalance[msg.sender] - amountOut;


    }
    //查询自己余额
    function checkBalanceOfSelf() public view returns(uint256){
        uint256 balance = addrToBalance[msg.sender];
        return balance;
    }







}