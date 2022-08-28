import React, { useState, useEffect } from 'react'
import './App.css';
import Contract from './components/contract/Contract';
import Create from './components/create/Create';
import Navbar from './components/navbar/Navbar';

function App() {

  const [currentAccount, setCurrentAccount] = useState()

  const checkIfWalletIsConnected = async () => {
		const { ethereum } = window
		if (ethereum) {
			console.log('Got the ethereum object')
      const accounts = await ethereum.request({ method: 'eth_accounts' })
		  setCurrentAccount(accounts[0])
		} else {
			console.log('No Wallet found. Connect Wallet')
		}
	}

  const connectWallet = async () => {
    try {
    const { ethereum } = window
    console.log(ethereum)
    if(!ethereum) return ("Please install metamask")      
    const accounts = await ethereum.request({ method: "eth_requestAccounts"})
    setCurrentAccount(accounts[0])
    } catch (error) {
    console.log(error)
    throw new Error("No ethereum object found.")
    }
}

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])  

  return (
    <div className="App">
      {currentAccount ? (
        <>
          <Navbar currentAccount={currentAccount} />
          <Create />
          <Contract />
        </>
      ) : (
        <>
          <h3>Login with Metamask Wallet</h3>
          <button onClick={connectWallet} className="btn">Login</button>
        </>
      )}
    </div>
  );
}

export default App;
