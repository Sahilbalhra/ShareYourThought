import React, { useState } from "react";
import { Button, Box, Input, Text, Textarea, Center } from "@chakra-ui/react";
import FileBase from "react-file-base64";
import { useCreatePostMutation } from "../../graphql/generated";
import { CreatePostMutationVariables } from "../../graphql/generated/index";

const PostForm: React.FC = () => {
  const [createPost, { data, error }] = useCreatePostMutation();
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
    console.log("Form Date:", formData);
    await createPost({
      variables: {
        input: { ...formData },
      },
    });

    // handleClear();
  };
  return (
    <Center>
      {user ? (
        <Box as='form' onSubmit={handleSubmit} textAlign='center'>
          <Text mb='4' fontSize='xl' as='b'>
            Create Your Memory
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
            Save
          </Button>
          <Button
            w='full'
            colorScheme='purple'
            onClick={handleClear}
            // isDisabled={currentId ? true : false}
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
