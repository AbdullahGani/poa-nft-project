// src/components/LandingPage.jsx
import { Container, Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

// The 'connectWallet' function is passed down as a prop from App.jsx
const LandingPage = ({ connectWallet }) => {
  return (
    <Container maxW="container.md" centerContent py={20}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" fontWeight="bold">
          Immortalize Your Experiences
        </Heading>
        <Text fontSize="xl" color="gray.400">
          Claim your unique Proof of Attendance NFT for every event you attend.
          Secure, verifiable, and truly yours.
        </Text>
        <Button
          colorScheme="purple"
          size="lg"
          onClick={connectWallet}
          boxShadow="0px 10px 30px -10px rgba(138, 43, 226, 0.6)"
        >
          Connect Your Wallet to Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default LandingPage;