import React, { useState } from "react";
import Logo from "../images/weather-icon.png";

const Search = ({ setAddressFromInput }) => {
  const [text, setText] = useState("");

  return (
    <div className="col-md-9">
      <div className="card p-4 mt-3">
        <div className="row">
          <div className="col-md-12">
            <h3 className="heading mt-5 text-center">
              <img src={Logo} width="45" />
              &nbsp;&nbsp;Local Weather
            </h3>
          </div>
        </div>
        <div className="d-flex justify-content-center px-5">
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Enter full address or zipcode..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              required
            />
            <a
              href="#"
              className="search-icon"
              onClick={(e) => {
                e.preventDefault();
                setAddressFromInput(text);
                setText("");
              }}
            >
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="row d-flex justify-content-center" id="favs">
          These are the favs
        </div>
      </div>
    </div>
  );
};

export default Search;
