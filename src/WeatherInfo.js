import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h4>{props.data.city}</h4>
      <ul className="date-time-weather">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row current-info">
        <h1 className="col-4">{props.data.temperature}°</h1>
        <div className="col-4">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="row time-of-day" id="daily-forecast"></div>
      </div>
    </div>
  );
}
