import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Search() {
  let weatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="Search card card-body">
      <form className="form-inline" id="enter-city">
        <div className="row">
          <div className="col-9</div>">
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
            />
            <button type="submit" className="form-control btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <h5>Toronto, ON</h5>
      <ul>
        <li>Last Updated: Thursday 15:45</li>
        <li>Snow</li>
      </ul>
      <div className="row">
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
  );
}
