import React, { useEffect } from "react";
import { LogoServitec } from "../../../../public/images/index.js";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

export const Step4Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_4: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/5/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <h1>CODIGO DE VERIFICACIÓN</h1>
      <form action="">
        <p>
          Introduce el código de 4 digitos que te enviamos a example@gmail.com
        </p>
        <ButtonGroup>
          <button>Reenviar</button>
          <button onClick={onGoToStepNext}>Continuar</button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 92vh;
  background-color: black;
  h1 {
    font-size: 30px;
    text-align: center;
    color: #fff100;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    line-height: 35px;
    text-decoration: underline;
    margin-bottom: 1em;
  }
  p {
    text-align: center;
    font-family: Abel-regular;
    font-weight: 400;
    font-size: 25px;
    color: gray;
    margin: auto 2.2em;
    display: block;
  }
  button {
    top: 10%;
    margin: 1em auto;
    display: block;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    font-size: 15px;
    background-color: #fff100;
    border: none;
    border-radius: 30px;
    padding: 0.5em 1em;
  }
`;

const ImgContainer = styled.img`
  margin: auto;
  display: block;
  padding: 1em;
`;

const ButtonGroup = styled.div`
  margin: 3em;
  display: flex;
`;
