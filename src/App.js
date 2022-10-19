import { useState } from "react";
import { MetafiProvider, chains, RegisterToken } from "@metafi/metafi-react-package";
import MainComponent from "./mainComponent.js";
import { themes } from "./themes.js";
import React from "react";

// Define your custom tokens
const wethToken = RegisterToken(
  'Wrapped Ethereum', 
  'goerliWETH', 
  chains.goerli, 
  'https://d2qdyxy3mxzsfv.cloudfront.net/images/logo/ethereum.png',  
  '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
  18,
)

function App() {
  const [theme, setTheme] = useState(0);

  const selectTheme = () => {
    setTheme(document.getElementById("themeList").value);
  };

  return (
    <MetafiProvider
      apiKey={"test-633d3c674d3e0d60aa0b1904-ddu0HV0tHP9WR3qN"}
      secretKey={"junZbAAJgfSSn6B0pfJf2C95"}
      supportedChains={[chains.goerli]}
      options={themes[theme]}
      customTokens={[wethToken]}
    >
      <div className="App">
        <header className="App-header">
          <MainComponent selectTheme={selectTheme} />
        </header>
      </div>
    </MetafiProvider>
  );
}

export default App;
