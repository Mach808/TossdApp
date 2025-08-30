import React, { useState } from 'react'
import Game from './Components/Game'
import Wallet from './Components/Wallet/Wallet'

const App = () => {
  const [state, setState] = useState({
    contract: null,
    web3: null,
  })
  const saveState = (state) => {
    console.log(state);
    setState(state);
  }
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-300 to-teal-200 p-5">
      {/* Header */}
      <header className="text-center font-bold text-5xl mb-6">
        Welcome to TossDApp
      </header>

      {/* Wallet + Game */}
      <div className="flex flex-col items-center gap-10">
        <Wallet saveState={saveState} />
        <Game state={state} />
      </div>
    </div>

  )
}

export default App