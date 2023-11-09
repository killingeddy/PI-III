import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MapComponent({ latitude, longitude, animalName }) {
  const [mapURL, setMapURL] = useState('');

  useEffect(() => {
    const API_KEY = 'AIzaSyDZme89NO2qqASY2Gp_wC48TH-Ftt8cVkM';

    const mapURL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${latitude},${longitude}&zoom=2`;

    setMapURL(mapURL);
  }, [latitude, longitude, animalName]);

  return (
    <iframe
      className="w-[80%] h-[80%] rounded-3xl"
      src={mapURL}
      title="map"
    />
  );
}

export default MapComponent;
