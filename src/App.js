import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./Sass/App.sass";
import Weather from "./components/Weather.js";
import Search from "./components/Search.js";

const App = () => {
  const [searchVal, setSearchVal] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (searchVal !== "") {
      //here is where the address request for long and lat goes
      const requestOne = axios.get(one);
    }
  }, [searchVal]);
  //only fetch if searchVal !== ""
  //otherwise return alert
  //if lat and long come back and no error --> fetch for noaa
  //https://api.weather.gov/points/39.7332,-75.1316/forecast
  //if error return alert
  //otherwise
  //add data as props on weather component
  //re-route based on if weather data exists???
  //will probably need some kind of load processor

  const setSearch = (value) => {
    setSearchVal(value);
  };

  return (
    <Router>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <Switch>
            <Route exact path="/">
              <Search setSearch={setSearch} />
            </Route>
            <Route exact path="/current-weather">
              <Weather />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
