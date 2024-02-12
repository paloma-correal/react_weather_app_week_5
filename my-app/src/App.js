import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className = "App">
      <h1>Weather App</h1>
      <Weather/>
      <footer>
        This project is coded by Paloma C, 
        {" "}
        <a href="https://github.com/paloma-correal/react_weather_app_week_5">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
  }