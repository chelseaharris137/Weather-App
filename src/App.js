import React, { useState, useEffect } from "react";
import "./Sass/App.sass";
import Weather from "./components/Weather.js";
import Search from "./components/Search.js";

const App = () => {
  const [results, setResults] = useState("jhjkh");
  //fetch here and then pass down results as a prop on weather
  //pass up input on change to handle fetch?
  //maybe use router instead -> on data load switch pages and pass data down
  return (
    <div className="container mt-4">
      {results === "" ? <Search /> : <Weather />}
    </div>
  );
};

export default App;
