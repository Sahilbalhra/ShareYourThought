import React from "react";
import PostCard from "../../components/Post/PostCard";
import { Flex } from "@chakra-ui/react";
import { useGetAllPostQuery } from "../../graphql/generated";


const Posts: React.FC = () => {
  const { data, loading, error } = useGetAllPostQuery();
  if (loading) {
    return <h1>Loading.....</h1>;
  }
  console.log("Error",error)
  if (data) {
    console.log("data:", data);
  }

  return (
    <Flex flexWrap='wrap' w='100%' gap={2} justifyContent='center'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Flex>
  );
};

export default Posts;
