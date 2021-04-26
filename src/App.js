import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import "./Sass/App.sass";
import Weather from "./components/Weather.js";
import Search from "./components/Search.js";

const App = () => {
  //hooks mantaining state including search, weather result, and favorite locations list
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState();

  const history = useHistory();

  //update this so that the api key lives in another file
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  //nested api call for both geolocation and weather
  useEffect(() => {
    if (address !== "") {
      const location = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
      const requestOne = axios.get(location);

      requestOne
        .then((response) => {
          const result = response.data.results[0].geometry.location;
          response.data.results[0].address_components.forEach((elem) => {
            if (elem.types.includes("locality")) {
              setCity(elem.long_name);
            }
          });

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
          const finalWeatherData = result.data.properties.periods;
          setWeather({
            today: finalWeatherData[0],
            thisweek: finalWeatherData.slice(1, finalWeatherData.length - 1),
          });
          setAddressFromInput("");
        })
        .catch((error) => {
          console.log("something isnt working");
        });
    }
  }, [address]);

  //function that sends search hook down to child component
  const setAddressFromInput = (value) => {
    setAddress(value);
  };

  return (
    <Router>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          {weather ? <Redirect to="/current-weather" /> : null}
          <Switch>
            <Route exact path="/">
              <Search setAddressFromInput={setAddressFromInput} />
            </Route>
            <Route exact path="/current-weather">
              <Weather weather={weather} city={city} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
