import { Box, Heading, Text, VStack, Avatar, SimpleGrid } from '@chakra-ui/react';

const ProfileDetail = ({ label, value }) => (
  <Box>
    <Text fontSize="sm" color="gray.400">{label}</Text>
    <Text fontSize="lg">{value}</Text>
  </Box>
);

const Profile = () => {
  return (
    <Box>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" bg="gray.800" p={8} borderRadius="lg">
        <VStack spacing={4} mb={{ base: 6, md: 0 }} mr={{ md: 10 }}>
          <Avatar 
            size="2xl" 
            name="Abdul Bari" 
            src="https://bit.ly/dan-abramov" // Placeholder image
          />
          <Button size="sm">Change Picture</Button>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
          <ProfileDetail label="Name" value="Arun B" />
          <ProfileDetail label="Registration Number" value="23BCE0001" />
          <ProfileDetail label="Course" value="B.Tech - Computer Science" />
          <ProfileDetail label="Email" value="arun.b2023@vitstudent.ac.in" />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

// We need to import Flex, Button, and Avatar for the above code to work
import { Flex, Button } from '@chakra-ui/react';

export default Profile;