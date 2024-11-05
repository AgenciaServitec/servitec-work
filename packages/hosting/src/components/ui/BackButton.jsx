import React from "react";
import { BackIcon } from "../../../public/images/index.js";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();

  const backNavigate = () => {
    navigate(-1);
  };
  return (
    <Container>
      <button onClick={backNavigate}>
        <img src={BackIcon} alt="BackButton" />
      </button>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  button {
    margin: 0.2em;
    background: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
