import { Box, Heading, Text, SimpleGrid, VStack, Icon, HStack } from '@chakra-ui/react';
import { CheckCircleIcon, LockIcon, StarIcon, ViewIcon } from '@chakra-ui/icons';

// A small, reusable component for rendering each feature
const Feature = ({ title, text, icon }) => {
  return (
    <HStack align={'top'} spacing={4}>
      <Box color={'green.400'} px={2}>
        <Icon as={icon} w={6} h={6} />
      </Box>
      <VStack align={'start'}>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </VStack>
    </HStack>
  );
};

// The main component for this section
function Features() {
  return (
    <Box p={10} py={20}>
      {/* Section Header */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="xl">
          Why Use a PoA NFT?
        </Heading>
        <Text color={'gray.600'} maxW={'2xl'}>
          Our platform leverages blockchain technology to provide benefits that traditional event systems can't match.
        </Text>
      </VStack>

      {/* Grid of features */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW={'4xl'} mx={'auto'}>
        <Feature
          icon={CheckCircleIcon}
          title={'Verifiable Credentials'}
          text={'Your PoA is a fraud-proof credential that you truly own, verifiable by anyone on the blockchain.'}
        />
        <Feature
          icon={StarIcon}
          title={'Unlock Exclusive Access'}
          text={'Use your PoAs as digital keys to qualify for future events, special merchandise, or private community channels.'}
        />
        <Feature
          icon={ViewIcon}
          title={'Immutable & Transparent'}
          text={'Your attendance is permanently recorded on an immutable ledger, building your public, on-chain resume.'}
        />
        <Feature
          icon={LockIcon}
          title={'Decentralized & Secure'}
          text={'Built on Ethereum, our dApp removes central points of failure, ensuring your credentials are always safe and accessible.'}
        />
      </SimpleGrid>
    </Box>
  );
}

export default Features;