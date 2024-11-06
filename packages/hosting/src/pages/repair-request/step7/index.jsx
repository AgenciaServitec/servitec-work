import React, { useEffect } from "react";
import { CreditCards, LogoServitec } from "../../../../public/images/index.js";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

export const Step7Integration = () => {
  const { repairRequestId } = useParams();
  const navigate = useNavigate();

  console.log("repairRequestId_7: ", repairRequestId);

  useEffect(() => {
    if (!repairRequestId) return navigate("/");
  }, []);

  const onGoToStepNext = () => navigate(`/repair-request/8/${repairRequestId}`);

  return (
    <Container>
      <ImgContainer src={LogoServitec} alt=""></ImgContainer>
      <h1>AGREGAR TARJETA</h1>
      <img src={CreditCards} alt="" className="cards" />
      <form action="">
        <input type="text" placeholder="Numero de tarjeta" />
        <input type="text" placeholder="Fecha de vencimiento" />
        <input type="text" placeholder="Codigo de seguridad" />
        <ButtonGroup>
          <button onClick={onGoToStepNext}>mas tarde</button>
          <button>aceptar</button>
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
  justify-items: center;

  .cards {
    width: 20em;
    height: 7em;
  }

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
  input {
    font-family: Abel-regular;
    font-size: 20px;
    line-height: 25px;
    padding: 10px;
    width: 85%;
    height: 45px;
    margin: 1em auto;
    display: block;
    border-radius: 30px;
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
`;

const ImgContainer = styled.img`
  margin: auto;
  display: block;
  padding: 1em;
`;

const ButtonGroup = styled.div`
  display: flex;
`;
