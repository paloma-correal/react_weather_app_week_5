import React, {useState} from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit] =useState("celsius");
    function showToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit ("celsius");
    }

    function fahrenheit(){
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
    return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}
            </span>
            <span className="unit"> C° | {" "}
            < a href="/" onClick={showToFahrenheit}> 
            F°
            </a>  
            </span> 
            </div>
            );
} else {
    
    return (
        <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}
        </span>
        <span className="unit">
        <a href="/" onClick={showToFahrenheit}>
        C°
        </a> {" "}
        | F°
        </span>
        </div>

    );
}
}