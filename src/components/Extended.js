import React from "react";

const Extended = ({ weather }) => {
  const date = new Date().toISOString().split("T")[0];
  return (
    <div className="container">
      {weather.thisweek.map((elem, idx) => {
        if (!elem.startTime.includes(date)) {
          return (
            <div className="row" id="extendedforcast" key={idx}>
              <div className="col-sm-4">{elem.name}</div>
              <div className="col-sm-2">
                {elem.temperature}° {elem.temperatureUnit}
              </div>
              <div className="col">{elem.shortForecast}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Extended;
