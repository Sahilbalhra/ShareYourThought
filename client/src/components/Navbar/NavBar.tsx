import React from "react";
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { useGetUserQuery } from "../../graphql/generated/index";
import { logOutUser } from "../../features/auth/authSlice";
const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  const dispatch = useAppDispatch();
  const { data } = useGetUserQuery();
  // if (error) {
  //   console.log("Authorized User Error:", data);
  // }
  // if (data) {
  //   console.log("Authorized User:", data);
  // }

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
        <Text as='b' onClick={() => navigate("/")} cursor='pointer'>
          Share Your Journey
        </Text>
      </Box>
      <Box>
        {!token ? (
          <Button variant='outline' onClick={() => navigate("/auth")}>
            Login
          </Button>
        ) : (
          <Menu>
            <MenuButton>
              <Avatar src={data?.getUser.name} name={data?.getUser.name} />
            </MenuButton>
            <MenuList>
              <MenuItem>{data?.getUser.name}</MenuItem>
              <MenuItem onClick={() => dispatch(logOutUser())}>LogOut</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
