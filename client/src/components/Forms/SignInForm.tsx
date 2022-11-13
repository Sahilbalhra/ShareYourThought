import React from "react";
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
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string().min(3).required().label("Email"),
  password: Yup.string().min(5).required().label("Password"),
  // piUrl: Yup.string().min(3).required().label("Description"),
});

const SignInForm: React.FC = () => {
  const toast = useToast();

  const handleSubmit = (values: any) => {
    console.log("Values", values);
    toast({
      title: "Post Have been Created",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
      w="md"
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
        <Input
          placeholder='Password'
          type='password'
          m={1}
          w='full'
          py='1'
          autoComplete='off'
          {...formik.getFieldProps("password")}
        />
        <FormErrorMessage>
          <FormErrorIcon />
          <Text>Password is required</Text>
        </FormErrorMessage>
      </FormControl>
      <Button
        type='submit'
        w='full'
        ml={2}
        // isLoading={fetching}
      >
        Login
      </Button>
      <Button
        w='full'
        ml={2}
        colorScheme='red'
        onClick={() => formik.resetForm()}
      >
        Clear
      </Button>
    </VStack>
  );
};

export default SignInForm;
