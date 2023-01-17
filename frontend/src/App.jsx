import { useEffect, useState } from "react";

import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import uniAbi from "./abi/Uniswap.json";
import { ethers } from "ethers";
const UNISWAP_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
// import { useSigner } from "wagmi";
import { useProvider } from "wagmi";
import { useAccount } from "wagmi";
function App() {
  const [weth, setWeth] = useState("");

  const provider = useProvider();
  const uni = new ethers.Contract(UNISWAP_ADDRESS, uniAbi, provider); // address, abi, provider/signer

  useEffect(() => {
    async function load() {
      setWeth(await uni.WETH());
    }

    load();
  });
  return (
    <div className="App">
      <div>
        <a href="https://www.uwblockchain.ca/" target="_blank">
          <img src="/icon.webp" className="logo" alt="UWBC" />
        </a>
      </div>
      <h1>UW Blockchain Router</h1>
      <ConnectButton className="connect" />
      <h3>{weth}</h3>
    </div>
  );
}

export default App;
