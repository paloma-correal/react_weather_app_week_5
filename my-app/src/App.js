import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.instagram.com/@palomisquis" 
          target="_blank" 
          rel="noopener noreferrer">
           Paloma Correal
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/paloma-correal/react_weather_app_week_5"
            target="_blank"
            rel="noopener noreferrer"
            >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://cerulean-beignet-740c0c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
