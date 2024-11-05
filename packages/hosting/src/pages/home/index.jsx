import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MapScreen } from "./mapComponents/MapScreen.jsx";
import { FirstScreen } from "./firstScreen/FirstScreen.jsx";

export const HomeMap = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TransitionContainer>
      <FirstScreenContainer className={!showMap ? "fade-out" : ""}>
        <FirstScreen />
      </FirstScreenContainer>
      <MapScreenContainer className={showMap ? "fade-in" : "fade-out"}>
        <MapScreen />
      </MapScreenContainer>
    </TransitionContainer>
  );
};

const TransitionContainer = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
`;

const FirstScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: 1;

  &.fade-out {
    opacity: 1;
  }
`;

const MapScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: 0;

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }
`;
