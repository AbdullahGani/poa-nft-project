import { Box, Heading, Text, VStack, SimpleGrid, Button, Flex, Spacer, Tag } from '@chakra-ui/react';

// Static data for our fictional events
const eventsData = [
  {
    title: 'Decentralized AI: The Next Frontier',
    date: 'October 15, 2025',
    seats: 150,
    description: 'Explore the intersection of artificial intelligence and blockchain technology. Learn how decentralization can create more transparent and ethical AI systems.',
  },
  {
    title: 'Quantum Entanglement & Spacetime',
    date: 'November 5, 2025',
    seats: 75,
    description: 'A deep dive into the strange world of quantum physics. This lecture will cover the principles of entanglement and its implications for our understanding of the universe.',
  },
  {
    title: 'The Future of Verifiable Credentials',
    date: 'December 1, 2025',
    seats: 200,
    description: 'Join industry leaders to discuss the evolution of digital identity. This workshop focuses on Soul-Bound Tokens (SBTs) and Proof of Attendance NFTs.',
  },
];

const EventCard = ({ title, date, seats, description }) => (
  <Box p={6} bg="gray.800" borderRadius="lg" borderWidth="1px" borderColor="gray.700">
    <VStack align="start" spacing={4}>
      <Heading size="md">{title}</Heading>
      <Text color="gray.400">{description}</Text>
      <Flex w="full" align="center">
        <VStack align="start" spacing={1}>
          <Text fontSize="sm" color="teal.300">{date}</Text>
          <Tag colorScheme="cyan">{seats} Seats Available</Tag>
        </VStack>
        <Spacer />
        <Button colorScheme="teal" onClick={() => alert('Registration functionality coming soon!')}>
          Click to Register
        </Button>
      </Flex>
    </VStack>
  </Box>
);

const UpcomingEvents = () => {
  return (
    <Box>
      <VStack spacing={6} align="stretch">
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </VStack>
    </Box>
  );
};

export default UpcomingEvents;