{/*  
  // src/components/ContactMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const position = [31.3378, 72.3570]; // Replace with your exact coordinates

// Custom marker icon (fixes missing default icon)
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ContactMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden mt-8">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <a
              href="https://www.google.com/maps?q=31.3378,72.3570"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
*/}