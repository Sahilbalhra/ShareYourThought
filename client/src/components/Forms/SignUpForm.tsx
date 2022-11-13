import React from "react";
import {
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  // useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  SignUpUserMutationVariables,
  useSignUpUserMutation,
} from "../../graphql/generated/index";

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).required().label("First Name"),
  lastName: Yup.string().min(3).required().label("Last Name"),
  email: Yup.string().min(3).required().label("Email"),
  password: Yup.string().min(5).required().label("Password"),
});

const SignUpForm: React.FC = () => {
  const [createUser] = useSignUpUserMutation();

  const handleSubmit = async (values: SignUpUserMutationVariables["input"]) => {
    console.log("Values", values);
    await createUser({
      variables: {
        input: { ...values },
      },
    });
  };
  const formik = useFormik<any>({
    initialValues: {
      firstName: "",
      lastName: "",
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
        Create Account
      </Heading>
      <HStack>
        <FormControl
          isInvalid={Boolean(
            formik.errors.firstName && formik.touched.firstName
          )}
          isRequired
        >
          <Input
            placeholder='First Name'
            w='full'
            m={1}
            py='1'
            autoComplete='off'
            {...formik.getFieldProps("firstName")}
          />
          <FormErrorMessage>
            <FormErrorIcon />
            <Text>First Name is required</Text>
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={Boolean(formik.errors.lastName && formik.touched.lastName)}
          isRequired
        >
          <Input
            placeholder='Last Name'
            w='full'
            m={1}
            py='1'
            autoComplete='off'
            {...formik.getFieldProps("lastName")}
          />
          <FormErrorMessage>
            <FormErrorIcon />
            <Text>Last Name is required</Text>
          </FormErrorMessage>
        </FormControl>
      </HStack>

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
        Create
      </Button>
      <Button
        w='full'
        ml={2}
        colorScheme='red'
        onClick={() => formik.resetForm()}
        // isLoading={loading}
      >
        Clear
      </Button>
    </VStack>
  );
};

export default SignUpForm;
