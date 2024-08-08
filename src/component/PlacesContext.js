import React, { createContext, useContext, useState } from "react";
import { getPlace } from "../util/api";

const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState("");
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [quality , setAirQuality] = useState(null);

  const fetchPlacesData = async () => {
    await getPlace(places,setAirQuality, setData, setImage);
  };

  const handleChange = () => {
    setPlaces("");
    setData(null);
    setImage(null);
  };

  return (
    <PlacesContext.Provider
      value={{ places, setPlaces, data, image, fetchPlacesData,quality, handleChange }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = () => {
  return useContext(PlacesContext);
};
