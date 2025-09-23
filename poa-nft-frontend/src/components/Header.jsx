import { Flex, Box, Text, Heading } from '@chakra-ui/react';

// A helper object to store the details for each view
const viewDetails = {
  gallery: {
    title: 'My PoA NFT Gallery',
    subtitle: 'View your collection of attendance credentials.',
  },
  events: {
    title: 'Upcoming Events',
    subtitle: 'Register for an event to become eligible for a PoA NFT.',
  },
  profile: {
    title: 'Manage Profile',
    subtitle: 'View and manage your personal information.',
  },
  admin: {
    title: 'Admin Minting Panel',
    subtitle: 'Mint a new Proof of Attendance NFT to an attendee\'s wallet.',
  }
};

// The Header component now accepts a 'currentView' prop
function Header({ currentView }) {
  // Select the correct details based on the prop, defaulting to the gallery
  const details = viewDetails[currentView] || viewDetails.gallery;

  return (
    <Flex
      as="header"
      w="full"
      p={5}
      alignItems="center"
      borderBottomWidth="3px"
      borderColor="gray.700"
    >
      <Box>
        {/* The Heading and Text now use the dynamic 'details' object */}
        <Heading as="h2" size="lg">{details.title}</Heading>
        <Text color="gray.400" mt={2}>{details.subtitle}</Text>
      </Box>
    </Flex>
  );
}

export default Header;