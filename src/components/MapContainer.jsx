import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, GroundOverlay, Marker } from "@react-google-maps/api";
import campusMap from '../assets/cinec-campus-map2021.jpg';

// CINEC Campus coordinates (you may need to adjust these)
const center = {
  lat: 6.9271,  // Replace with actual CINEC campus latitude
  lng: 79.8612  // Replace with actual CINEC campus longitude
};

const containerStyle = {
  width: '100%',
  height: '70vh'
};

const imageBounds = {
  north: 6.9280, // adjust as needed
  south: 6.9260, // adjust as needed
  east: 79.8625, // adjust as needed
  west: 79.8600  // adjust as needed
};

function MapContainer() {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-[70vh] bg-gray-100">
        <div className="text-center">
          <p className="text-lg font-semibold">Loading Map...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex-1 relative bg-white overflow-auto">
      <div className="relative w-full h-[70vh] bg-white">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <GroundOverlay url={campusMap} bounds={imageBounds} opacity={0.8} />
          <Marker
            position={center}
            title="CINEC Campus"
          />
        </GoogleMap>
      </div>
    </section>
  );
}

export default MapContainer; 