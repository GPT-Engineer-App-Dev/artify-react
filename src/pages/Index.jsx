import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading size="md">MyApp</Heading>
      </Flex>
      <Box as="main" flex="1">
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mt={8}>
            Welcome to MyApp
          </Heading>
          <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md">Main Content Area</Heading>
            <p>This is a blank canvas for your application. Start building your features here.</p>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;