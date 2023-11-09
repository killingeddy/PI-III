import { GiSeaTurtle, GiFlatfish, GiSeahorse, GiCrab, GiMantaRay, GiJellyfish } from "react-icons/gi";
import React, { useEffect, useState } from 'react';
function MapComponent({ latitude, longitude, animalName, pet, color }) {
  const [mapURL, setMapURL] = useState('');

  useEffect(() => {
    const API_KEY = 'AIzaSyDZme89NO2qqASY2Gp_wC48TH-Ftt8cVkM';

    const mapURL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${latitude},${longitude}&zoom=2`;

    setMapURL(mapURL);
  }, [latitude, longitude, animalName]);

  return (
    <div className="flex flex-col items-center justify-center relative w-[80%] h-[80%] rounded-3xl">
      <iframe
        src={mapURL}
        title="map"
        className="rounded-3xl w-full h-full"
      />
      <div className="absolute top-2 right-2 w-1/12 h-[15%] bg-neutral rounded-3xl overflow-hidden items-center justify-center flex">
        <>
          {
            pet === "turtle" &&
            <GiSeaTurtle className={`w-1/2 h-1/2`} color={`${color}`} />
          }
          {
            pet === "fish" &&
            <GiFlatfish className={`w-1/2 h-1/2`} color={`${color}`} />
          }
          {
            pet === "seahorse" &&
            <GiSeahorse className={`w-1/2 h-1/2`} color={`${color}`} />
          }
          {
            pet === "crab" &&
            <GiCrab className={`w-1/2 h-1/2`} color={`${color}`} />
          }
          {
            pet === "mantaray" &&
            <GiMantaRay className={`w-1/2 h-1/2`} color={`${color}`} />
          }
          {
            pet === "squid" &&
            <GiJellyfish className={`w-1/2 h-1/2`} color={`${color}`} />
          }
        </>
      </div>
    </div>
  );
}

export default MapComponent;
