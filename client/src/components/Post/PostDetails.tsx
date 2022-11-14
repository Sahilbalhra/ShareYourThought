import React, { useState } from "react";
import {
  Avatar,
  Center,
  Stack,
  Box,
  Button,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Divider,
  Flex,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  useCommentPostMutation,
  useGetPostQuery,
} from "../../graphql/generated";

const PostDetail: React.FC = () => {
  const { id } = useParams();
  console.log("id", id);
  const [comment, setComment] = useState<string>("");
  const { data } = useGetPostQuery({
    variables: {
      id: id || " ",
    },
  });
  const [addComment] = useCommentPostMutation();
  console.log("Post data", data);

  const handleAddComment = () => {
    addComment({
      variables: {
        input: {
          id: id || "",
          comment,
        },
      },
    });
  };

  return (
    <Center m={4}>
      <Stack spacing={8} direction='row'>
        <Box p={5} shadow='md' borderWidth='1px'>
          <Flex m={2} alignContent='center'>
            <Avatar size='lg' name={data?.getPost.User.name} src='' />
            <VStack ml={4}>
              <Text as='b' color='gray.600' align='start'>
                {data?.getPost.User.name}
              </Text>
              <HStack alignContent='center'>
                <Text color='gray.500'>{data?.getPost.createdAt}</Text>
                <Text color='gray.500'>22 min ago</Text>
              </HStack>
            </VStack>
          </Flex>
          <Divider />
          <Heading size='3xl' mt={2} color='gray.600'>
            {data?.getPost.title}
          </Heading>
          <Box display='flex' alignItems='baseline'>
            {data?.getPost.tags?.map((tag) => (
              <Text variant='h6' key={tag} color='gray.500'>
                # {tag}
              </Text>
            ))}
          </Box>
          <Divider />
          <SimpleGrid columns={2} spacing={10}>
            <VStack>
              <Text mt={2} p={2} color='gray.600'>
                {data?.getPost.description}
              </Text>
              <Divider />
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type='text'
                  placeholder='Enter Comment Here'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleAddComment}>
                    Add
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Box
                p={2}
                shadow='md'
                borderWidth='1px'
                height={150}
                w='full'
                overflowY='scroll'
                overflowX='hidden'
              >
                {data?.getPost.comments && data?.getPost.comments.length > 0 ? (
                  data?.getPost.comments.map((comment) => (
                    <Text
                      bg='gray.100'
                      m={1}
                      p={2}
                      rounded='md'
                      w='full'
                      key={comment}
                    >
                      {comment}
                    </Text>
                  ))
                ) : (
                  <Text bg='gray.100' p={2} rounded='md' w='full'>
                    No Comment
                  </Text>
                )}
              </Box>
            </VStack>
            <Box>
              <Image
                src={data?.getPost.picUrl}
                alt={`Image`}
                width='full'
                height='3xs'
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </Center>
  );
};

export default PostDetail;
