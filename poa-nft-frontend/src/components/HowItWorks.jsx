import { Box, Heading, Text, SimpleGrid, VStack, Flex } from '@chakra-ui/react';

// A small, reusable component for rendering each step
const Step = ({ number, title, text }) => {
  return (
    <VStack spacing={4} textAlign="center">
      {/* The numbered circle */}
      <Flex
        w={12}
        h={12}
        align="center"
        justify="center"
        rounded="full"
        bg="teal.400"
        color="white"
        fontWeight="bold"
        fontSize="xl"
      >
        {number}
      </Flex>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color={'gray.600'}>{text}</Text>
    </VStack>
  );
};

// The main component for this section
function HowItWorks() {
  return (
    <Box p={10} py={20} bg={'gray.50'}>
      {/* Section Header */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="xl">
          A Simple, Secure Process
        </Heading>
        <Text color={'gray.600'} maxW={'2xl'}>
          Getting your Proof of Attendance NFT is easy. Follow these three steps to secure your verifiable credential on the blockchain.
        </Text>
      </VStack>

      {/* Grid of steps */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Step
          number={1}
          title={'Register & Check-In'}
          text={'Use your wallet to register for an event and verify your presence with our secure two-step check-in process.'}
        />
        <Step
          number={2}
          title={'Confirm Attendance'}
          text={'After the event, your attendance is confirmed by the organizer, making you eligible to claim your reward.'}
        />
        <Step
          number={3}
          title={'Claim Your PoA NFT'}
          text={'Return to your dashboard and mint your unique NFT as an immutable record of your attendance on the blockchain.'}
        />
      </SimpleGrid>
    </Box>
  );
}

export default HowItWorks;