import { useState } from "react";
import { Box, Container, Flex, Heading, VStack, Text, Spinner, Button } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";
import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const [showLogin, setShowLogin] = useState(false);
  const { data: events, error, isLoading } = useEvents();

  if (!session) {
    return showLogin ? (
      <SupabaseAuthUI />
    ) : (
      <Container maxW="container.xl" centerContent>
        <Button onClick={() => setShowLogin(true)}>Login</Button>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading size="md">MyApp</Heading>
        <Button onClick={logout}>Logout</Button>
      </Flex>
      <Box as="main" flex="1">
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mt={8}>
            Welcome to MyApp
          </Heading>
          <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md">Events</Heading>
            {isLoading ? (
              <Spinner />
            ) : error ? (
              <Text color="red.500">Failed to load events</Text>
            ) : (
              events.map((event) => (
                <Box key={event.id} p={4} bg="white" borderRadius="md" boxShadow="sm" mb={4}>
                  <Heading as="h3" size="md">{event.name}</Heading>
                  <Text>{event.date}</Text>
                  <Text>{event.description}</Text>
                </Box>
              ))
            )}
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;