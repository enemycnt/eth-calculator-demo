import React from "react";
// import logo from "./logo.svg";
// import "./App.css";


import { createGlobalStyle, ThemeProvider } from 'styled-components';

// @ts-ignore
import { styleReset } from 'react95';
// pick a theme of your choice
// @ts-ignore
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
// @ts-ignore
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// @ts-ignore
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
// @ts-ignore
import DigitalDisplay from './fonts/Digital-Display.woff2'

import { Symfoni } from "./hardhat/SymfoniContext";

import { Calculator } from "./components/Calculator";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }

  @font-face {
    font-family: 'DigitalDisplay';
    src: url('${DigitalDisplay}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif' !important;
  }
  ${styleReset}
`;



function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Symfoni>
          <Calculator />
        </Symfoni>
      </ThemeProvider>
    </div>
  );
}

export default App;
