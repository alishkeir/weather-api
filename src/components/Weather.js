import React from 'react'
import clear from "../img/weather-icons/clear.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import unknown from "../img/weather-icons/unknown.svg"

export default function Weather(props) {
    const id = props.weather.id
    let img;
    if (id < 300) {
        img = storm
    }
    else if (id < 500) {
        img = drizzle
    }
    else if (id < 600) {
        img = rain
    }
    else if (id < 700) {
        img = snow
    }
    else if (id < 800) {
        img = fog
    }
    else if (id === 800) {
        img = clear
    }
    else if (id === 801) {
        img = partlycloudy
    }
    else if (id < 806) {
        img = mostlycloudy
    }
    else {
        img = unknown
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <img className="main-weather" alt="MainWeather" src={img}></img>
            <p className="weather-status">{props.weather.description}</p>
            <p className="weather-temp"><span className="bolder">Temperature</span> <span className="from">{props.weather.main.temp_min}&deg;C</span> to <span className="to">{props.weather.main.temp_max}&deg;</span>C</p>
            <p className="humidity-pressure"><span className="bolder">Humidity</span> <span className="hum">{props.weather.main.humidity}%</span> <span className="bolder">Pressure</span>  <span className="press">{props.weather.main.pressure}</span></p>
        </div>
    )
}

