import { Box, VStack, Link, Heading } from '@chakra-ui/react';
import { ViewIcon, CalendarIcon, SettingsIcon, AddIcon } from '@chakra-ui/icons';

// The Sidebar receives props to check for admin and to change the view
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

          {/* --- These links are now updated and functional --- */}
          <Link 
            onClick={() => setView('events')} 
            w="full" p={2} borderRadius="md" _hover={{ bg: 'gray.700', cursor: 'pointer' }}
          >
            <CalendarIcon mr={3} />
            Upcoming Events
          </Link>
          <Link 
            onClick={() => setView('profile')} 
            w="full" p={2} borderRadius="md" _hover={{ bg: 'gray.700', cursor: 'pointer' }}
          >
            <SettingsIcon mr={3} />
            Profile
          </Link>
          {/* --- End of updated links --- */}

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