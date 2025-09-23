import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const checkIfWalletIsConnected = async () => {
    // This function logic remains the same
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setProvider(provider);
        }
      } catch (error) {
        console.error("Error checking for wallet connection:", error);
      }
    }
  };

  // By commenting this out, the app will no longer auto-connect on page load.
  useEffect(() => {
    // checkIfWalletIsConnected(); 
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
      <Navbar account={account} connectWallet={connectWallet} setAccount={setAccount} /> 
      
      {account ? (
        <Dashboard account={account} setAccount={setAccount} />
      ) : (
        <LandingPage connectWallet={connectWallet} /> 
      )}
    </Box>
  );
}

export default App;