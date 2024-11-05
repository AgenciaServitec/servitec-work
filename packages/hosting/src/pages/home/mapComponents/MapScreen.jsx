import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration.jsx";
import { Map } from "./Map.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const MapScreen = () => {
  const navigate = useNavigate();

  const repairRequestId = "LASNDJASNDKJASNKLANSKDAN";

  const onGoToNextStep = (stepNumber = 1) =>
    navigate(`/repair-request/${stepNumber}/${repairRequestId}`);

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return (
    <Container>
      <Map isLoaded={isLoaded} />
      <DeviceContainer>
        <Button onClick={() => onGoToNextStep(1)}>
          <Title>EQUIPOS A REPARAR?</Title>
        </Button>
      </DeviceContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const DeviceContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 13%;
  background-color: #040404;
  bottom: 0;
`;
const Button = styled.button`
  position: absolute;
  left: 20%;
  right: 20%;
  top: 20%;
  width: 60%;
  height: 50%;
  background-color: #fff100;
  border-radius: 50px;
`;
const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  line-height: 23px;
  font-family: "SpaceRave-Italic", serif;
`;
