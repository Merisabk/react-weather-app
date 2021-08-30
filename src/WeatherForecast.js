import React from "react";
import Weathericon from "./Weathericon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Thu</div>
          <Weathericon code="01d" size={32} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">21º</span>
            <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
