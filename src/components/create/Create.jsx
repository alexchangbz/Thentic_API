import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './create.css'

const Create = () => {
    const [data, setData] = useState({name: "", symbol: ""})
    const [contract, setContract] = useState({request_id: "", transaction_url: ""})
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const confirmContract = () => {
        setError("")
        if (data.name === "" || data.symbol === "") {
            setError("Input cannot be empty!")
            return
        }
        axios.post('https://thentic.tech/api/nfts/contract', {
            key: 'EWy7vNwerkoOBDihNEjG7NLi5lhzE9eQ',
            chain_id: '97',
            name: 'My NFT Contract',
            short_name: 'MNC'
        }).then(
        (response) => {
            console.log("success", response.data)
            setContract({
            request_id: response.data.request_id,
            transaction_url: response.data.transaction_url
            })
        }
        ).catch(err => {
        console.log("fail to connect to API", err)
        })
    }

    return (
        <div className="create-container">
            <div className="header">
                <h1>Generate your Smart Contract</h1>
                <h4>{error}</h4>
                <form>
                    <div className="form-control">
                        <label htmlFor="contract-name">Smart Contract Name:</label>
                        <input type="text" id="contract-name" name="name" onChange={(e) => handleChange(e)} placeholder="Smart Contract Name" />
                    </div>
                    
                    <div className="form-control">
                        <label htmlFor="contract-name">Smart Contract Symbol:</label>
                        <input type="text" id="contract-name" name="symbol" onChange={(e) => handleChange(e)} placeholder="Smart Contract Symbol" />
                    </div>
                </form>
                <button onClick={confirmContract} className="btn">Request Smart Contract</button>
            </div>

            <div className="result-container">
                {
                    contract.request_id ? (
                        <div className="result">
                            <span>Request ID: {contract.request_id}</span>
                            <a href={contract.transaction_url} target="_blank" rel="noopener noreferrer" className='btn'>Create Contract</a>
                            <iframe src={contract.transaction_url} height={350} scrolling="no" frameborder="0"></iframe>
                        </div>
                    ) : (
                        <div className="result">
                            <p>Result will be displayed here</p>
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default Create