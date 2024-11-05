import React from "react";
import styled from "styled-components";
import { LogoServitec } from "../../../../public/images/index.js";

export const FirstScreen = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={LogoServitec} alt="Logo Servitec Group" />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: relative;
  align-content: center;
`;

const ImageContainer = styled.div`
  img {
    margin: auto;
    display: block;
  }
`;
