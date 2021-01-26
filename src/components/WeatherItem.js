import React from 'react'

export default function HWeatherItem(props) {
    return (
        <div key={Math.random()} className="weatherItem">
            <span className="time">{props.time}</span>
            <img className="weatherImg" src={props.img} />
            <span className="weatherTemp">{props.temp}&deg;C</span>
        </div>
    )
}