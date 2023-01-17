import { useEffect, useState } from "react";

import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import uniAbi from "./abi/Uniswap.json";
import { ethers, BigNumber, FixedNumber } from "ethers";

import { erc20ABI, useSigner } from "wagmi"; // Used to send transactions from currently connected wallet
import { useProvider } from "wagmi";
import { useAccount } from "wagmi"; // Info about currently connected wallet

const UNISWAP_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const INPUT_TOKEN = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH
const OUTPUT_TOKEN = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);
  const [inputDecimals, setInputDecimals] = useState(0);
  const [outputDecimals, setOutputDecimals] = useState(0);

  const provider = useProvider();
  const uni = new ethers.Contract(UNISWAP_ADDRESS, uniAbi, provider); // address, abi, provider/signer

  // Get swap result
  useEffect(() => {
    async function getOutput() {
      const inputMultiplier = BigNumber.from(10).pow(inputDecimals);
      const scaledInput = BigNumber.from(input).mul(inputMultiplier);

      const outputMultiplier = BigNumber.from(10).pow(outputDecimals);
      const unscaledOutput = (await uni.getAmountsOut(scaledInput, [INPUT_TOKEN, OUTPUT_TOKEN])).at(-1);

      const scaledOutput = unscaledOutput.div(outputMultiplier);

      setOutput(numberWithCommas(scaledOutput));
    }

    getOutput();
  }, [input]);

  // Get decimals of input and output token
  useEffect(() => {
    async function load() {
      const inputToken = new ethers.Contract(INPUT_TOKEN, erc20ABI, provider);
      const outputToken = new ethers.Contract(OUTPUT_TOKEN, erc20ABI, provider);
      const inputDecimals = await inputToken.decimals();
      const outputDecimals = await outputToken.decimals();

      setInputDecimals(inputDecimals);
      setOutputDecimals(outputDecimals);
    }
    load();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://www.uwblockchain.ca/" target="_blank">
          <img src="/icon.webp" className="logo" alt="UWBC" />
        </a>
      </div>
      <h1>UW Blockchain Router</h1>
      <ConnectButton className="connect" />
      <div className="convertArea">
        <h3>
          Swap <input type="number" value={input} onChange={(event) => setInput(event.target.value)}></input> ETH on Uniswap v2, get {output} USDC
        </h3>
      </div>
    </div>
  );
}

export default App;
