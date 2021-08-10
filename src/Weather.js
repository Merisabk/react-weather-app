import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in London is ${response.data.main.temp}`);
  }
  let api =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=754f68c53ca68b26fdebc81ec91936ca&units=metric";

  axios.get(api).then(handleResponse);
  return <h1>Hello from Weather</h1>;
}
