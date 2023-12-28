import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Kolkata",
    },
    {
      id: 4,
      title: "Bangalore",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center my-6 bg-black">
        {cities.map((city,id) => (
          <button key={city.id} className="text-white font-medium text-lg">
            {city.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default TopButtons;
