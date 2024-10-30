import React from 'react';
import styled from "styled-components";
import {useJsApiLoader} from "@react-google-maps/api";
import {mapOptions} from "./mapComponents/MapConfiguration.jsx";
import {Map} from "./mapComponents/index.js";

export const HomeMap = () => {
    const {isLoaded} = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey:mapOptions.googleMapApiKey
    });
    return (
        <Container>
            <Map isLoaded = {isLoaded}/>
            <DeviceContainer>
                <Button>
                    <Title>EQUIPOS A REPARAR?</Title>
                </Button>
            </DeviceContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const DeviceContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 13%;
    background-color: #040404;
    top: 87%;
`;
const Button = styled.button`
    position: absolute;
    left: 20%;
    right: 20%;
    top: 20%;
    width: 60%;
    height: 50%;
    background-color: #FFF100;
    border-radius: 50px;
`;
const Title = styled.h1`
    font-size: 20px;
    text-align: center;
    line-height: 23px;
    font-family: 'Space Rave',sans-serif;
`;