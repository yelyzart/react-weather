import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, getCity] = useState(props.defaultCity);
  const [element, searchElements] = useState({ ready: false });

  function handleResponse(response) {
    searchElements({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: `Wind: ${response.data.wind.speed} km/h`,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: `
      Humidity: ${response.data.main.humidity}% `,
    });
  }

  function search() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7462c8bafebf7d5e231ed68152a3e97e&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function citySubmit(event) {
    event.preventDefault();
    search();
    // submit and the searching for city
  }

  function nameCity(event) {
    getCity(event.target.value);
    //getting name of a city
  }

  if (element.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6 firstColumn ">
            <form onSubmit={citySubmit}>
              <input
                className="search enter-city"
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={nameCity}
              />
              <input type="submit" value="🔎" className="search-city" />
            </form>
            <Current data={element} />
          </div>
          <div className="col-6 secondColumn">
            <Forecast coordinates={element.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
