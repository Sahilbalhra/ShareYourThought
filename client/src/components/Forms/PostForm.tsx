import React, { useEffect, useState } from "react";
import { Button, Box, Input, Text, Textarea, Center } from "@chakra-ui/react";
import FileBase from "react-file-base64";
import {
  GetPostDocument,
  useCreatePostMutation,
  // useGetAllPostQuery,
  useUpdatePostMutation,
} from "../../graphql/generated";
import {
  CreatePostMutationVariables,
  GetAllPostDocument,
} from "../../graphql/generated/index";
import { useAppSelector } from "../../app/hook";

const PostForm: React.FC = () => {
  const form = useAppSelector((state) => state.from.updateForm);
  const forms = useAppSelector((state) => state.from.formData);
  // console.log("from Data:asdaskld ", forms);
  const [createPost, { data, error }] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  // const toast = useToast();
  if (data) {
    console.log("Data:", data);
  }

  if (error) {
    console.log("Error:", error);
  }

  const [formData, setFormData] = useState<
    CreatePostMutationVariables["input"]
  >({
    title: "",
    description: "",
    tags: [""],
    picUrl: "",
  });

  useEffect(() => {
    setFormData({
      title: forms.title,
      description: forms.description,
      tags: forms.tags,
      picUrl: forms.picUrl,
    });
  }, [forms]);

  const user = true;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    setFormData({
      title: "",
      description: "",
      tags: [""],
      picUrl: "",
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form) {
      await updatePost({
        variables: {
          input: {
            _id: forms.id,
            title: formData.title,
            description: formData.description,
            tags: formData.tags,
            picUrl: formData.picUrl,
          },
        },
        refetchQueries: [
          { query: GetPostDocument, variables: { id: forms.id } },
        ],
      });
    } else {
      await createPost({
        variables: {
          input: { ...formData },
        },
        refetchQueries: [{ query: GetAllPostDocument }],
      });
    }

    handleClear();
  };

  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Center p={4} boxShadow='lg' rounded='lg' m={4} textAlign='center'>
        <Text fontSize='xl' as='b' color='gray.400'>
          {" "}
          Please Sign In to create your own Post and like other's Posts
        </Text>
      </Center>
    );
  }

  return (
    <Center p={4} boxShadow='2xl' rounded='lg' m={4}>
      {user ? (
        <Box as='form' onSubmit={handleSubmit} textAlign='center'>
          <Text mb='4' fontSize='xl' as='b'>
            {form ? "Update" : "Create"}
            Your Memory
          </Text>
          <Input
            type='text'
            name='title'
            placeholder='Title'
            value={formData.title}
            onChange={handleChange}
            mb={2}
            isRequired
          />
          <Textarea
            name='description'
            aria-multiline
            placeholder='description'
            value={formData.description}
            onChange={handleChange}
            mb={2}
            isRequired
          />
          <Input
            type='text'
            name='tags'
            placeholder='Tags'
            value={formData.tags}
            onChange={(e) =>
              setFormData({ ...formData, tags: e.target.value.split(",") })
            }
            mb={2}
            isRequired
          />
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }: any) =>
              setFormData({ ...formData, picUrl: base64 })
            }
          />
          <Button w='full' mt={2} mb={2} colorScheme='pink' type='submit'>
            {form ? "Update" : "Save"}
          </Button>
          <Button
            w='full'
            colorScheme='purple'
            onClick={handleClear}
            isDisabled={form ? true : false}
          >
            Clear
          </Button>
        </Box>
      ) : (
        <Box textAlign='center'>
          <Text as='b' fontSize='lg' color='gray.500'>
            Please Sign In to create your own memories and like other's
            memories.
          </Text>
        </Box>
      )}
    </Center>
  );
};

export default PostForm;
