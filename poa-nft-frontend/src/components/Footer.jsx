import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg={'gray.900'} color={'gray.200'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2025 PoA NFT Project. All rights reserved.</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;