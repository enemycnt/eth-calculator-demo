//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";
import "prb-math/contracts/PRBMathSD59x18.sol";

contract Calculator {
  using PRBMathSD59x18 for int256;


  function add(int256 x, int256 y) external pure returns (int256 result) {
    result = x + y;
  }

  function sub(int256 x, int256 y) external pure returns (int256 result) {
    result = x - y;
  }

  function mul(int256 x, int256 y) external pure returns (int256 result) { 
    result = x.mul(y);
  }

  function div(int256 x, int256 y) external pure returns (int256 result) {
    result = x.div(y);
  }

  function pow(int256 x, uint256 y) external pure returns (int256 result) { 
    result = x.pow(y);
  }
}