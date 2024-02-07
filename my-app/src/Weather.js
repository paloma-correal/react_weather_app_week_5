import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import {InputGroup , Form, Button} from "react-bootstrap"


export default function Weather(prop) {
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState (prop.defaultCity);

    function handleResponse(response){

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function search (){
        const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }


    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event){
        setCity(event.target.value);

    }

    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
    
            <InputGroup className="md-3">
            <Form.Control
              placeholder="Enter city.."
              aria-describedby="basic-addon2"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <Button variant="primary"  className="btn btn-primary  text-light">
              Search
            </Button>
          </InputGroup>  

          <div></div>
                
                </form>
               <WeatherInfo data={weatherData} />
                </div>
                );
    } else {
        search();
        return "loading..";
    }
}