import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

function FAQ() {
  return (
    <Box bg={'gray.50'} p={10} py={20}>
      <Container maxW={'4xl'}>
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading as="h2" size="xl">
            Frequently Asked Questions
          </Heading>
        </VStack>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                What is a "crypto wallet" and why do I need one?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              A crypto wallet (like MetaMask) is a digital wallet that lets you securely interact with blockchain applications. You need one to create a unique digital identity, store your NFTs, and prove ownership.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                What is a Proof of Attendance (PoA) NFT?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              It's a unique, non-transferable digital collectible (NFT) that proves you attended a specific event. Unlike a paper ticket, it's a permanent and verifiable credential stored on the blockchain.
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Can I sell my PoA NFT?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              No. PoA NFTs are designed to be non-transferable "soulbound" tokens. Their value comes from proving your personal attendance and building your on-chain reputation, not from being sold.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}

export default FAQ;