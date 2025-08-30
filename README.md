# 🎲 Coin Toss Betting DApp  

A decentralized **Heads or Tails** game built on Ethereum.  
Players can bet ETH on a coin toss, and if they win, they receive **double their bet** instantly.  

This project demonstrates the use of **Solidity smart contracts**, **React frontend**, and **Web3.js** integration with MetaMask.  

---
## ⚙️ How It Works
1. Connect wallet via MetaMask  
2. Choose heads or tails and place a bet  
3. Smart contract determines the result  
4. If you win → receive double your bet 🎉  
5. If you lose → bet goes to contract  

##  Features  
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
/contracts
└── Toss.sol # Solidity smart contract
```

## Project Setup

Follow these steps to set up and run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/coin-toss-dapp.git
cd coin-toss-dapp
```

## 2. Install dependencies 
```bash
npm install
```
## 3. Configure environment

1. Create a .env file in the root folder.
2. Add your environment variables (example):

```bash
REACT_APP_CONTRACT_ADDRESS=0xYourContractAddress
REACT_APP_NETWORK=sepolia
```

## 4. Deploy smart contract

Open the contract in Remix IDE or deploy using Hardhat/Truffle.
Copy the deployed contract address and update it in .env.

## 5. Run the dApp
```bash
cd client
npm run dev
```
The app will be available at http://localhost:3000.


## 🎥 Demo

### Live Demo
You can try out the deployed version here:  
👉 [Coin Toss DApp Demo]([https://your-demo-link.com](https://tossd-app.vercel.app/))

### Screenshots
#### 1. Home Page  
<img width="600" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/94f81c50-4470-4e8a-b5ed-77f71633dde9" />

#### 2. Connected Wallet  
<img src="https://github.com/user-attachments/assets/994e927f-d321-4419-b152-605272ae0826" alt="Home Page" width="600"/>

#### 3. Gameplay (Win/Lose)  
<img width="600" alt="image" src="https://github.com/user-attachments/assets/d3ff0335-a7b3-448a-aaf3-b78ba0c47ea2" />

---

##  Future Improvements
- Add betting history tracking  
- Multi-player support  
- UI/UX enhancements  
- Support more tokens (USDC, DAI, etc.)  




