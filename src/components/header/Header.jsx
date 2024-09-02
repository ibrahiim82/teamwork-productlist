import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";

export const Header = () => {
  return (
    <Container className="header">
      <h1>Producs List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        Category Butons
      </Stack>
    </Container>
  );
};
