import React from "react";
import PostCard from "../../components/Post/PostCard";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { useGetAllPostQuery } from "../../graphql/generated";

const Posts: React.FC = () => {
  const { data, loading, error } = useGetAllPostQuery();
  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <Flex flexWrap='wrap' w='100%' gap={2} justifyContent='center'>
      {!error ? (
        <>
          {data?.getAllPost.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              picUrl={post.picUrl}
              tags={post.tags}
              description={post.description}
              likes={post.likes}
              id={post._id}
            />
          ))}
        </>
      ) : (
        <Center>
          <Heading>Error While Fetching</Heading>
        </Center>
      )}
    </Flex>
  );
};

export default Posts;
