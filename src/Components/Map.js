import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./map.css";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "50vw",
    margin: "auto",
  };

  const defaultCenter = {
    lat: 39.7,
    lng: -105.5,
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
};

export default MapContainer;
