import React from "react";

const TimeAndLocation = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex items-center justify-center my-6">
          <p className=" text-white text-xl font-light bg-red-500">
            Sunday, 5 November 2023 | Local Time: 7:46 PM
          </p>
        </div>
        <div className=" flex items-center justify-center my-3">
          <p className=" text-white text-3xl font-medium bg-green-800">
            Mumbai, Ind
          </p>
        </div>
      </div>
    </>
  );
};

export default TimeAndLocation;
