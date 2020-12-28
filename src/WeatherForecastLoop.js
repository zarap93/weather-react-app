import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastLoop(props) {
  function showHours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function showTemperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="col-2">
      {showHours()}
      <div className="canvas">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      {showTemperature()}
    </div>
  );
}
