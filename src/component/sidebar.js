import React  from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { usePlaces } from "./PlacesContext";

const Sidebar = () => { 
  const { places, setPlaces, data, image, fetchPlacesData, handleChange } = usePlaces();

  function createDate(dt) {
    var day = new Date(dt * 1000);
    return day.toLocaleString("en-us", { weekday: "long" });
  }
  

  return (  
    <div className="h-full left-0 rounded-l-lg w-1/4 bg-white">
      <div className="flex mt-6 ml-6">
        <IoSearchOutline
          size={17}
          className="mt-1 cursor-pointer"
          onClick={fetchPlacesData}
        />
        <input
          id="places"
          type="text"
          placeholder="Search for places..."
          className="ml-2"
          value={places}
          onChange={(event) => setPlaces(event.target.value)}
        />
        <IoMdCloseCircle
          size={17}
          onClick={handleChange}
          className="mt-1 cursor-pointer"
        />
      </div>
      
      {data && (
        <div className="mt-4 ml-6">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="h-1/2 w-3/4 ml-4"
          />
          <h1 className="text-6xl ml-1">
            {(data.main.temp - 273.15).toFixed(0)}°C
          </h1>
          <p className="mt-2">{createDate(data.dt)}</p>
          <hr className="h-0.5 bg-zinc-300 w-4/5 mt-2" />
          <p className="my-2 ml-8">{data.weather[0].description}</p>
          <p className="ml-8">{data.weather[0].main}</p>
          <p className="absolute font-bold ml-20 z-10 mt-8 text-white">{data.name}</p>
        </div>
      )}

      {image && (
        <div className="mt-4 ml-6 relative">
          <img src={image} alt="Place" className="h-16 w-3/4 ml-4" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
