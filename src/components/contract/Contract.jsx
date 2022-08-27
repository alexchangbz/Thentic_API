import React, { useState } from 'react'
import axios from 'axios'
import "./contract.css"

const Contract = () => {
  const [response, setResponse] = useState("")

  const getContract = () => {
    axios.get("https://thentic.tech/api/contracts", {
      key: "TIvTUQOM7p03pNBRFHfVCmsRCcsokMQg",
      chain_id: "97"
    }).then((response) => {
      console.log("success", response.data)
      setResponse(response.data)
    }).catch(err => {
      console.log("Fail to connect", err)
    })
  }

  return (
    <div className="container">
      <hr className='line' />
      <div className="contract-header">
        <h1>My Contract</h1>
      </div>
      <div className="contract-lists">
        <button onClick={getContract} className="btn">Get Contract</button>
        <p>{response}</p>
      </div>
    </div>
  )
}

export default Contract