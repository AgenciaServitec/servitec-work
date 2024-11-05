import React from "react";
import styled from "styled-components";
import { BackButton } from "../ui/index.js";

export const HeaderLayout = () => {
  return (
    <Container>
      <BackButton />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 8vh;
  background-color: #fff100;
`;
