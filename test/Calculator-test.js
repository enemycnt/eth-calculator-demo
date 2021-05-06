const { BigNumber, parseFixed, formatFixed } = require("@ethersproject/bignumber");
const { expect } = require("chai");

describe("Calculator", function() {

  it("Should return 0.09 once it's changed", async function() {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    const x = parseFixed("0.3", 18)
    const y = parseFixed("0.3", 18)

    const result = await calculator.mul(x, y)
    expect(result).to.equal(parseFixed("0.09", 18));
  });

  it("Should return 0.33 once it's changed", async function() {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    const x = parseFixed("0.3", 18)
    const y = parseFixed("0.03", 18)

    const result = await calculator.add(x, y)
    expect(result).to.equal(parseFixed("0.33", 18));
  });

  it("Should return 0.27 once it's changed", async function() {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    const x = parseFixed("0.3", 18)
    const y = parseFixed("0.03", 18)

    const result = await calculator.sub(x, y)
    expect(result).to.equal(parseFixed("0.27", 18));
  });

  it("Should return 0.0002187 once it's changed", async function() {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    const x = parseFixed("0.3", 18)
    const y = BigNumber.from("7")

    const result = await calculator.pow(x, y)
    expect(result).to.equal(parseFixed("0.0002187", 18));
  });

  it("Should return 10 once it's changed", async function() {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    const x = parseFixed("0.3", 18)
    const y = parseFixed("0.03", 18)

    const result = await calculator.div(x, y)
    expect(result).to.equal(parseFixed("10", 18));
  });


  it("Should return 4,2~ once it's changed", async function() {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();

    const x = parseFixed("0.3", 18)
    const y = parseFixed("0.07", 18)

    const result = await calculator.div(x, y)
    expect(result).to.equal(parseFixed("4.285714285714285714", 18));
  });
  
});
