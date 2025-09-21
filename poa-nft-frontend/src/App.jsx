import { useState } from 'react';
import { ethers } from 'ethers';
import { contractAddress, abi } from './constants.js';

function App() {
  const [account, setAccount] = useState(null);
  const [contractInfo, setContractInfo] = useState({ name: '', symbol: '' });

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error("Error connecting wallet", error);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  const getContractInfo = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, abi, provider);
      try {
        const name = await contract.name();
        const symbol = await contract.symbol();
        setContractInfo({ name, symbol });
      } catch (error) {
        console.error("Error fetching contract info", error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Proof of Attendance NFT</h1>
      {account ? (
        <div>
          <h3>Wallet Connected:</h3>
          <p>{account}</p>
          <button onClick={getContractInfo}>Get Contract Info</button>
          {contractInfo.name && (
            <div>
              <p><strong>Contract Name:</strong> {contractInfo.name}</p>
              <p><strong>Symbol:</strong> {contractInfo.symbol}</p>
            </div>
          )}
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;