import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

function Hero({ connectWallet }) {
  return (
    <Flex
      w={'full'}
      h={'90vh'}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'gray.900'} // <-- Updated to the main dark background
      color={'white'}
    >
      <VStack 
        spacing={4}
        textAlign="center"
        maxW={'2xl'}
        p={6}
      >
        <Heading 
          as="h1" 
          size="2xl" 
          fontWeight="bold"
          bgGradient="linear(to-r, teal.300, green.200)"
          bgClip="text"
        >
          Own Your Attendance. Unlock Your Community.
        </Heading>
        <Text fontSize="lg" color={'gray.300'}>
          Claim unique Proof of Attendance NFTs for every event you attend. Build your on-chain resume and gain exclusive access to future opportunities, all verified on the blockchain.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={connectWallet}
          _hover={{ bg: 'teal.500', transform: 'translateY(-2px)', boxShadow: 'lg' }}
        >
          Connect Wallet to Get Started
        </Button>
      </VStack>
    </Flex>
  );
}

export default Hero;