import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Search() {
  let weatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
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
          <h1 className="col-4">2°</h1>
          <div className="col-4">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: 30%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
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
