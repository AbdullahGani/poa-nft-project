import { Flex, Box, Text, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Flex
      as="header"
      w="full"
      p={5}
      alignItems="center"
      borderBottomWidth="1px"
      borderColor="gray.700"
    >
      <Box>
        <Heading as="h2" size="lg">My PoA NFT Gallery</Heading>
        <Text color="gray.400">View your collection of attendance credentials.</Text>
      </Box>
    </Flex>
  );
}

export default Header;