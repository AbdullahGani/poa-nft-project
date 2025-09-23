import { Box } from '@chakra-ui/react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Features from './Features';
import FAQ from './FAQ';
import Footer from './Footer';

function LandingPage({ connectWallet }) {
  return (
    <Box>
      <Hero connectWallet={connectWallet} />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </Box>
  );
}

export default LandingPage;