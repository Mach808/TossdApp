import React, { useState } from "react";

const sides = ["heads", "tails"];

export default function Game({ state }) {
  const [userGuess, setUserGuess] = useState(null);
  const [coinSide, setCoinSide] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [betAmount, setBetAmount] = useState(""); // 💰 user input

  const handleGuess = (guess) => {
    setUserGuess(guess);
    setResult(null);
    setCoinSide(null);
  };

  const placeBet = async () => {
    if (!betAmount || !userGuess) return alert("Enter bet and pick a side!");
    if (!state.web3 || !state.contract) return alert("Wallet not connected");

    try {
      const accounts = await state.web3.eth.getAccounts();

      // heads = 0, tails = 1
      const choice = userGuess === "heads" ? 0 : 1;

      // ✅ Check contract balance first
      const balanceWei = await state.web3.eth.getBalance(state.contract.options.address);
      const balanceEth = state.web3.utils.fromWei(balanceWei, "ether");

      if (parseFloat(betAmount) * 2 > parseFloat(balanceEth)) {
        return alert("Bet too high! Contract cannot cover double your winnings.");
      }

      // Send bet
      await state.contract.methods.Game(choice).send({
        from: accounts[0],
        value: state.web3.utils.toWei(betAmount, "ether"),
      });

      // Local toss animation for UX
      tossCoin();
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };


  const tossCoin = () => {
    setIsFlipping(true);
    setResult(null);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * 2);
      setCoinSide(sides[idx]);
      setIsFlipping(false);
      setResult(userGuess === sides[idx] ? "You Won!" : "You Lost!");
    }, 1100);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6">Coin Toss Game</h2>

      {/* Input bet */}
      <input
        type="number"
        placeholder="Enter bet (ETH)"
        className="mb-4 px-4 py-2 border rounded-lg text-center"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
        disabled={isFlipping}
      />

      {/* Guess buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full ${userGuess === "heads" ? "bg-blue-500 text-white" : "bg-white"
            }`}
          onClick={() => handleGuess("heads")}
        >
          Heads
        </button>
        <button
          className={`px-6 py-2 rounded-full ${userGuess === "tails" ? "bg-blue-500 text-white" : "bg-white"
            }`}
          onClick={() => handleGuess("tails")}
        >
          Tails
        </button>
      </div>

      {/* Coin */}
      <div className="relative w-32 h-32 mb-8 perspective-800">
        <div
          className={`transition-transform duration-1000 ease-in-out w-full h-full rounded-full bg-yellow-300 shadow-xl flex items-center justify-center text-2xl font-bold absolute coin
            ${isFlipping ? "rotateY-1800" : coinSide === "tails" ? "rotateY-180" : "rotateY-0"}
          `}
        >
          {(!isFlipping && coinSide) || (isFlipping ? "🪙" : "?")}
        </div>
      </div>

      {/* Place bet */}
      <button
        className={`px-8 py-2 bg-teal-500 text-white rounded-full shadow ${!userGuess || !betAmount || isFlipping ? "opacity-50 cursor-not-allowed" : ""
          }`}
        disabled={!userGuess || !betAmount || isFlipping}
        onClick={placeBet}
      >
        Place Bet & Flip
      </button>

      {result && (
        <div
          className={`mt-6 text-xl font-bold ${result === "You Won!" ? "text-green-600" : "text-red-500"
            }`}
        >
          {result}
        </div>
      )}
    </div>
  );
}
