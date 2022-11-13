import React from "react";
import SignInForm from "../../components/Forms/SignInForm";
import { Center } from "@chakra-ui/react";
import SignUpForm from "../../components/Forms/SignUpForm";

const Auth: React.FC = () => {
  const token = false;
  return <Center>{token ? <SignInForm /> : <SignUpForm />}</Center>;
};

export default Auth;
