import React, { useState, useEffect } from "react";

const Search = ({ setSearch }) => {
  const [text, setText] = useState("");

  return (
    <div className="col-md-9">
      <div className="card p-4 mt-3">
        <h3 className="heading mt-5 text-center">Local Weather</h3>
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
                setSearch(text);
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
