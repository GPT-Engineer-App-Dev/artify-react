import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "@chakra-ui/react";
import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container maxW="container.xl" centerContent>
      {showLogin ? (
        <SupabaseAuthUI />
      ) : (
        <Button onClick={() => setShowLogin(true)}>Login</Button>
      )}
    </Container>
  );
};

export default Login;