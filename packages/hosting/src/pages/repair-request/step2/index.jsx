import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { LogoServitec } from "../../../../public/images/index.js";
import styled from "styled-components";

export const Step2Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_2: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/3/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <h1>FOTO DEL EQUIPO</h1>
      <form action="/subir_imagen" method="POST" encType="multipart/form-data">
        <input type="file" accept="image/*" />
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
  h1 {
    font-size: 30px;
    text-align: center;
    color: #fff100;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    line-height: 35px;
    text-decoration: underline;
  }
  input {
    font-family: Abel-regular;
    font-size: 20px;
    line-height: 25px;
    padding: 10px;
    width: 60%;
    height: 45px;
    margin: auto;
    display: block;
    border-radius: 30px;
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
