"use client";

import { useState } from "react";
import {
  Avatar,
  Heading,
  Box,
  BoxProps,
  Button,
  Container,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { TextField } from "@/components/ui/form/TextField";

const IdeaItem = ({ idea, ...props }: { idea: string } & BoxProps) => {
  return (
    <Box
      {...props}
      display="flex"
      alignItems="center"
      padding={4}
      marginBottom={2}
      backgroundColor="white"
      borderWidth="0 0 1px 0"
      {...props}
    >
      <HStack style={{ width: "100%" }}>
        <Box flex="1">{idea}</Box>
        <Avatar.Root>
          <Avatar.Fallback name="You" />
          {/* <Avatar.Image src="" /> */}
        </Avatar.Root>
      </HStack>
    </Box>
  );
};

const Page = () => {
  const [ideas, setIdeas] = useState<string[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const idea = formData.get("idea") as string;
    if (idea) {
      setIdeas((prev) => [...prev, idea]);
      e.currentTarget.reset();
    }
  };

  return (
    <Stack width="100%" gap={14}>
      <Box>
        <h1>Your Ideas</h1>
        {ideas.map((idea, index) => (
          <IdeaItem key={index} idea={idea} />
        ))}
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Heading as="h2" marginBottom={4}>
          Submit Your Idea
        </Heading>
        <form onSubmit={onSubmit}>
          <HStack gap={8} justifyContent="center">
            <Avatar.Root>
              <Avatar.Fallback name="You" />
              {/* <Avatar.Image src="" /> */}
            </Avatar.Root>
            <TextField name="idea" />
            <Button
              type="submit"
              colorScheme="teal"
              variant="solid"
              style={{ padding: "0.5rem 1rem" }}
            >
              Submit
            </Button>
          </HStack>
        </form>
      </Box>
    </Stack>
  );
};

export default Page;
