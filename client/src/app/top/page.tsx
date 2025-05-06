"use client";

import { useState } from "react";
import {
  Avatar,
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
      borderRadius="md"
      marginBottom={2}
      backgroundColor="white"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      {...props}
    >
      <HStack style={{ width: "100%" }}>
        <Box flex="1">{idea}</Box>
        <Avatar.Root>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
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
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <Stack width="100%">
        <Box>
          <h1>Your Ideas</h1>
          {ideas.map((idea, index) => (
            <IdeaItem key={index} idea={idea} />
          ))}
        </Box>
        <h2>Submit Your Idea</h2>
        <Box>
          <form onSubmit={onSubmit}>
            <Stack>
              <TextField
                name="idea"
                label="Idea"
                helperText="Write your idea here"
                errorText="This field is required"
                optionalText="Optional"
                required
              />
              <Button type="submit" colorScheme="teal">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default Page;
