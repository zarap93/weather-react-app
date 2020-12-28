import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastLoop from "./WeatherForecastLoop";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row weather-forecast">
        <WeatherForecastLoop data={forecast.list[0]} />
        <WeatherForecastLoop data={forecast.list[1]} />
        <WeatherForecastLoop data={forecast.list[2]} />
        <WeatherForecastLoop data={forecast.list[3]} />
        <WeatherForecastLoop data={forecast.list[4]} />
        <WeatherForecastLoop data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = `689e969de90a91f7c9389015a9661d89`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
