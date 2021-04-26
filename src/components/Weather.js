import React, { useState, useEffect } from "react";
import "../Sass/Weather.sass";
import Today from "./Today";
import Extended from "./Extended";
import Icon from "../images/return-to-search.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Weather = ({ weather, city }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="col-md-9">
      <div className="card p-4 mt-3">
        <Link to="/">
          <img src={Icon} width="35" />
        </Link>

        <div className="d-flex justify-content-center px-5">
          <div id="tempcontent">
            <h5>{city}</h5>
            <h2>
              {weather.today.temperature}°{" "}
              <sup>{weather.today.temperatureUnit}</sup>
            </h2>
            <p>{weather.today.shortForecast}</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-2">
              <button
                onClick={() => setToggle(false)}
                style={{ textDecoration: toggle ? "none" : "underline" }}
              >
                Today
              </button>
            </div>
            <div className="col-md-auto">
              <button
                onClick={() => setToggle(true)}
                style={{ textDecoration: toggle ? "underline" : "none" }}
              >
                This Week
              </button>
            </div>
            <div className="col col-lg-2">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {toggle === false ? (
                <Today weather={weather} />
              ) : (
                <Extended weather={weather} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
