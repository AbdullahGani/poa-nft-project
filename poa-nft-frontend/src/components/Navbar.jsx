import { Box, Flex, Image, Spacer, Button, HStack, Tag } from '@chakra-ui/react';
import logoIcon from '../assets/poa-logo.png'; // <-- 1. IMPORT THE IMAGE HERE

// The path '../assets/poa-icon.png' assumes your folders are src/components and src/assets.
// Adjust the path if necessary.

function Navbar({ account, connectWallet, setAccount }) {
  const handleDisconnect = () => {
    setAccount(null);
  };

  const shortenAddress = (address) => `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  return (
    <Flex
      as="nav"
      w="full"
      p={4}
      bg="gray.800"
      color="white"
      align="center"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Box>
        {/* 2. USE THE IMPORTED VARIABLE IN THE SRC ATTRIBUTE */}
        <Image src={logoIcon} alt="PoA Logo" h="60px" />
      </Box>

      <Spacer />

      {account ? (
        <HStack spacing={4}>
          <Tag size="md" colorScheme="teal" borderRadius="full">
            {shortenAddress(account)}
          </Tag>
          <Button onClick={handleDisconnect} colorScheme="red" size="sm">
            Disconnect
          </Button>
        </HStack>
      ) : (
        <Button onClick={connectWallet} colorScheme="teal" size="sm">
          Connect Wallet
        </Button>
      )}
    </Flex>
  );
}

export default Navbar;