import React from "react";
import "./index.css";

export default function Search() {
  let weatherData = {
    temperature: 2,
    date: " Sunday, 16:56",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    wind: "10 km/h",
    humidity: "93%",
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-9">
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
          <h5 className="card-title" id="city-display">
            Toronto, ON
          </h5>
          <h6>
            <span className="date-time"> Last updated:{weatherData.date}</span>
            <br />
            <span className="description">{weatherData.description}</span>
          </h6>
          <div className="row current-info">
            <div className="col-4 current-temp" id="current-temp">
              {weatherData.temperature}°
            </div>
            <div className="col-4 current-icon">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </div>
            <div className="col-4">
              <div className="current-wind">
                Wind: {weatherData.wind}
                <span id="current-wind"></span>
              </div>
              <div className="current-humidity">
                Humidity: {weatherData.humidity}
                <span id="current-humidity"></span>
              </div>
            </div>
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
