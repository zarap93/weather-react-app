import React, { useState } from "react";

export default function UnitTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="unit-temps">
        <span className="temp">{props.celsius}°</span>
        <span className="units">
          <a href="/" className="active" id="celsius">
            {" "}
            °C{" "}
          </a>
          |
          <a href="/" onClick={convertToFahrenheit} className="fahrenheit">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="unit-temps">
        <span className="temp">{Math.round(fahrenheit)}°</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius} className="celsius">
            {" "}
            °C{" "}
          </a>
          |
          <a href="/" className="active" id="fahrenheit">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
