import React from "react";
import "./index.css";
import bootstrap from "bootstrap";

export default function Search() {
  return (
    <form className="form-inline" id="enter-city">
      <input
        type="text"
        placeholder="Enter a city"
        className="form-control"
        id="search-city"
      />
      <button type="submit" className="form-control">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
