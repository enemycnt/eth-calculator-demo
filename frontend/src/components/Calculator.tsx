import React, { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "./../hardhat/SymfoniContext";
import {
  BigNumberish,
  parseFixed,
  formatFixed,
} from "@ethersproject/bignumber";
import styled from "styled-components";
// @ts-ignore

import {
  TextField,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Fieldset,
  Radio,
  // @ts-ignore
} from "react95";

const Wrapper = styled.div`
  padding: 5rem;
  background: teal;
  height: 100%;
  box-sizing: border-box;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 480px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
  .radio-wrap {
    margin-right: 20px;
  }
  .digital-display {
    font-family: "DigitalDisplay", monospace;
    /* text-align: right; */
    font-size: 30px;
    color: red;
    background: black;
    padding: 0px 15px;
    line-height: 54px;
  }
`;

const options = [
  { value: "add", label: "+ Add" },
  { value: "sub", label: "− Sub" },
  { value: "mul", label: "× Mul" },
  { value: "div", label: "÷ Div" },
];

interface Props {}

export const Calculator: React.FC<Props> = () => {
  const calculator = useContext(CalculatorContext);
  const [message, setMessage] = useState("0");
  const [xVar, setXVar] = useState("135.305999368893231616");
  const [yVar, setYVar] = useState("135.305999368893231616");
  const [operation, setOperation] = useState("add");
  useEffect(() => {
    const doAsync = async () => {
      if (!calculator.instance) return;
      console.log("Greeter is deployed at ", calculator.instance.address);
    };
    doAsync();
  }, [calculator]);

  const handleCompute = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!calculator.instance) throw Error("Calculator instance not ready");
    if (calculator.instance) {
      try {
        const x: BigNumberish = parseFixed(xVar, 18);
        const y: BigNumberish = parseFixed(yVar, 18);
        const tx = await calculator.instance[operation](x, y);
        const result = formatFixed(tx, 18);
        setMessage(result);
      } catch (e) {
        setMessage("ERROR");
      }
    }
  };

  const handleReset = () => {
    console.log("xx");
    setXVar("0");
    setYVar("0");
    setMessage("0")
  };
  return (
    <Wrapper>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>PRBMathSD59x18 Calculator</span>
          <Button onClick={handleReset} >
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>
          <p>Var X:</p>
          <TextField
            value={xVar}
            onChange={(e: any) => setXVar(e.target.value)}
          />
          <br />
          <Fieldset label="Operations">
            {options.map((option, i) => (
              <Radio
                className="radio-wrap"
                key={option.value}
                checked={operation === option.value}
                onChange={(e: any) => setOperation(option.value)}
                value={option.value}
                label={option.label}
                name="options"
              />
            ))}
          </Fieldset>
          <br />
          <p>Var Y:</p>

          <TextField
            value={yVar}
            onChange={(e: any) => setYVar(e.target.value)}
          />
          <br />
          <div className="digital-display">{message}</div>
          <br />
          <Button onClick={(e: any) => handleCompute(e)}>Compute</Button>
        </WindowContent>
      </Window>
    </Wrapper>
  );
};
