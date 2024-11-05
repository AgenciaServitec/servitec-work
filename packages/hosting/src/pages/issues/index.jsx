import React from "react";
import styled from "styled-components";
import { LogoServitec } from "../../../public/images/index.js";

export const Issues = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoServitec} alt="" />
      </LogoContainer>
      <TitleContainer>EQUIPO A REPARAR</TitleContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  max-height: 92vh;
  height: 100vh;
  background-color: black;
`;

const LogoContainer = styled.div`
  padding: 5%;
  img {
    margin: auto;
    display: block;
  }
`;

const TitleContainer = styled.h1`
  color: yellow;
  text-align: center;
  font-weight: normal;
  font-family: SpaceRave-Italic;
  text-decoration: underline double;
`;
