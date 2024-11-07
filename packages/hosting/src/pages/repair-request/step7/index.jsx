import React from "react";
import styled from "styled-components";
import { Map } from "../../home/mapComponents/Map.jsx";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../../home/mapComponents/MapConfiguration.jsx";

export const Step7Integration = () => {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return (
    <Container>
      <div className="map-style">
        <Map isLoaded={isLoaded} />
      </div>
      <div className="able-technics"></div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  max-height: 92vh;
  height: 92vh;
  background-color: black;
  justify-items: center;
  .map-style {
    width: 100%;
    height: %;
  }
  .able-technics {
    bottom: 0%;
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 50%;
    background-color: gray;
  }
`;
