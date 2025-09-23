import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import NFTGallery from './NFTGallery';
import AdminMinter from './AdminMinter';

const ADMIN_ADDRESS = "YOUR_ADMIN_WALLET_ADDRESS_HERE";

function Dashboard({ account, setAccount }) {
  const [view, setView] = useState('gallery');
  const isAdmin = account.toLowerCase() === ADMIN_ADDRESS.toLowerCase();

  const renderView = () => {
    switch (view) {
      case 'gallery':
        return <NFTGallery userAddress={account} />;
      case 'admin':
        return isAdmin ? <AdminMinter /> : <p>Access Denied</p>;
      default:
        return <NFTGallery userAddress={account} />;
    }
  };

  return (
    // The main Flex container now has the dark theme applied
    <Flex bg="gray.900" color="gray.100" minH="100vh">
      <Sidebar isAdmin={isAdmin} setView={setView} />

      <Box flex="1" ml="250px">
        <Header account={account} setAccount={setAccount} />
        
        <Box p={8}>
          {renderView()}
        </Box>
      </Box>
    </Flex>
  );
}

export default Dashboard;