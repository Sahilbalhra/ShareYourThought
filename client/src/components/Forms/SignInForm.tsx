import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useAppDispatch } from "../../app/hook";
import { selectSignInForm } from "../../features/form/fromSlice";
import {
  SignInUserMutationVariables,
  useSignInUserMutation,
} from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
import { logedInUser } from "../../features/auth/authSlice";

const validationSchema = Yup.object({
  email: Yup.string().min(3).required().label("Email"),
  password: Yup.string().min(5).required().label("Password"),
  // piUrl: Yup.string().min(3).required().label("Description"),
});

const SignInForm: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const handleClick = () => setShow(!show);

  const [logInUser, { data, loading, error }] = useSignInUserMutation();
  if (data) {
    console.log("Dtata after login", data);
    localStorage.setItem("token", data.signInUser.token);
  }

  const handleSubmit = async (values: SignInUserMutationVariables["input"]) => {
    await logInUser({
      variables: {
        input: { ...values },
      },
    });

    if (!error) {
      toast({
        title: "User have been Logged In!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
      dispatch(logedInUser(data?.signInUser.token));
    } else {
      toast({
        title: "Something went wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik<any>({
    initialValues: {
      email: "",
      password: "",
    } as any,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <VStack
      w='md'
      as='form'
      onSubmit={formik.handleSubmit as any}
      mt={4}
      p={4}
      boxShadow='2xl'
      rounded='xl'
    >
      <Heading color='gray.500' mt={4} mb={2}>
        Sign In
      </Heading>
      <FormControl
        isInvalid={Boolean(formik.errors.email && formik.touched.email)}
        isRequired
      >
        <Input
          placeholder='Email'
          type='email'
          w='full'
          m={1}
          py='1'
          autoComplete='off'
          {...formik.getFieldProps("email")}
        />
        <FormErrorMessage>
          <FormErrorIcon />
          <Text>Email is required</Text>
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={Boolean(formik.errors.password && formik.touched.password)}
        isRequired
      >
        <InputGroup size='md'>
          <Input
            placeholder='Password'
            type={show ? "text" : "password"}
            // pr='4.5rem'
            m={1}
            w='full'
            autoComplete='off'
            {...formik.getFieldProps("password")}
          />
          <InputRightElement m={1}>
            <IconButton
              aria-label='Search database'
              icon={show ? <BiShowAlt /> : <BiHide />}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          <FormErrorIcon />
          <Text>Password is required</Text>
        </FormErrorMessage>
      </FormControl>
      <Text color='gray.500'>
        Don't Have A Account?{" "}
        <Button variant='link' onClick={() => dispatch(selectSignInForm())}>
          Create Here
        </Button>
      </Text>
      <Button type='submit' w='full' ml={2} isLoading={loading}>
        Login
      </Button>
      <Button
        w='full'
        ml={2}
        colorScheme='red'
        onClick={() => formik.resetForm()}
        isDisabled={loading}
      >
        Clear
      </Button>
    </VStack>
  );
};

export default SignInForm;
