import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "./Sass/App.sass";
import Weather from "./components/Weather.js";
import Search from "./components/Search.js";

const App = () => {
  //hooks mantaining state including search, weather result, and favorite locations list
  const [searchVal, setSearchVal] = useState("");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [displayLocation, setDisplayLocation] = useState("");

  //update this so that the api key lives in another file
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  //nested api call for both geolocation and weather
  useEffect(() => {
    if (searchVal !== "") {
      const address = searchVal;
      const location = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
      const requestOne = axios.get(location);

      requestOne
        .then((response) => {
          const result = response.data.results[0].geometry.location;
          const location = response.data.results[0].formatted_address;
          setDisplayLocation(location);
          return result;
        })
        .then((geoData) => {
          const lat = geoData.lat;
          const long = geoData.lng;
          if (lat === undefined || long === undefined) {
            alert("Please enter a valid zipcode or address");
          }
          return {
            lat: lat,
            long: long,
          };
        })
        .then((location) => {
          const lat = location.lat;
          const long = location.long;
          return axios.get(
            `https://api.weather.gov/points/${lat},${long}/forecast`
          );
        })
        .then((result) => {
          setWeather(result.data.properties.periods);
        })
        .catch((error) => {
          console(error);
        });
    }
  }, [searchVal]);

  //function that sends search hook down to child component
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
              <Weather weather={weather} displayLocation={displayLocation} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
