import React from "react";
import styled from "styled-components";
import { BackIcon } from "../../../public/images/index.js";
import { useNavigate } from "react-router";

export const HeaderLayout = () => {
  const navigate = useNavigate();

  const backNavigate = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackButton onClick={backNavigate}></BackButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 8vh;
  background-color: #fff100;
`;

const BackButton = styled.button`
  position: absolute;
  background: url(${BackIcon});
  background-size: cover;
  border: none;
  width: 10%;
  height: 80%;
  top: 8%;
  left: 3%;
`;
