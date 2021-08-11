import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />

        <footer>
          This project was coded by Merisa and is{" "}
          <a
            href="https://github.com/Merisabk/react-weather-app"
            target="_blank rel= noreferrer"
          >
            open sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
