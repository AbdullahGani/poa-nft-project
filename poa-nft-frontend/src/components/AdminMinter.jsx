import { useState } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../constants'; // Ensure this path is correct
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  useToast,
} from '@chakra-ui/react';

// IMPORTANT: Replace this with the IPFS CID for your NFT's metadata JSON file.
const TOKEN_URI = "ipfs://YOUR_METADATA_CID"; 

const AdminMinter = () => {
  const [recipient, setRecipient] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleMint = async () => {
    if (!recipient || !ethers.isAddress(recipient)) {
      toast({ title: 'Invalid Address', description: "Please enter a valid Ethereum wallet address.", status: 'error' });
      return;
    }
    if (!window.ethereum) {
        toast({ title: 'MetaMask not found', status: 'error' });
        return;
    }

    setIsLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const tx = await contract.safeMint(recipient, TOKEN_URI);
      await tx.wait(); // Wait for the transaction to be confirmed on the blockchain

      toast({
        title: 'Mint Successful!',
        description: `Successfully minted a PoA NFT to ${recipient}`,
        status: 'success',
        isClosable: true,
      });
      setRecipient(''); // Clear the input field after success
    } catch (error) {
      console.error("Minting failed:", error);
      toast({
        title: 'Minting Failed',
        description: error.message,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
        <Heading as="h2" size="lg">Admin Minting Panel</Heading>
        <Text color="gray.500" mb={6}>Mint a new Proof of Attendance NFT to an attendee's wallet.</Text>
        <VStack spacing={4} maxW="lg">
            <FormControl isRequired>
                <FormLabel>Recipient Wallet Address</FormLabel>
                <Input
                    placeholder="0x..."
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
            </FormControl>
            <Button
                w="full"
                colorScheme="teal"
                onClick={handleMint}
                isLoading={isLoading}
                loadingText="Minting..."
            >
                Mint NFT
            </Button>
        </VStack>
    </Box>
  );
};

export default AdminMinter;