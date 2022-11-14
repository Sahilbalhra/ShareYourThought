import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSearchPostMutation } from "../../graphql/generated";

const SearchForm: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searchPost, { data }] = useSearchPostMutation();

  //   if (data) {
  console.log("Data in search post:", data);
  //   }
  const handleClick = async () => {
    await searchPost({
      variables: {
        search,
      },
    });
  };
  return (
    <Center p={4} boxShadow='md' rounded='lg' m={4}>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Search post'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default SearchForm;
