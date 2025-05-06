import React from "react";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </Container>
  );
}

export default Layout;
