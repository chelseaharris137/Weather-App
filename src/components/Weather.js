import React, { useState } from "react";

const Weather = () => {
  const [toggle, setToggle] = useState("false");
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-9">
        <div className="card p-4 mt-3">
          <div className="d-flex justify-content-center px-5">
            -Need a router to return to home <br />
            -THIS IS THE FORCASTJDFKJSDFKJSD <br />
            -need a toggle for today and weekly <br />
            -need a save city that passes state back up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
