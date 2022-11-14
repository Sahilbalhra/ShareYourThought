import { FaRegEdit } from "react-icons/fa";
import { AiOutlineLike, AiTwotoneDelete } from "react-icons/ai";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  IconButton,
  HStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../../app/hook";
import { formData, updateForm } from "../../features/form/fromSlice";
import {
  GetAllPostDocument,
  useDeletePostMutation,
  useLikePostMutation,
} from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
export type PostProps = {
  id: string;
  title: string;
  description: string;
  tags: any;
  picUrl: string;
  likes: any;
};

const PostCard: React.FC<PostProps> = ({
  id,
  title,
  description,
  tags,
  picUrl,
  likes,
}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [deletePost, { loading, error }] = useDeletePostMutation();
  const [likePost, { data: likeData }] = useLikePostMutation();
  // console.log("Data for like:", likeData);
  const handleDelete = async () => {
    await deletePost({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: GetAllPostDocument }],
    });
    if (!error) {
      toast({
        title: "Post has been deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Cannot delete post",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLikeButton = async () => {
    await likePost({
      variables: {
        id,
      },
      refetchQueries: [{ query: GetAllPostDocument }],
    });
    if (likeData) {
      toast({
        title: likeData.likePost,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleClick = () => {
    dispatch(formData({ id, title, description, tags, picUrl }));
    dispatch(updateForm());
  };

  return (
    <Box
      maxW='240px'
      maxH='320px'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      position='relative'
    >
      <Image
        src={picUrl}
        alt={title}
        h='120px'
        w='240px'
        onClick={() => navigate(`/${id}`)}
        cursor='pointer'
      />
      <IconButton
        aria-label={""}
        variant='ghost'
        top='1'
        right='1'
        position='absolute'
        rounded='full'
        colorScheme='blackAlpha.100'
        onClick={handleClick}
      >
        <FaRegEdit />
      </IconButton>
      <Box p='1'>
        {tags && (
          <HStack>
            {tags.map((tag) => (
              <Text key={tag} color='gray.300' fontSize='xs'>
                # {tag}
              </Text>
            ))}
          </HStack>
        )}
        <Box fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
          {title}
        </Box>
        <Text fontSize='sm' color='gray.500'>
          {description.substring(0, 172)}...
        </Text>
        <Flex mt='1' justifyContent='space-between'>
          <Button m={0} variant='solid' onClick={handleLikeButton}>
            <AiOutlineLike />
            Like
          </Button>
          <Button
            m={0}
            colorScheme='red'
            isLoading={loading}
            onClick={handleDelete}
          >
            <AiTwotoneDelete />
            Delete
          </Button>
        </Flex>
        <Text>{likes}</Text>
      </Box>
    </Box>
  );
};

export default PostCard;
