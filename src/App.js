import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <Weather />
      <footer>
        This project was coded by Merisa and is{" "}
        <a href="https://github.com/Merisabk/react-weather-app" target="_blank">
          open sourced.
        </a>
      </footer>
    </div>
  );
}

export default App;
