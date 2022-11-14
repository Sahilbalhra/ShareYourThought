import React, { useState } from "react";
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
  useToast,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  SignUpUserMutationVariables,
  useSignUpUserMutation,
} from "../../graphql/generated/index";
import { useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useAppDispatch } from "../../app/hook";
import { selectSignInForm } from "../../features/form/fromSlice";

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).required().label("First Name"),
  lastName: Yup.string().min(3).required().label("Last Name"),
  email: Yup.string().min(3).required().label("Email"),
  password: Yup.string().min(5).required().label("Password"),
  confirmPassword: Yup.string().min(5).required().label("Confirm Password"),
});

const SignUpForm: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [createUser, { loading, error }] = useSignUpUserMutation();

  const handleSubmit = async (values: SignUpUserMutationVariables["input"]) => {
    if (values.password === values.confirmPassword) {
      await createUser({
        variables: {
          input: { ...values },
        },
      });

      if (!error) {
        toast({
          title: "Account have been created!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatch(selectSignInForm());
        navigate("/");
      } else {
        toast({
          title: "Error while creating account!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Confirm Password and Password should be the same",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik<any>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      <FormControl
        isInvalid={Boolean(
          formik.errors.confirmPassword && formik.touched.confirmPassword
        )}
        isRequired
      >
        <Input
          placeholder='Confirm Password'
          type='password'
          m={1}
          w='full'
          py='1'
          autoComplete='off'
          {...formik.getFieldProps("confirmPassword")}
        />
        <FormErrorMessage>
          <FormErrorIcon />
          <Text>Confirm Password is required</Text>
        </FormErrorMessage>
      </FormControl>
      <Text color='gray.500'>
        Already Have A Account?{" "}
        <Button variant='link' onClick={() => dispatch(selectSignInForm())}>
          Login Here
        </Button>
      </Text>
      <Button type='submit' w='full' ml={2} isLoading={loading}>
        Create
      </Button>
      <Button
        w='full'
        ml={2}
        colorScheme='red'
        onClick={() => formik.resetForm()}
        isLoading={loading}
      >
        Clear
      </Button>
    </VStack>
  );
};

export default SignUpForm;
