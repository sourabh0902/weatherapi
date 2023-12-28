import React from "react";
import { UilSearch, UilLocationPinAlt } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center my-6 bg-purple-500">
        <div className="flex flex-row w-3/4 items-center justify-between space-x-4">
          <input
            type="text"
            placeholder="search"
            className=" text-lg font-light w-full p-1 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg"
          />
          <UilSearch size={25} className=" text-white cursor-pointer" />
          <UilLocationPinAlt size={25} className=" text-white cursor-pointer" />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-end">
          <button className=" text-xl text-white font-md">&#176;C</button>
          <p className=" text-white mx-1 font-medium"> | </p>
          <button className=" text-xl text-white font-md">&#176;F</button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
