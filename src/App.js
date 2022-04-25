import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <Weather />
        <footer>
          This project was coded by Kelsey Murray and is open-sourced on{" "}
          <a
            href="https://github.com/artistkelz/my-weather-project-react2022"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
