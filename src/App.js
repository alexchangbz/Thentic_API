import React, { useState, useEffect } from 'react'
import './App.css';
import Contract from './components/contract/Contract';
import Create from './components/create/Create';

function App() {
  const [metamask, setMetamask] = useState(false)

  useEffect(() => {
    const { ethereum } = window
    const getMetamask = async () => {
      if(!ethereum) {
        setMetamask(false)
      }
      setMetamask(true)
    }
    getMetamask()
  }, [])
  

  return (
    <div className="App">
      {metamask ? (
        <>
          <Create />
          <Contract />
        </>
      ) : (
        <>
          <h3>Please install metamask</h3>
        </>
      )}
        
    </div>
  );
}

export default App;
