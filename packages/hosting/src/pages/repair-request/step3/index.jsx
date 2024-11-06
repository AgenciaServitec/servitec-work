import React, { useEffect } from "react";
import { LogoServitec, MailIcon } from "../../../../public/images/index.js";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

export const Step3Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_3: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/4/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <h1>Dirección</h1>
      <p>Donde te visitamos</p>
      <form action="">
        <h2>Distrito</h2>
        <select name="districts" id=""></select>
        <h2>Direccion</h2>
        <input type="text" placeholder="" />
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
  justify-items: center;
  h1 {
    font-size: 30px;
    text-align: center;
    color: #fff100;
    font-family: SpaceRave-Italic;
    font-weight: 400;
    line-height: 35px;
    text-decoration: underline;
    margin: 2em 0 0 0;
  }
  p {
    text-align: center;
    font-family: Abel-regular;
    font-weight: 400;
    font-size: 15px;
    color: #fff100;
    margin: 0 0 2.5em 0;
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
  select,
  input {
    font-family: Abel-regular;
    font-size: 20px;
    line-height: 25px;
    padding: 10px;
    width: 100%;
    height: 45px;
    margin: 0 auto;
    display: block;
    border-radius: 30px;
  }
  button {
    top: 10%;
    margin: 7em auto 0 auto;
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

const MailInput = styled.div`
  display: flex;
  justify-content: center;
  .mail-icon {
    background-image: url(${MailIcon});
    background-size: cover;
    background-color: white;
    width: 46px;
    height: 46px;
    border-radius: 10px;
  }
`;
