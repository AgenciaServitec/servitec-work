import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { LogoServitec } from "../../../../public/images/index.js";

export const Step1Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_1: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/2/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <h1>EQUIPO A REPARAR</h1>
      <form action="">
        <h2>EQUIPO</h2>
        <input type="text" />
        <h2>DESCRIBA EL PROBLEMA QUE PRESENTA SU EQUIPO</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
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
    margin-bottom: 1em;
  }

  h2 {
    margin: 0.5em;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #fff100;
    text-align: center;
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
  textarea {
    font-family: Abel-regular;
    font-size: 20px;
    line-height: 25px;
    padding: 20px 10px;
    border: none;
    width: 60%;
    height: 215px;
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
