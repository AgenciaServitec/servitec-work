import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration.jsx";

export const Map = (props) => {
  const { isLoaded } = props;

  const [userLocation, serUserLocation] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          serUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("No se acpetó la geolocalización");
        },
      );
    } else {
      console.error("Su navegador no cuenta con geolocalizacion");
    }
  }, []);

  // const homeLocation = {
  //   lat: -12.169521,
  //   lng: -77.021054,
  // };

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={18}
          options={{
            styles: mapOptions.mapTheme,
            ...mapOptions.mapConfigurations,
          }}
        >
          <Marker position={userLocation} />
        </GoogleMap>
      </>
    )
  );
};
