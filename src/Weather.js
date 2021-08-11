import axios from "axios";
import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <input type="search" placeholder="Enter a city..." />
      <input type="Submit" value="Search" />
      <h1>Porto</h1>
      <h2>Tuesday 10:00</h2>
      <ul>
        <li>Clear sky</li>
        <li>22ºC</li>
        <li>Humidity: 70%</li>
        <li>Wind: 3 km/h</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="cloudy" />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
