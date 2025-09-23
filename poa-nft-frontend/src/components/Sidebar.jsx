import { Box, VStack, Link, Heading } from '@chakra-ui/react';
import { ViewIcon, CalendarIcon, SettingsIcon, AddIcon } from '@chakra-ui/icons';

// The Sidebar now receives props to check for admin and to change the view
function Sidebar({ isAdmin, setView }) {
  return (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      h="full"
      w="250px"
      bg="gray.800"
      color="white"
      p={5}
    >
      <VStack align="start" spacing={10}>
        <Heading as="h1" size="md">PoA Dashboard</Heading>
        <VStack align="start" spacing={4} w="full">
          <Link 
            onClick={() => setView('gallery')} 
            w="full" p={2} borderRadius="md" _hover={{ bg: 'gray.700', cursor: 'pointer' }}
          >
            <ViewIcon mr={3} />
            My NFTs
          </Link>

          {/* --- Links re-added below (currently placeholders) --- */}
          <Link 
            href="#" 
            w="full" p={2} borderRadius="md" _hover={{ bg: 'gray.700' }} 
            opacity={0.6} // Style to show they are not active yet
          >
            <CalendarIcon mr={3} />
            Upcoming Events
          </Link>
          <Link 
            href="#" 
            w="full" p={2} borderRadius="md" _hover={{ bg: 'gray.700' }} 
            opacity={0.6}
          >
            <SettingsIcon mr={3} />
            Profile
          </Link>
          {/* --- End of re-added links --- */}

          {/* This link will only appear if the connected user is the admin */}
          {isAdmin && (
            <Link 
              onClick={() => setView('admin')} 
              w="full" p={2} borderRadius="md" _hover={{ bg: 'gray.700', cursor: 'pointer' }}
            >
                <AddIcon mr={3} />
                Admin Minting
            </Link>
          )}

        </VStack>
      </VStack>
    </Box>
  );
}

export default Sidebar;