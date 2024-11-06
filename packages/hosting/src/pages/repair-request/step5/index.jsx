import React, { useEffect } from "react";
import { LogoServitec } from "../../../../public/images/index.js";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

export const Step5Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_5: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/6/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <form action="">
        <h2>Crear contraseña</h2>
        <p>6 carácteres o más</p>
        <input type="text" />
        <h2>Confirmar contraseña</h2>
        <input type="text" />
        <button onClick={onGoToStepNext}>Continuar</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 92vh;
  background-color: black;
  h2 {
    margin: 1.5em 0 0 0;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #fff100;
    text-align: center;
  }
  p {
    margin: 0 0 1.5em 0;
    text-align: center;
    font-family: Abel-regular;
    font-weight: 400;
    font-size: 20px;
    color: gray;
  }
  input {
    font-family: Abel-regular;
    font-size: 20px;
    line-height: 25px;
    padding: 10px;
    width: 60%;
    height: 45px;
    margin: 1.5em auto;
    display: block;
    border-radius: 30px;
  }
  button {
    top: 10%;
    margin: 6em auto;
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
