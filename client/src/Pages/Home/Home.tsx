import React from "react";
import PostForm from "../../components/Forms/PostForm";
import Posts from "../Posts/Posts";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import SearchForm from "../../components/Forms/SearchForm";

const Home: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Grid
      templateColumns={`repeat(${isMobile ? 1 : 3}, 1fr)`}
      gap={1}
      autoColumns='max-content'
    >
      <GridItem colSpan={isMobile ? 1 : 2}>
        <Posts />
      </GridItem>
      <GridItem>
        <SearchForm />
        <PostForm />
      </GridItem>
    </Grid>
  );
};

export default Home;
