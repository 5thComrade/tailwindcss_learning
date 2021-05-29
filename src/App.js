import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <div className="text-gray-600 font-primary grid md:grid-cols-5">
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
