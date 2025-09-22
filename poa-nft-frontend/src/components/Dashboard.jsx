// src/components/Dashboard.jsx
import { useState } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../constants.js'; // <-- Fix is here
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast'; // <-- Correct new location

const Dashboard = ({ account, provider, setAccount }) => {
  const toast = useToast();

  // State and function for contract info
  const [contractInfo, setContractInfo] = useState(null);
  const [isFetchingInfo, setIsFetchingInfo] = useState(false);

  const getContractInfo = async () => {
    setIsFetchingInfo(true);
    try {
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      const name = await contract.name();
      const symbol = await contract.symbol();
      setContractInfo({ name, symbol });
    } catch (error) {
      console.error("Error fetching contract info:", error);
      toast({
        title: "Error",
        description: "Could not fetch contract info.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsFetchingInfo(false);
    }
  };
  
  const handleDisconnect = () => {
    setAccount(null);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Flex mb={8} alignItems="center">
        <Box>
          <Text color="gray.400">Wallet Connected</Text>
          <Text fontWeight="bold" fontSize="sm">{`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</Text>
        </Box>
        <Spacer />
        <Button onClick={handleDisconnect} colorScheme="gray">Disconnect</Button>
      </Flex>

      {/* Contract Info Section */}
      <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="gray.800">
          <Heading as="h2" size="lg" mb={6}>Contract Details</Heading>
           <Button
              onClick={getContractInfo}
              isLoading={isFetchingInfo}
              loadingText="Fetching..."
              colorScheme="teal"
              size="lg"
              w="100%"
            >
              Get Contract Info
            </Button>
          {contractInfo && (
              <Box mt={6} p={4} bg="gray.700" borderRadius="md">
                  <Text fontSize="lg"><strong>Name:</strong> {contractInfo.name}</Text>
                  <Text fontSize="lg"><strong>Symbol:</strong> {contractInfo.symbol}</Text>
              </Box>
          )}
      </Box>
    </Container>
  );
};

export default Dashboard;