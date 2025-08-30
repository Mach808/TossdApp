import React, { useState } from 'react'
import ABI from "./ABI.json"
import Web3 from "web3"

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true)
  const [network, setNetwork] = useState("")

  const init = async () => {
    if (!window.ethereum) {
      alert("Metamask not detected");
      return;
    }
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Get network ID
      const chainId = await web3.eth.getChainId();
      let networkName = "Unknown";

      switch (chainId) {
        case 1: networkName = "Ethereum Mainnet"; break;
        case 5: networkName = "Goerli Testnet"; break;
        case 11155111: networkName = "Sepolia Testnet"; break;
        case 17000: networkName = "Holesky Testnet"; break;
        case 31337: networkName = "Hardhat Localhost"; break;
        default: networkName = `Chain ID: ${chainId}`;
      }

      setNetwork(networkName);

      const contract = new web3.eth.Contract(
        ABI,
        "0x197c7Dcdb012dAE175Fb61A44Ff6eeF589F039a5"
      );

      const balanceWei = await web3.eth.getBalance(contract.options.address);
      const balanceEth = web3.utils.fromWei(balanceWei, "ether");
      console.log(`Contract Balance: ${balanceEth} ETH`);

      setConnected(false);
      saveState({ web3: web3, contract: contract, network: networkName })
      window.contract = contract; // make it available in browser console
      window.web3 = web3;

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='flex flex-col items-center p-5 gap-3'>
      <button
        className='hover:cursor-grab border p-5 rounded-lg'
        onClick={init}
        disabled={!connected}
      >
        {connected ? "Connect Metamask" : "Connected"}
      </button>

      {network && <p className='text-sm text-gray-700'>Network: {network}</p>}
    </div>
  )
}

export default Wallet
