import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatueAndDetails = () => {
  return (
    <>
      <div className=" bg-pink-800">
        <div className="flex items-center justify-center py-6 text-2xl text-cyan-300">
          <p>Rainy</p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
          <img
            src="https://e7.pngegg.com/pngimages/22/328/png-clipart-symbol-gratitude-journal-openweathermap-symbol-love-miscellaneous-thumbnail.png"
            alt="sun"
            className=" w-20"
          />
          <p className=" text-5xl">34&#176;</p>
          <div className=" flex flex-col justify-start items-start space-y-2">
            <div className=" flex font-light text-base items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Real Feel:
              <span className=" font-medium ml-1">32&#176;</span>
            </div>

            <div className=" flex font-light text-base items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className=" font-medium ml-1">64%</span>
            </div>

            <div className=" flex font-light text-base items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className=" font-medium ml-1">5 km/h</span>
            </div>
          </div>
        </div>

          <div className="flex items-center justify-evenly text-white px-3 my-3">
          
          <div className=" flex font-light text-base items-center justify-center">
              <UilSun size={25} className="mr-1" />
              Rise:
              <span className=" font-medium ml-1">04:50 AM</span>
            </div>

<p className=" text-white mx-2"> | </p>

          <div className=" flex font-light text-base items-center justify-center">
              <UilSunset size={25} className="mr-1" />
              Set:
              <span className=" font-medium ml-1">04:50 AM</span>
            </div>

<p className=" text-white mx-2"> | </p>

<div className=" flex font-light text-base items-center justify-center">
              <UilArrowUp size={25} className="mr-1" />
              High:
              <span className=" font-medium ml-1">04:50&#176;</span>
            </div>

<p className=" text-white mx-2"> | </p>

<div className=" flex font-light text-base items-center justify-center">
              <UilArrowDown size={25} className="mr-1" />
              Low:
              <span className=" font-medium ml-1">04:50&#176;</span>
            </div>





          </div>
      </div>
    </>
  );
};

export default TemperatueAndDetails;
