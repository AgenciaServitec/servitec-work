import React, { useEffect } from "react";
import { LogoServitec } from "../../../../public/images/index.js";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

export const Step6Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_6: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/7/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <h1>ATENCIÓN</h1>
      <p>
        La visita técnica a domicilio tiene un costo de 50 SOLES por conceptos
        de traslado para la revisión y diagnóstico, según eso se le da el costo
        de la reparación
      </p>
      <button onClick={onGoToStepNext}>ACEPTAR</button>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 92vh;
  background-color: black;
  justify-items: center;

  h1 {
    font-size: 30px;
    text-align: center;
    margin: 0 0 1em 0;
    color: #fff100;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    line-height: 35px;
    text-decoration: underline;
  }
  button {
    margin: 2em 1em;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    font-size: 15px;
    background-color: #fff100;
    border: none;
    border-radius: 30px;
    width: 110px;
    height: 30px;
  }
  p {
    text-align: justify;
    font-family: Abel-regular;
    font-weight: 400;
    font-size: 25px;
    color: GrayText;
    margin: 3em 2em;
  }
`;

const ImgContainer = styled.div`
  margin: auto;
  display: block;
  padding: 1em;
`;
