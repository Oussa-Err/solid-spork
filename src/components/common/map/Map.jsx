import "./map.css";
import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  const position = [33.74451577797111, -6.155663348132094];

  return (
    <MapContainer
      center={position}
      zoom={13}
      ref={mapRef}
      style={{ height: "300px", maxWidth: "100dvw" }}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Healthy Farm
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
