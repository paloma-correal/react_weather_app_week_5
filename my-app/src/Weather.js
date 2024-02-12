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
            city: response.data.city.id,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
            
        });
        console.log(response)
    }

    function search (){
        const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        console.log(weatherData)
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
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

                <div>
                    
                </div>
                
                </form>
               <WeatherInfo data={weatherData} />
                </div>
                );
    } else {
        search();
        return "loading..";
    }
}