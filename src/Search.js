import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity() {
    const apiKey = `689e969de90a91f7c9389015a9661d89`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="card">
          <div className="row">
            <div className="col-11">
              <form
                className="form-inline"
                id="enter-city"
                onSubmit={handleSubmit}
                onChange={handleCityChange}
              >
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
          </div>
          <div>
            <WeatherInfo data={weatherData} />
            <Forecast city={weatherData.city} />
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
  } else {
    searchCity();
    return "Loading...";
  }
}
