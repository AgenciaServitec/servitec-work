import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration.jsx";

export const Map = (props) => {
  const { isLoaded } = props;

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const homeLocation = {
    lat: -12.169521,
    lng: -77.021054,
  };

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={homeLocation}
          zoom={18}
          options={{
            styles: mapOptions.mapTheme,
            ...mapOptions.mapConfigurations,
          }}
        >
          <Marker position={homeLocation} />
        </GoogleMap>
      </>
    )
  );
};
