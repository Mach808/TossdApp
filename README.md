# 🎲 Coin Toss Betting DApp  

A decentralized **Heads or Tails** game built on Ethereum.  
Players can bet ETH on a coin toss, and if they win, they receive **double their bet** instantly.  

This project demonstrates the use of **Solidity smart contracts**, **React frontend**, and **Web3.js** integration with MetaMask.  

---

## 🚀 Features  
- 🔗 **MetaMask Integration** – Connect wallet and play directly from browser.  
- 💰 **Bet & Win** – Double your ETH if your guess is correct.  
- 🔒 **Secure Smart Contract** – Handles bets and payouts safely.  
- 👨‍💼 **Owner Controls**  
  - Fund the contract.  
  - Withdraw specific amounts or drain all funds.  
- 🎨 **Frontend (React + Tailwind CSS)**  
  - Smooth coin flip animation.  
  - Real-time bet results.  
- ⚠️ **Safe Bets** – Players cannot bet more than the contract can cover (checked in frontend).  

---

## 🛠️ Tech Stack  
- **Frontend:** React, Tailwind CSS, Web3.js  
- **Smart Contract:** Solidity (v0.8.28), Remix/Hardhat  
- **Blockchain:** Ethereum Testnet (Sepolia / Holesky / Hardhat Localhost)  

---

## 📂 Project Structure  

```bash
/src
├── components
│ ├── Wallet.jsx # Connects MetaMask, saves contract state
│ └── Game.jsx # Main coin toss betting game
├── ABI.json # Compiled contract ABI
└── App.jsx # Main entry point
```
