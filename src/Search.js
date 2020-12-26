import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { get } from "jquery";

export default function Search() {
  let weatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  const apiKey = `689e969de90a91f7c9389015a9661d89`;
  let city = "Toronto";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return (
    <div className="Search">
      <div className="card">
        <div className="row">
          <div className="col-9">
            <form className="form-inline" id="enter-city">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                id="search-city"
              />
              <button type="submit" className="form-control btn-primary">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="col-3">
            <div className="unit-temps">
              <span className="units">
                <a href="/" className="active" id="celsius">
                  {" "}
                  °C
                </a>{" "}
                |
                <a href="/" className="fahrenheit">
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <h4>Toronto</h4>
        <ul className="date-time-weather">
          <li>Last Updated: Thursday 15:45</li>
          <li>Snow</li>
        </ul>
        <div className="row current-info">
          <h1 className="col-4">-2°</h1>
          <div className="col-4">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: 30%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
          <div className="row time-of-day" id="daily-forecast"></div>
        </div>
      </div>
      <p>
        <a
          href="https://github.com/zarap93/weather-react-app.git"
          target="_new"
        >
          Open-source code
        </a>{" "}
        by Zara Paris
      </p>
    </div>
  );
}
