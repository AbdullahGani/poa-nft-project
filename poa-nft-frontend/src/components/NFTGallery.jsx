import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Box, SimpleGrid, Image, Text, Spinner, Center, Heading } from '@chakra-ui/react';
import { contractAddress, contractABI } from '../constants'; // Make sure this path is correct

// Helper function to convert IPFS URI to a usable HTTPS URL
const formatIpfsUrl = (ipfsUri) => {
    if (!ipfsUri || !ipfsUri.startsWith('ipfs://')) {
        return ipfsUri;
    }
    const cid = ipfsUri.substring(7);
    return `https://ipfs.io/ipfs/${cid}`; // Using a public gateway
};

const NFTGallery = ({ userAddress }) => {
    const [nfts, setNfts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNfts = async () => {
            if (!userAddress || !window.ethereum) return;

            setIsLoading(true);
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = new ethers.Contract(contractAddress, contractABI, provider);

                const balance = await contract.balanceOf(userAddress);
                const ownedNfts = [];

                for (let i = 0; i < balance; i++) {
                    const tokenId = await contract.tokenOfOwnerByIndex(userAddress, i);
                    const tokenURI = await contract.tokenURI(tokenId);
                    
                    const metadataUrl = formatIpfsUrl(tokenURI);
                    const response = await fetch(metadataUrl);
                    const metadata = await response.json();

                    ownedNfts.push({
                        tokenId: tokenId.toString(),
                        name: metadata.name,
                        description: metadata.description,
                        imageUrl: formatIpfsUrl(metadata.image),
                    });
                }
                setNfts(ownedNfts);
            } catch (error) {
                console.error("Failed to fetch NFTs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNfts();
    }, [userAddress]); // This effect runs when the component mounts and whenever userAddress changes

    if (isLoading) {
        return <Center p={10}><Spinner size="xl" /></Center>;
    }

    if (nfts.length === 0) {
        return (
            <Center p={10}>
                <Text fontSize="lg" color="gray.500">You don't own any PoA NFTs yet!</Text>
            </Center>
        );
    }

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
  {nfts.map((nft) => (
    // Update this Box for the dark theme
    <Box 
      key={nft.tokenId} 
      bg="gray.800" // <-- Set background color
      borderRadius="lg" 
      overflow="hidden"
      borderWidth="1px" // Optional: for a subtle border
      borderColor="gray.700" // Optional
    >
      <Image src={nft.imageUrl} alt={nft.name} fit="cover" h="200px" w="full" />
      <Box p="6">
        <Heading as="h4" size="md" mb={2}>{nft.name}</Heading>
        <Text noOfLines={3} color="gray.400">{nft.description}</Text>
      </Box>
    </Box>
  ))}
</SimpleGrid>
    );
};

export default NFTGallery;