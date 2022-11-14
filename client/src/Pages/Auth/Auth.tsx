import React from "react";
import SignInForm from "../../components/Forms/SignInForm";
import { Center } from "@chakra-ui/react";
import SignUpForm from "../../components/Forms/SignUpForm";
import { useAppSelector } from "../../app/hook";

const Auth: React.FC = () => {
  const form = useAppSelector((state) => state.from.signInForm);
  return <Center>{form ? <SignInForm /> : <SignUpForm />}</Center>;
};

export default Auth;
