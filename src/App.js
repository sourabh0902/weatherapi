import React from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatueAndDetails from "./components/TemperatueAndDetails";

const App = () => {
  return (
    <>
      <div className="mx-auto my-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TemperatueAndDetails />
      </div>
    </>
  );
};

export default App;
