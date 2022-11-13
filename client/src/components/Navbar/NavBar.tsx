import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      minW='2xl'
      bg='gray.100'
      justifyContent='space-between'
      display='flex'
      alignItems='center'
      p={2}
      rounded='md'
      m={2}
      boxShadow='md'
    >
      <Box>
        <Text as='b'>Share Your Thought</Text>
      </Box>
      <Box>
        <Button variant='outline' onClick={() => navigate("/auth")}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
