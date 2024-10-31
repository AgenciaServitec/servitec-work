import React from "react";
import styled from "styled-components";
import { LogoServitec } from "../../../public/images/index.js";
import { Button } from "antd";

export const LoginIntegration = () => {
  return (
    <Container>
      <div className="logo">
        <img src={LogoServitec} alt="Logo Servitec Group" />
      </div>
      <div className="buttons-wrapper">
        <Button
          color="default"
          variant="solid"
          size="middle"
          block
          className="btn-item"
        >
          NUEVO USUARIO
        </Button>
        <Button
          color="default"
          variant="solid"
          size="middle"
          block
          className="btn-item"
        >
          INICIAR SESION
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  gap: 2em;

  .buttons-wrapper {
    margin: 3em;
    display: flex;
    flex-direction: column;
    gap: 3em;
    .btn-item {
      font-family: "SpaceRave-regular", serif;
    }
  }
`;
