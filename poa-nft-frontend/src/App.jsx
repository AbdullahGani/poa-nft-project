import { useState, useEffect } from 'react'; // <-- Import useEffect
import { ethers } from 'ethers';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { Box } from '@chakra-ui/react';

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  // Function to check for an existing wallet connection
  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setProvider(provider);
        } else {
          console.log("No authorized account found");
        }
      } catch (error) {
        console.error("Error checking for wallet connection:", error);
      }
    }
  };

  // useEffect runs this function once when the component loads
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        
        setAccount(address);
        setProvider(provider);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <Box>
      {account ? (
        <Dashboard account={account} provider={provider} setAccount={setAccount} />
      ) : (
        <LandingPage connectWallet={connectWallet} />
      )}
    </Box>
  );
}

export default App;